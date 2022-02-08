/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ todos: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    const next = this.state;
    if (prevState.todos !== next.todos) {
      const temp = JSON.stringify(next.todos);
      localStorage.setItem('todos', temp);
    }
  }

  addTodoItem = (title) => {
    const next = this.state;
    const ans = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...next.todos, ans],
    });
  }

  setUpdate = (updatedTitle, id) => {
    const next = this.state;
    this.setState({
      todos: next.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  deleteItem = (id) => {
    const ans = this.state;
    this.setState({
      todos: [
        ...ans.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  render() {
    const mike = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={mike.todos}
            handleChangesProps={this.handleChange}
            deleteing={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;

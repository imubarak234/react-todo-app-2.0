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
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
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
    console.log(updatedTitle, id);
  }

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
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;

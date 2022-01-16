/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItems from './TodoItems';

class TodosList extends React.Component {
  render() {
    const mike = this.props;
    return (
      <ul>
        {mike.todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            handleChangesProps={mike.handleChangesProps}
            deleteing={mike.deleteing}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChangesProps: PropTypes.func.isRequired,
  deleteing: PropTypes.func.isRequired,
};

export default TodosList;

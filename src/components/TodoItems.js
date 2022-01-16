/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
// import PropTypes from 'prop-types';

class TodoItems extends React.Component {
  render() {
    const next = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={next.todo.completed}
          onChange={() => next.handleChangesProps(next.todo.id)}
        />
        {next.todo.title}
        <button
          type="button"
          onClick={() => next.deleteing(next.todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

TodoItems.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangesProps: PropTypes.func.isRequired,
  deleteing: PropTypes.func.isRequired,
};

export default TodoItems;

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React from 'react';
import styles from './TodoItems.module.css';
// import PropTypes from 'prop-types';

class TodoItems extends React.Component {
  render() {
    const next = this.props;
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          checked={completed}
          className={styles.checkbox}
          onChange={() => next.handleChangesProps(id)}
        />
        <button
          type="button"
          onClick={() => next.deleteing(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
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

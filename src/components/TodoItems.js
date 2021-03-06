/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import useDoubleClick from 'use-double-click';
import styles from './TodoItems.module.css';
// import PropTypes from 'prop-types';

const TodoItems = (props) => {
  const {
    handleChangesProps, deleteing, todo, setUpdate,
  } = props;

  const [editing, setEdit] = useState(false);
  const handleEditing = () => {
    setEdit(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') setEdit(false);
    // console.log(event.key);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const buttonRef = useRef();

  useDoubleClick({
    onSingleClick: (e) => {
      console.log(e, 'single click');
    },
    onDoubleClick: () => {
      handleEditing();
    },
    ref: buttonRef,
    latency: 250,
  });

  const viewMode = {};
  const editMode = {};

  if (editing) viewMode.display = 'none';
  else editMode.display = 'none';

  return (
    <li className={styles.item}>
      <div
        ref={buttonRef}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          className={styles.checkbox}
          onChange={() => handleChangesProps(todo.id)}
        />
        <button
          type="button"
          onClick={() => deleteing(todo.id)}
        >
          Delete
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        value={todo.title}
        className={styles.textInput}
        onChange={(e) => {
          setUpdate(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItems.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangesProps: PropTypes.func.isRequired,
  deleteing: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItems;

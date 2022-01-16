/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const hi = this.state;
    const there = this.props;
    e.preventDefault();
    there.addTodoProps(hi.title);
    this.setState({
      title: '',
    });
  }

  render() {
    const next = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo...."
          value={next.title}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;

import React from "react";
import PropTypes from "prop-types";
import RemoveTodo from "../containers/RemoveTodo";

const Todo = ({ onClick, completed, text, id }) => (
  <ul>
    <li onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}>
      {text} {id}
    </li>
    <RemoveTodo id={id} />
  </ul>
  
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo;

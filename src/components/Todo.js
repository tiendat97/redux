import React from "react";
import PropTypes from "prop-types";
import RemoveTodo from "../containers/RemoveTodo";

class Todo extends React.Component {
  render(){
    return(
  <ul>
    <li onClick={this.props.onClick}
    style={{
      textDecoration: this.props.completed ? "line-through" : "none"
    }}>
      {this.props.text}
    </li>
    <RemoveTodo id={this.props.id} />
  </ul>
  )
}
}

// const Todo = ({ onClick, completed, text, id }) => (
//   <ul>
//     <li onClick={onClick}
//     style={{
//       textDecoration: completed ? "line-through" : "none"
//     }}>
//       {text}
//     </li>
//     <RemoveTodo id={id} />
//   </ul>
  
// );

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo;

import React from "react";
import PropTypes from "prop-types";
import RemoveTodo from "../containers/RemoveTodo";
import EditTodo from "../containers/EditTodo";
import { connect } from "react-redux";

class Todo extends React.Component {

  render() {

    return (
      <div>
        <tr
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? "line-through" : "none"
          }}
        >
          {this.props.text}
        </tr>
        <EditTodo id={this.props.id} isEditing={this.props.isEditing}/>
        <RemoveTodo id={this.props.id} />
      </div>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default Todo;

import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

class RemoveTodo extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.dispatch(removeTodo(this.props.id));
          }}
          >
          Remove Todo
          </button>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   removeTodo1: id => dispatch(removeTodo(id))
// })

// const mapDispatchToProps = (dispatch) => ({
//   removeTodo1: (id) => dispatch(removeTodo(id)),
// })

// export default connect(mapDispatchToProps)(RemoveTodo);

export default connect()(RemoveTodo)


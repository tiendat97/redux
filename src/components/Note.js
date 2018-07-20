import React, { Component } from "react";

class Note extends Component {
  handleRemove() {
    var { index, handleRemove } = this.props;
    handleRemove(index);
  }
  
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.handleRemove.bind(this)}>Delete</button>
      </div>
    );
  }
}

export default Note;

import React, { Component } from "react";
import { connect } from "react-redux";
class NoteForm extends Component {
  // prevent load page
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNote(this.refs.myInput.value);
    this.refs.myInput.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter your task" ref="myInput" />
        <button>Add</button>
      </form>
    );
  }
}

export default NoteForm;



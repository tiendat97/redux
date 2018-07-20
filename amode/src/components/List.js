import React, { Component } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm"
import {connect} from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: ["banana", "apple", "lemon"]
    };
  }

  handleRemove(index) {
    this.state.array.splice(index, 1);
    this.setState(this.state);
  }

  handleAddNote(note){
    this.state.array.push(note);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <NoteForm handleAddNote={this.handleAddNote.bind(this)} />
        {this.state.array.map((e, i) => (
          <Note index={i} handleRemove={this.handleRemove.bind(this)} key={i} >
            {e}
          </Note>
        ))}
      </div>
    );
  }
}

var hello = state =>{
  return {
    array: state.array
  }
}

export default connect(hello)(List)
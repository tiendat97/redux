import React, { Component } from "react";
import {connect} from 'react-redux';
class NoteForm extends Component {
  // prevent load page
  handleSubmit(e){
    e.preventDefault();
    this.props.handleAddNote(this.refs.myInput.value);
    this.refs.myInput.value = '';
    this.toggle();
  }

  toggle(){
    this.state.isRight = !this.state.isRight;
    this.setState(this.state);
  }

  render() {  
    if (this.state.isRight) return (
      <form onSubmit={this.handleSubmit.bind(this)} > 
        <input type="text" placeholder="Enter your task" ref="myInput" />
        <button>Add</button>
      </form>
    );
  }
}

export default NoteForm;

// module.exports = connect(function(state){
//   return {isRight: state.isRight}
// })(NoteForm)

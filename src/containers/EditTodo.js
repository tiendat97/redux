import React from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions";


class EditTodo extends React.Component {
 

  renderTaskSection() {
    if (this.props.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={this.props.text} ref="editInput" />
          </form>
        </td>
      );
    }
  }

  renderActionsSection() {
    if (this.props.isEditing) {
      return (
        <td>
          <button onClick={ e => {
            e.preventDefault();
          }}>
          Save
          </button>
          <button onClick={ e => {
            e.preventDefault();
            this.props.dispatch(editTodo(this.props.isEditing))
            console.log(this.props.isEditing)
            console.log(this.props)
          }}>
         
          Cancel
          </button>
        </td>
      );
    } else {
      return (
        <td>
          
            <button onClick={
              e => { 
              e.preventDefault();
              this.props.dispatch(editTodo(this.props.isEditing))
            console.log(this.props.isEditing)}}
            >
            Edit 
            </button>

        </td>
      );
    }
  }


   
  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }

  onEditClick({}) {
    this.setState({isEditing: true })

  }

  onCancelClick() {
    this.setState({isEditing: false })

  }

  onSaveClick(e) {
    e.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }
  // toggleTask(text) {
  //   const foundTodo = _.find(this.state.text, todo => todo.text === text);
  //   foundTodo.isCompleted = !foundTodo.isCompleted;
  //   this.setState({ todos: this.state.todos });
  // }

  // saveTask(oldTask, newTask) {
  //   const foundTodo = _.find(this.state.todos, todo => todo.text === oldTask);
  //   foundTodo.text = newTask;
  //   this.setState({ todos: this.state.todos });
  
  
}

const mapStateToProps = state => ({
  isEditing: state.isEditing
})

export default connect(mapStateToProps)(EditTodo);

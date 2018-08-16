import React from 'react';
import { connect } from 'react-redux';
import { editTodo, saveTodo } from '../actions';

class EditTodo extends React.Component {
    renderEditSection() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <form>
                                <input type="text" ref="editInput" />
                            </form>
                        </td>
                        <td>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.dispatch(editTodo(this.props.id));
                                    this.props.dispatch(
                                        saveTodo(this.props.id, this.refs.editInput.value)
                                    );
                                }}
                            >
                Save
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.dispatch(editTodo(this.props.id));
                                }}
                            >
                Cancel
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

    renderTodoSection() {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    this.props.dispatch(editTodo(this.props.id));
                }}
            >
        Edit
            </button>
        );
    }

    render() {
        return (
            <div>
                {this.props.isEditing
                    ? this.renderEditSection()
                    : this.renderTodoSection()}
            </div>
        );
    }
}

export default connect()(EditTodo);

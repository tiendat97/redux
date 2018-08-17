import React from 'react';
import { connect } from 'react-redux';
import { editTodo, saveTodo } from '../actions';
import PropTypes from 'prop-types';

class EditTodo extends React.Component {
 
    renderEditSection() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <form>
                                    <input type="text"  ref={editInput => (this.input = editInput)}   />
                                </form>
                            </td>
                            <td>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch(editTodo(this.props.id));
                                        this.props.dispatch(
                                            saveTodo(this.props.id, this.input.value)
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
                    </tbody>
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

EditTodo.propTypes = {
    id: PropTypes.number.isRequired,
    isEditing: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(EditTodo);

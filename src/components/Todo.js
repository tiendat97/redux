import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RemoveTodo from '../containers/RemoveTodo';
import EditTodo from '../containers/EditTodo';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <div
                    onClick={this.props.onClick}
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none',
                    }}
                >
                    {this.props.text}
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <EditTodo id={this.props.id} isEditing={this.props.isEditing} />
                            </td>
                            <td>
                                <RemoveTodo id={this.props.id} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isEditing: PropTypes.bool.isRequired,
};

export default connect()(Todo);

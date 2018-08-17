import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        this.newMethod(todo)
                    ))}
                </ul>
            </div>
        );
    }

    newMethod(todo) {
        return <li> <Todo key={todo.id} {...todo} onClick={() => { this.props.toggleTodo(todo.id); } } /></li>;
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            isEditing: PropTypes.bool.isRequired,}).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;

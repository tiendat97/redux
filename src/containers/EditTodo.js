import React from 'react';
import { connect } from 'react-redux'
import { editTodo } from '../actions';

const EditTodo = ({id, dispatch}) => {
    return(
        <div>
            <button onClick={ e => {
                e.preventDefault();
                dispatch(editTodo(id))
            }}>
                Edit Todo
            </button>
        </div>
    )
}

export default connect ()(EditTodo)
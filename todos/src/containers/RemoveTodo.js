import React from 'react';
import { connect } from 'react-redux'
import { removeTodo } from '../actions';

const RemoveTodo = ({ id, dispatch }) => {
    return(
        <div>
            <button onClick={ e => {
                e.preventDefault();
                dispatch(removeTodo(id))
                //console.log(dispatch(removeTodo()))
            }}>
                Remove Todo
            </button>
        </div>
    )
}

export default connect ()(RemoveTodo)
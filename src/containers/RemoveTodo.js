import React from 'react';
import { connect } from 'react-redux'
import { removeTodo } from '../actions';

class RemoveTodo extends React.Component{
    render(){
    return(
        <div>
            <button onClick={ e => {
                e.preventDefault();
                this.props.dispatch(removeTodo(this.props.id))
            }}>
                Remove Todo
            </button>
        </div>
    )
}
}

export default connect ()(RemoveTodo)
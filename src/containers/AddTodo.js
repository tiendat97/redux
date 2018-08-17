import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    render(input) {
        return (
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.dispatch(addTodo(input.value));
                        input.value = '';
                    }}
                >
                    <input ref={node => (input = node)} />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);

import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';
import PropTypes from 'prop-types';

class RemoveTodo extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch(removeTodo(this.props.id));
                    }}
                >
                Remove Todo
                </button>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//   removeTodo1: id => dispatch(removeTodo(id))
// })

// const mapDispatchToProps = (dispatch) => ({
//     removeTodo: (id) => dispatch(removeTodo(id)),
// });

RemoveTodo.propTypes = {
    id: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(RemoveTodo);

// export default connect()(RemoveTodo);

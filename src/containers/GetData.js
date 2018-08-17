import React from 'react';
import axios from 'axios';
import { saveTask } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GetData extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:8086/notes').then((res) => {
            const data = res.data;
            let i;
            for (i = 0; i < data.length; i++) {
                this.props.dispatch(
                    saveTask(data[i]._id, data[i].task_todo, data[i].completed)
                );
            }
        });
    }
}

GetData.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(GetData);
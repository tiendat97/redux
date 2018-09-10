import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

let Loading = ({ loading }) => (

    loading ?
        <div style={{ textAlign: 'center' }}>
            <h1>LOADING</h1>
        </div> :
        null
);

const mapStateToProps = (state) => ({
    loading: state.loading
});

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Loading);

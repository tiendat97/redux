import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
};

let NewsItem = ({ article }) => (
    article ?
        <article style={articleStyle} >
            <div>
                <h1>{article.task_todo}</h1>
                <h2>{article._id}</h2>
                dadfwgag
            </div>
        </article> :
        null
);

const mapStateToProps = (state) => ({
    article: state.text,
});

NewsItem.propTypes = {
    article: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(NewsItem);
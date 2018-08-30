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
        List of task to do:
                <h1>{article[0].id}. {article[0].task_todo}</h1>
            </div>
        </article> :
        null
);

const mapStateToProps = (state) => ({
    article : state.text,
});

NewsItem.propTypes = {
    article: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(NewsItem);

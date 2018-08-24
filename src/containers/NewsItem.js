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
                <h1>{article[1].id}. {article[1].task_todo}</h1>
                <h1>{article[2].id}. {article[2].task_todo}</h1>
                <h1>{article[3].id}. {article[3].task_todo}</h1>
                <h1>{article[4].id}. {article[4].task_todo}</h1>
                <h1>{article[5].id}. {article[5].task_todo}</h1>
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



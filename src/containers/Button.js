import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hover: false };
    }
    render() {
        return (
            <button 
                onMouseOut={() => { this.setState({ hover: false }); }}
                onMouseOver={() => { this.setState({ hover: true }); }}
                onClick={this.props.getNews}
            >Press to see News</button>
        );
    }

}

const mapDispatchToProps = {
    getNews: getNews,
};

Button.propTypes = {
    getNews :  PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Button);
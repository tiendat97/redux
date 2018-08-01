import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component{
  render(){
    return(
      <button
       onClick={this.props.onClick}
       disabled={this.props.active}
       style={{
           marginLeft: '4px',
       }}
    >
      {this.props.children}
    </button>
    );
  }
}

// class Link extends Component = ({ active, children, onClick }) => (
//     <button
//        onClick={onClick}
//        disabled={active}
//        style={{
//            marginLeft: '4px',
//        }}
//     >
//       {children}
//     </button>
// )

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link

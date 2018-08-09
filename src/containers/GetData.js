import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class GetData extends React.Component {
  render(input) {
    return (
        <div>{this.props.dispatch(getData())}</div>
);
  }
}

export default connect()(getData);

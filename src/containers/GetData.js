import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

export class GetData extends React.Component {
  render() {
    return 
    <div>
    {this.props.dispatch(getData(get_data))}
    </div>
  }
}
export default connect()(GetData);

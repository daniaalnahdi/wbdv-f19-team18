import React from "react";
import { Link } from "react-router-dom";

class SuccessMessage extends React.Component {
  render() {
    if (this.props.message === "") {
      return null;
    } else {
      return (
        <div className="alert alert-success" role="alert">
          {this.props.message}
        </div>
      );
    }
  }
}
export default SuccessMessage;

import React from "react";
import { Link } from "react-router-dom";

class ErrorMessage extends React.Component {
  render() {
    if (this.props.message === "") {
      return null;
    } else {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.message}
        </div>
      );
    }
  }
}
export default ErrorMessage;

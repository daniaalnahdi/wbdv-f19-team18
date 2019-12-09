import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicyMessage = ({ hidden, hide }) => {
  if (!hidden) {
    return (
      <div className="alert alert-info" role="alert">
        <h6>
          Remember to review our
          <Link to="/privacy-policy"> privacy policy</Link>!
        </h6>
        <button type="button" className="btn btn-info" onClick={() => hide()}>
          Hide Message
        </button>
      </div>
    );
  } else {
    return null;
  }
};
export default PrivacyPolicyMessage;

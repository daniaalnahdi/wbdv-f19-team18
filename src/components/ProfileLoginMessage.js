import React from "react";
import { Link } from "react-router-dom";

const ProfileLoginMessage = () => {
  return (
    <div className="container-fluid">
      <h2>Login Required</h2>
      <h6>
        Please <Link to="/login"> login</Link> to view your profile.
      </h6>
    </div>
  );
};
export default ProfileLoginMessage;

import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <Link to="/" class="navbar-brand" href="#">
            App Name
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link" href="#">
                Home
              </Link>
              <Link to="/search" className="nav-item nav-link" href="#">
                Search
              </Link>
              <Link to="/login" className="nav-item nav-link" href="#">
                Login
              </Link>
              <Link to="/profile" className="nav-item nav-link" href="#">
                Profile
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

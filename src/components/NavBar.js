import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            App Name
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/search" className="nav-item nav-link">
                Search
              </Link>
              {!this.props.isLoggedIn &&
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>}
              {this.props.isLoggedIn && (
                <Link to="/profile/:id" className="nav-item nav-link">
                  Profile
                </Link>
              )}
              {!this.props.isLoggedIn && (
                <Link to="/profile" className="nav-item nav-link">
                  Profile
                </Link>
              )}
              {this.props.isLoggedIn && (
                <Link to="/editor" className="nav-item nav-link">
                  Create Recipe
                </Link>
              )}
              {this.props.isLoggedIn && (
                <Link to="/profile" className="nav-link disabled">
                  Logged In As {this.props.user.name}
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

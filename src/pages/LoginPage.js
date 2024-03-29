import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      success: ""
    };
  }

  updateUsername(username) {
    this.setState(prevState => {
      return {
        ...prevState,
        username: username
      };
    });
  }

  updatePassword(password) {
    this.setState(prevState => {
      return {
        ...prevState,
        password: password
      };
    });
  }

  validate() {
    if (this.state.username === "" || this.state.password === "") {
      this.setState(prevState => {
        return {
          ...prevState,
          error: "Username or password cannot be empty."
        };
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          error: ""
        };
      });
    }
  }

  loginUser() {
    this.validate();

    this.props.login(this.state.username, this.state.password)
        .then(user => {
          if (user.error === "invalid login") {
            this.setState(prevState => {
              return {
                ...prevState,
                error: "Incorrect username or password."
              };
            });
          } else if (user === '') {
            //nothing
          } else {
            //send info to homepage to populate data
            this.props.loginUser(user);

            this.setState(prevState => {
              return {
                ...prevState,
                success: "Login successful."
              };
            });
          }
        });
  }

  render() {
    return (
      <div class="container-fluid">
        <h1>Login</h1>
        <ErrorMessage message={this.state.error} />
        <SuccessMessage message={this.state.success} />
        <form>
          <div className="form-group row">
            <label for="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="username"
                placeholder="Alice"
                onChange={e => {
                  this.updateUsername(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="123qwe#$%"
                onChange={e => {
                  this.updatePassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  this.loginUser();
                }}
              >
                Sign in
              </button>
              <div className="row">
                <div className="col-6">
                  <Link to="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

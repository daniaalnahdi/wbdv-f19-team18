import React from "react";
import { Link } from "react-router-dom";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <h1>Login</h1>
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
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="123qwe#$%"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button type="button" className="btn btn-primary btn-block">
                Sign in
              </button>
              <div className="row">
                <div className="col-6">
                  <Link to='/register'>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

import React from "react";

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <h1>Register</h1>
        <form>
          <div className="form-group row">
            <label for="usernameFld" className="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input
                className="form-control"
                id="usernameFld"
                placeholder="Alice"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="passwordFld" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="passwordFld"
                placeholder="123qwe#$%"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="verifyPasswordFld" class="col-sm-2 col-form-label">
              Verify Password{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="verifyPasswordFld"
                placeholder="123qwe#$%"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button type="button" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <div className="row">
                <div className="col-6">
                  <a href="#">Login</a>
                </div>
                <div className="col-6">
                  <a href="../" className="float-right">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

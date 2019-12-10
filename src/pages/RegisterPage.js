import React from "react";
import styles from "../css/RegisterPage.css";
import { Link } from "react-router-dom";

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <h1>Register</h1>
        <form>
          <div className="form-group row">
            <label for="firstFld" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div class="col-sm-10">
              <input
                className="form-control"
                id="firstFld"
                placeholder="Alice"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="lastFld" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div class="col-sm-10">
              <input
                className="form-control"
                id="lastFld"
                placeholder="Wonderland"
              />
            </div>
          </div>
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
              Verify Password
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
          <div class="form-group row">
            <label className="col-sm-2 col-form-label">User Role?</label>
            <div class="col-sm-10">
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Admin
              </label>
            </div>
          </div>
          <div class="form-group row">
            <label className="col-sm-2 col-form-label">Diet?</label>
            <div class="col-sm-10">
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="veg"
              />
              <label className="form-check-label" for="veg">
                Vegetarian
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="v"
              />
              <label className="form-check-label" for="v">
                Vegan
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="keto"
              />
              <label className="form-check-label" for="keto">
                Ketogenic
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="healthy"
              />
              <label className="form-check-label" for="healthy">
                Healthy
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="w30"
              />
              <label className="form-check-label" for="w30">
                whole30
              </label>
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
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

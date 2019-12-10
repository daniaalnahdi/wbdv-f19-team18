import React from "react";
import styles from "../css/RegisterPage.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      success: "",
      admin: false,
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        diets: []
      }
    };
  }

  updateFirstName(first) {
    this.setState(prevState => {
      return {
        ...prevState,
        user: {
          ...prevState.user,
          firstName: first
        }
      };
    });
  }

  updateLastName(last) {
    this.setState(prevState => {
      return {
        ...prevState,
        user: {
          ...prevState.user,
          lastName: last
        }
      };
    });
  }

  updateUsername(username) {
    this.setState(prevState => {
      return {
        ...prevState,
        user: {
          ...prevState.user,
          username: username
        }
      };
    });
  }

  updatePassword(password) {
    this.setState(prevState => {
      return {
        ...prevState,
        user: {
          ...prevState.user,
          password: password
        }
      };
    });
  }

  updateAdmin(admin) {
    this.setState(prevState => {
      return {
        ...prevState,
        admin: admin,
        user: {
          ...prevState.user
        }
      };
    });
  }

  updateDiet(diet) {
    this.setState(prevState => {
      return {
        ...prevState,
        user: {
          ...prevState.user,
          diets: [...prevState.user.diets, diet]
        }
      };
    });
  }

  registerUser() {
    if (
      this.state.user.username === "" ||
      this.state.user.password === "" ||
      this.state.user.firstName === "" ||
      this.state.user.lastName === ""
    ) {
      this.setState(prevState => {
        return {
          error: "User information fields cannot be empty.",
          success: "",
          admin: prevState.admin,
          user: prevState.user
        };
      });
    } else {
      this.state.admin
        ? this.props.createAdmin(this.state.user)
        : this.props.createUser(this.state.user);

      this.setState(() => {
        return {
          error: "",
          success:
            "Registration successful. Go to Login page to access your account.",
          admin: false,
          user: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            diets: []
          }
        };
      });
    }
  }

  render() {
    return (
      <div class="container-fluid">
        <h1>Register</h1>
        <ErrorMessage message={this.state.error} />
        <SuccessMessage message={this.state.success} />
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
                onChange={e => {
                  this.updateFirstName(e.target.value);
                }}
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
                onChange={e => {
                  this.updateLastName(e.target.value);
                }}
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
                onChange={e => {
                  this.updateUsername(e.target.value);
                }}
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
                onChange={e => {
                  this.updatePassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              className="col-sm-2 col-form-label"
              onClick={() => {
                this.state.admin
                  ? this.updateAdmin(false)
                  : this.updateAdmin(true);
              }}
            >
              User Role?
            </label>
            <div class="col-sm-10">
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="exampleCheck1"
                onChange={e => {
                  e.target.checked
                    ? this.updateAdmin(true)
                    : this.updateAdmin(false);
                }}
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
                onChange={e => {
                  if (e.target.checked) {
                    this.updateDiet("Vegetarian");
                  }
                }}
              />
              <label className="form-check-label" for="veg">
                Vegetarian
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="v"
                onChange={e => {
                  if (e.target.checked) {
                    this.updateDiet("Vegan");
                  }
                }}
              />
              <label className="form-check-label" for="v">
                Vegan
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="keto"
                onChange={e => {
                  if (e.target.checked) {
                    this.updateDiet("Ketogenic");
                  }
                }}
              />
              <label className="form-check-label" for="keto">
                Ketogenic
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="healthy"
                onChange={e => {
                  if (e.target.checked) {
                    this.updateDiet("Healthy");
                  }
                }}
              />
              <label className="form-check-label" for="healthy">
                Healthy
              </label>
              <input
                type="checkbox"
                className={styles.checkbox + "form-check-input checkbox"}
                id="w30"
                onChange={e => {
                  if (e.target.checked) {
                    this.updateDiet("Whole 30");
                  }
                }}
              />
              <label className="form-check-label" for="w30">
                whole30
              </label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  this.registerUser();
                }}
              >
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

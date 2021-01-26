/* eslint-disable no-invalid-this */
/* eslint-disable max-lines-per-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import cars from "../cars.jpg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      errors: { error: "" }
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mode !== state.mode) {
      return {
        mode: props.mode
      };
    }
    return null;
  }

  regRouter = () => {
    if (this.state.mode === "Dealer") {
      return "/dealerSignIn";
    } else if (this.state.mode === "Manufacturer") {
      return "/manufacturerSignIn";
    }
    return "/";
  };

  inputGenerator = () => {
    if (this.state.mode === "Dealer") {
      return (
        <tr>
          <td className="align-bottom">
            <label htmlFor="contact" style={{ backgroundColor: "white" }}>
              <h4 className="font-weight-light">
                {this.state.mode} Contact:
                <span className="required">*</span>:
              </h4>
            </label>
          </td>
          <td>
            <input
              className={classnames("form-control input-sm", {
                "is-invalid": this.state.errors.error
              })}
              type="number"
              id="contact"
              name="contact"
              placeholder="Contact goes here! Ex. 9876543210"
              required
            />
          </td>
        </tr>
      );
    } else if (this.state.mode === "Manufacturer") {
      return (
        <tr>
          <td className="align-bottom">
            <label htmlFor="email" style={{ backgroundColor: "white" }}>
              <h4 className="font-weight-light">{this.state.mode} Email:</h4>
            </label>
          </td>
          <td>
            <input
              className={classnames("form-control input-sm", {
                "is-invalid": this.state.errors.error
              })}
              type="email"
              id="email"
              name="email"
              placeholder="Email goes here! Ex. manufacturer@company.com"
              required
            />
          </td>
        </tr>
      );
    }
    return null;
  };

  render() {
    const style = {
      padding: "10px",
      overflow: "hidden",
      height: "100vh",
      fontFamily: "Serif",
      color: "white",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${cars})`,
      backgroundColor: "white"
    };
    return (
      <div className="container-fluid" style={style}>
        <div>
          <div
            className="row justify-content-center"
            style={{
              color: "Black"
            }}
          >
            <h1 className="font-weight-light">Welcome {this.state.mode}!</h1>
          </div>
          <div
            className="row justify-content-center"
            style={{
              color: "Black"
            }}
          >
            <h5 className="font-weight-light">Please register to continue!</h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-9 table-responsive">
              <form>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="align-bottom">
                        <label
                          htmlFor="name"
                          style={{ backgroundColor: "white" }}
                        >
                          <h4 className="font-weight-light">
                            {this.state.mode} Name:
                            <span className="required">*</span>:
                          </h4>
                        </label>
                      </td>
                      <td>
                        <input
                          className={classnames("form-control input-sm", {
                            "is-invalid": this.state.errors.error
                          })}
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name goes here! Ex. John Doe"
                          required
                          autoFocus
                        />
                      </td>
                    </tr>
                    {this.inputGenerator()}
                    <tr>
                      <td className="align-bottom">
                        <label
                          htmlFor="pass"
                          style={{ backgroundColor: "white" }}
                        >
                          <h4 className="font-weight-light">
                            Password:
                            <span className="required">*</span>:
                          </h4>
                        </label>
                      </td>
                      <td>
                        <input
                          className={classnames("form-control input-sm", {
                            "is-invalid": this.state.errors.error
                          })}
                          type="password"
                          id="pass"
                          name="pass"
                          placeholder="Password goes here! Ex. pass1234"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <input
                          type="button"
                          className="btn btn-primary"
                          value="Submit"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <span style={{ backgroundColor: "rgb(0,0,0,0.5)" }}>
              <h6 className="font-weight-light">
                Already have an account?&nbsp;
                <Link to={this.regRouter}>Please login.</Link>
              </h6>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  mode: PropTypes.string.isRequired
};
export default Register;

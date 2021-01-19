import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "" };
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
    if (this.state.mode === "Dealer") return "/dealerSignIn";
    else if (this.state.mode === "Manufacturer") return "/manufacturerSignIn";
    else return "/";
  };
  inputGenerator = () => {
    if (this.state.mode === "Dealer")
      return (
        <tr>
          <td className="align-bottom">
            <label htmlFor="contact">
              <h4 className="font-weight-light">{this.state.mode} Contact:</h4>
            </label>
          </td>
          <td>
            <input
              className="form-control input-sm"
              type="number"
              id="contact"
              name="contact"
              placeholder="Contact goes here! Ex. 9876543210"
              required
            />
          </td>
        </tr>
      );
    else if (this.state.mode === "Manufacturer")
      return (
        <tr>
          <td className="align-bottom">
            <label htmlFor="email">
              <h4 className="font-weight-light">{this.state.mode} Email:</h4>
            </label>
          </td>
          <td>
            <input
              className="form-control input-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Email goes here! Ex. manufacturer@company.com"
              required
            />
          </td>
        </tr>
      );
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Welcome {this.state.mode}!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">Please register to continue!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 table-responsive">
            <form>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="align-bottom">
                      <label htmlFor="name">
                        <h4 className="font-weight-light">
                          {this.state.mode} Name:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
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
                      <label htmlFor="pass">
                        <h4 className="font-weight-light">Password:</h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
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
          <h6 className="font-weight-light">
            Already have an account?&nbsp;
            <Link to={this.regRouter}>Please login.</Link>
          </h6>
        </div>
      </div>
    );
  }
}

export default Register;

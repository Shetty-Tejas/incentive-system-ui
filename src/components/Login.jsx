import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
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
    if (this.state.mode === "Dealer") return "/dealerReg";
    else if (this.state.mode === "Manufacturer") return "/manufacturerReg";
    else return "/";
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Welcome {this.state.mode}!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">Please log-in to continue!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="table-responsive">
              <form>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="align-bottom">
                        <label htmlFor="id">
                          <h4 className="font-weight-light">
                            {this.state.mode} ID:
                          </h4>
                        </label>
                      </td>
                      <td>
                        <input
                          className="form-control input-sm"
                          type="number"
                          id="id"
                          name="id"
                          placeholder="ID goes here! Ex. 1"
                          required
                          autoFocus
                        />
                      </td>
                    </tr>
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
                          placeholder="Password goes here! Ex. pass"
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
        </div>
        <div className="row justify-content-center">
          <h6 className="font-weight-light">
            Don't have an account?&nbsp;
            <Link to={this.regRouter}>Please register.</Link>
          </h6>
        </div>
      </div>
    );
  }
}

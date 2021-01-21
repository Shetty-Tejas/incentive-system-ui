import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logIn } from "../../actions/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "" };
    this.history = this.props.history;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mode !== state.mode) {
      return {
        mode: props.mode
      };
    }
    return null;
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = () => {
    const id = parseInt(this.state.id);
    const pass = this.state.pass;
    const obj = { id: id, pass: pass };
    console.log(this.props.history);
    this.props.logIn(obj, this.state.mode, this.history); //
  };

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
          <div className="col-7 table-responsive">
            <form method="post">
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <input
                        type="button"
                        className="btn btn-primary"
                        value="Submit"
                        onClick={this.handleSubmit}
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
            Don&apos;t have an account?&nbsp;
            <Link to={this.regRouter}>Please register.</Link>
          </h6>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired
};
export default connect(null, { logIn })(Login);

/* eslint-disable no-alert */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-invalid-this */
/* eslint-disable max-lines-per-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logIn } from "../../actions/actions";
import classnames from "classnames";
import cars from "../cars.jpg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: "",
      mode: "",
      id: 0,
      errors: { error: "" }
    };
    this.history = this.props.history;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mode !== state.mode) {
      return {
        mode: props.mode
      };
    }
    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = () => {
    const pattern = /^[a-zA-Z0-9|_|$|\\.|@]+$/;
    const { id, pass } = this.state;
    const validation = 0;
    if (parseInt(id, 10) > validation && pattern.test(pass)) {
      const obj = { pass: pass.trim(), id: parseInt(id, 10) };
      this.props.logIn(obj, this.state.mode, this.history);
    } else {
      alert("Please fill in the valid values!");
    }
  };

  regRouter = () => {
    if (this.state.mode === "Dealer") {
      return "/dealerReg";
    } else if (this.state.mode === "Manufacturer") {
      return "/manufacturerReg";
    }
    return "/";
  };

  render() {
    const style = {
      padding: "10px",
      overflow: "hidden",
      height: "100vh",
      fontFamily: "Serif",
      color: "black",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${cars})`,
      backgroundColor: "white",
      backgroundAttachment: "fixed"
    };
    return (
      <div className="container-fluid" style={style}>
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
                          {this.state.mode} ID
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
                        <h4 className="font-weight-light">
                          Password<span className="required">*</span>:
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
          <h4 className="font-weight-light">{this.state.errors.error}</h4>
        </div>
        <div className="row justify-content-center">
          <span style={{ backgroundColor: "rgb(0,0,0,0.5)" }}>
            <h6 className="font-weight-light">
              Don&apos;t have an account?&nbsp;
              <Link to={this.regRouter}>Please register. </Link>
            </h6>
          </span>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  mode: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { logIn })(Login);

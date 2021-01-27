import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import cars from "../cars.jpg";
import { register } from "../../actions/actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: "",
      number: "",
      mode: "",
      contact: ""
    };
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

  regRouter = () => {
    if (this.state.mode === "Dealer") {
      return "/dealerSignIn";
    } else if (this.state.mode === "Manufacturer") {
      return "/manufacturerSignIn";
    }
    return "/";
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  inputGenerator = () => {
    if (this.state.mode === "Dealer") {
      return (
        <tr>
          <td className="align-bottom">
            <label htmlFor="contact">
              <h4 className="font-weight-light">
                {this.state.mode} Contact:
                <span className="required">*</span>:
              </h4>
            </label>
          </td>
          <td>
            <input
              className={classnames("form-control input-sm", {
                "is-invalid": this.props.errors.error
              })}
              type="number"
              id="contact"
              name="contact"
              placeholder="Contact goes here! Ex. 9876543210"
              onChange={this.handleChange}
            />
          </td>
        </tr>
      );
    } else if (this.state.mode === "Manufacturer") {
      return (
        <tr>
          <td className="align-bottom">
            <label htmlFor="contact">
              <h4 className="font-weight-light">{this.state.mode} Email:</h4>
            </label>
          </td>
          <td>
            <input
              className={classnames("form-control input-sm", {
                "is-invalid": this.props.errors.error
              })}
              type="email"
              id="contact"
              name="contact"
              placeholder="Email goes here! Ex. manufacturer@company.com"
              onChange={this.handleChange}
            />
          </td>
        </tr>
      );
    }
    return null;
  };

  handleSubmit = () => {
    const { mode, name, pass } = this.state;
    const contact =
      mode === "Dealer" ? parseInt(this.state.contact, 10) : this.state.contact;
    const namePattern = /^[a-zA-Z ]{3,34}$/;
    const passPattern = /^[a-zA-Z0-9|_|$|\\.|@]+$/;
    const contactPattern =
      mode === "Dealer"
        ? /^[987][0-9]{9}$/
        : /^([a-z]+([\\._]\1{2})?)+@[a-z]+[\\.][a-z]{2,5}$/;
    if (!namePattern.test(name)) {
      alert("Please insert a valid name. Only english characters.");
      return null;
    }
    if (!passPattern.test(pass)) {
      alert("Please enter a valid password.");
      return null;
    }
    if (!contactPattern.test(contact)) {
      alert("Please insert proper contact details.");
      return null;
    }
    return this.props.register({ pass, name, contact }, mode, this.history);
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
                        <label htmlFor="name">
                          <h4 className="font-weight-light">
                            {this.state.mode} Name:
                            <span className="required">*</span>:
                          </h4>
                        </label>
                      </td>
                      <td>
                        <input
                          className={classnames("form-control input-sm", {
                            "is-invalid": this.props.errors.error
                          })}
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name goes here! Ex. John Doe"
                          onChange={this.handleChange}
                          autoFocus
                        />
                      </td>
                    </tr>
                    {this.inputGenerator()}
                    <tr>
                      <td className="align-bottom">
                        <label htmlFor="pass">
                          <h4 className="font-weight-light">
                            Password:
                            <span className="required">*</span>:
                          </h4>
                        </label>
                      </td>
                      <td>
                        <input
                          className={classnames("form-control input-sm", {
                            "is-invalid": this.props.errors.error
                          })}
                          type="password"
                          id="pass"
                          name="pass"
                          placeholder="Password goes here! Ex. pass1234"
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
            <span
              style={{
                backgroundColor: "rgb(0,0,0,0.5)"
              }}
            >
              <h6 className="font-weight-light">
                Already have an account?&nbsp;
                <Link to={this.regRouter}>Please login.</Link>
              </h6>
            </span>
          </div>
          <div className="row justify-content-center">
            <span style={{ backgroundColor: "rgb(0,0,0,0.5)" }}>
              <h6 className="font-weight-light">{this.props.errors.error}</h6>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  states: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { register })(Register);

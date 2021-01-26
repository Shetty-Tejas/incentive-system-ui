/* eslint-disable function-paren-newline */
/* eslint-disable max-statements */
/* eslint-disable no-alert */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-invalid-this */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-lines-per-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertCar } from "../../actions/actions";
import cars from "../cars.jpg";

class InsertCar extends Component {
  constructor(props) {
    super(props);
    this.state = { carMsp: 0, carModel: "", carBasePrice: 0 };
    this.history = this.props.history;
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = () => {
    const zero = 0;
    const id = this.props.states.loggedId;
    const modelPattern = /^[a-zA-Z0-9]+$/;
    if (id > zero) {
      const carMsp = parseInt(this.state.carMsp, 10);
      const carBasePrice = parseInt(this.state.carBasePrice, 10);
      const { carModel } = this.state;
      if (carMsp <= carBasePrice || carMsp <= zero || carBasePrice <= zero) {
        alert("Price validation failed! Please try again!");
      }
      if (!modelPattern.test(carModel)) {
        alert(
          "The model name failed the validation! Please use Alpha-Numeric characers only!"
        );
      }
      if (carMsp > carBasePrice && modelPattern.test(carModel)) {
        return this.props.insertCar(
          { id, carMsp, carModel, carBasePrice },
          this.history
        );
      }
    } else {
      alert("You are not logged in! Please log in to continue!");
      this.history.push("/");
    }
    return null;
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
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Insert Car!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">You can insert new cars here!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <form>
              <table
                className="table table-borderless"
                style={{ backgroundColor: "rgb(0,0,0,0.5)" }}
              >
                <tbody>
                  <tr>
                    <td className="align-bottom">
                      <label htmlFor="carModel">
                        <h4
                          className="font-weight-light"
                          style={{ color: "white" }}
                        >
                          Enter Car Model<span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
                        type="text"
                        id="carModel"
                        name="carModel"
                        placeholder="Eg: Maruti Suzuki Desire"
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="align-bottom">
                      <label htmlFor="carBasePrice">
                        <h4
                          className="font-weight-light"
                          style={{ color: "white" }}
                        >
                          Enter BasePrice<span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
                        type="number"
                        id="carBasePrice"
                        name="carBasePrice"
                        placeholder="Eg: 500000 "
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="align-bottom">
                      <label htmlFor="carMsp">
                        <h4
                          className="font-weight-light"
                          style={{ color: "white" }}
                        >
                          Enter Max Selling Price
                          <span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
                        type="number"
                        id="carMsp"
                        name="carMsp"
                        placeholder="Eg: 700000 "
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
          <h5 className="font-weight-light">{this.props.errors.error}</h5>
        </div>
      </div>
    );
  }
}

InsertCar.propTypes = {
  states: PropTypes.object.isRequired,
  insertCar: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { insertCar })(InsertCar);

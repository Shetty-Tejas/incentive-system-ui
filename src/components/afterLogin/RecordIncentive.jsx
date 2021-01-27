/* eslint-disable no-alert */
/* eslint-disable no-extra-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable max-statements */
/* eslint-disable no-undefined */
/* eslint-disable no-invalid-this */
/* eslint-disable max-lines-per-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchApproved, recordIncentive } from "../../actions/actions";
import cars from "../cars.jpg";

class RecordIncentive extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "", name: "", model: "", date: this.todaysDate() };
    this.history = this.props.history;
    props.fetchApproved(props.states.loggedId);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  todaysDate = () => {
    const monthCorrector = 1;
    const addZeroIf = 10;
    const date = new Date();
    const year = date.getFullYear();
    const tempMonth = date.getMonth() + monthCorrector;
    const tempDay = date.getDate();
    const month = tempMonth < addZeroIf ? `0${tempMonth}` : tempMonth;
    const day = tempDay < addZeroIf ? `0${tempDay}` : tempDay;
    return `${year}-${month}-${day}`;
  };

  handleSubmit = () => {
    const id = this.props.states.loggedId;
    const numberPattern = /^[987][0-9]{9}$/;
    const namePattern = /^[a-zA-Z ]{3,34}$/;
    const modelPattern = /^[a-zA-Z0-9]+$/;
    const { name, model, date } = this.state;
    const number = parseInt(this.state.number, 10);
    if (id === undefined) {
      alert("Please log in to continue!");
      this.history.push("/");
    } else {
      if (!namePattern.test(name)) {
        alert("Please insert a valid name!");
      }
      if (!numberPattern.test(number)) {
        alert("Please enter a valid mobile number!");
      }
      if (!modelPattern.test(model)) {
        alert("Please choose a valid model!");
      }
      if (
        namePattern.test(name) &&
        numberPattern.test(number) &&
        modelPattern.test(model)
      ) {
        const object = { number, name, model, id, date };
        return this.props.recordIncentive(object, this.history);
      }
    }
    return null;
  };

  selectRenderer = () => {
    if (
      this.props.states.appDeals === undefined ||
      this.props.states.appDeals === null ||
      this.props.states.appDeals === []
    ) {
      return <option value="">No Cars Available</option>;
    }
    return this.props.states.appDeals.map((element) => (
      <option key={element.dealModel} value={element.dealModel}>
        {element.dealManufacturer} {element.dealModel}
      </option>
    ));
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
          <h1 className="font-weight-light">Record Incentive!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">You can record your sales here!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <table
              className="table table-borderless"
              style={{ backgroundColor: "rgb(0,0,0,0.5)" }}
            >
              <tbody>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="name">
                      <h4
                        className="font-weight-light"
                        style={{ color: "white" }}
                      >
                        Customer Name<span className="required">*</span>:
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
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="number">
                      <h4
                        className="font-weight-light"
                        style={{ color: "white" }}
                      >
                        Customer Contact no.<span className="required">*</span>:
                      </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      className="form-control input-sm"
                      type="number"
                      id="number"
                      name="number"
                      placeholder="Contact no. goes here! Ex. 9876543210"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="date">
                      <h4
                        className="font-weight-light"
                        style={{ color: "white" }}
                      >
                        Date of purchase<span className="required">*</span>:
                      </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="date"
                      id="date"
                      name="date"
                      value={this.state.date}
                      max={this.todaysDate()}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="model">
                      <h4
                        className="font-weight-light"
                        style={{ color: "white" }}
                      >
                        Car Model<span className="required">*</span>:
                      </h4>
                    </label>
                  </td>
                  <td>
                    <select
                      style={{ width: "100%" }}
                      id="model"
                      name="model"
                      className="form-control"
                      onChange={this.handleChange}
                    >
                      <option disabled selected>
                        Choose...
                      </option>
                      {this.selectRenderer()}
                    </select>
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
          </div>
        </div>
      </div>
    );
  }
}

RecordIncentive.propTypes = {
  states: PropTypes.object.isRequired,
  recordIncentive: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetchApproved: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { recordIncentive, fetchApproved })(
  RecordIncentive
);

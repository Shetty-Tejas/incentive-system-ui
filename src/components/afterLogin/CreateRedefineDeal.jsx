import React, { Component } from "react";
import InputRange from "react-input-range";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchCars,
  fetchDeals,
  createDeal,
  redefineDeal
} from "../../actions/actions";
import carPic from "../cars.jpg";

class CreateRedefineDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msp: 0,
      model: "",
      mode: "",
      incRange: { min: 2, max: 10 },
      incPriceMin: 0,
      incPriceMax: 0,
      fetched: false,
      basePrice: 0
    };
    this.history = this.props.history;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mode !== state.mode) {
      return {
        mode: props.mode
      };
    }

    if (props.states.loggedId !== undefined && !state.fetched) {
      props.fetchCars(props.states.loggedId, props.states.loggedInMode);
      props.fetchDeals(props.states.loggedId, props.states.loggedInMode);
      return { fetched: true };
    }

    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
  }

  chooser = (exp1, exp2) => {
    if (this.state.mode === "create") {
      return exp1;
    } else if (this.state.mode === "redefine") {
      return exp2;
    }
    this.history("/dealer/");
    return null;
  };

  incCalcCallBack = () => {
    const { min, max } = this.state.incRange;
    const hundred = 100;
    const minPercent = (min / hundred) * this.state.msp;
    const maxPercent = (max / hundred) * this.state.msp;
    this.setState({
      incPriceMin: minPercent,
      incPriceMax: maxPercent
    });
  };

  incCalc = (value) =>
    this.setState({ incRange: value }, () => this.incCalcCallBack());

  selectRenderer = () => {
    if (this.state.mode === "create") {
      if (this.props.states.cars === undefined) {
        return <option value="">No Cars Available</option>;
      }
      const { cars } = this.props.states;
      return cars.map((element) => (
        <option key={element.carModel} value={element.carModel}>
          {element.carManufacturer} {element.carModel}
        </option>
      ));
    } else if (this.state.mode === "redefine") {
      if (this.props.states.deals === undefined) {
        return <option value="">No Deals Available</option>;
      }
      const { deals } = this.props.states;
      return deals.map((element) => (
        <option key={element.dealModel} value={element.dealModel}>
          {element.dealManufacturer} {element.dealModel} &gt; {element.status}
        </option>
      ));
    }
    return null;
  };

  selectChange = (event) => {
    this.setState({ model: event.target.value }, () => {
      if (this.state.model === "") return null;
      const [car] = this.props.states.cars.filter(
        (element) => element.carModel === this.state.model
      );
      this.setState({ msp: car.carMsp, basePrice: car.carBasePrice }, () =>
        this.incCalcCallBack()
      );
    });
  };

  handleSubmit = () => {
    let result = "";
    const id = this.props.states.loggedId;
    const { model } = this.state;
    const { min, max } = this.state.incRange;
    const incRange = `${min}-${max}`;
    const object = { model, incRange, id };
    const zeroValid = 0;
    const incRangePattern = /^[1]?[0-9]?[0-9]-[1]?[0-9]?[0-9]$/;
    const modelPattern = /^[a-zA-Z0-9]+$/;
    if (id <= zeroValid || id === undefined) {
      alert("You are not logged in. Please log in first");
      this.props.history.push("/");
    } else {
      if (!modelPattern.test(model)) {
        result = "Please select a valid car model.";
      }
      if (!incRangePattern.test(incRange)) {
        result = "Please select a valid incentive range.";
      }
      if (
        id > zeroValid &&
        modelPattern.test(model) &&
        incRangePattern.test(incRange)
      ) {
        if (this.state.mode === "create") {
          this.props.createDeal(object, this.history);
        } else if (this.state.mode === "redefine") {
          this.props.redefineDeal(object, this.history);
        }
      } else {
        alert(result);
      }
    }
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
      backgroundImage: `url(${carPic})`,
      backgroundColor: "white",
      backgroundAttachment: "fixed"
    };
    return (
      <div className="container-fluid" style={style}>
        <div className="row justify-content-center">
          <h1 className="font-weight-light">
            {this.chooser("Create Deal!", "Redefine Deal!")}
          </h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            {this.chooser(
              "Create a deal for a car model.",
              "Redefine a pre-existing deal."
            )}
          </h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <form>
              <table
                className="table table-borderless"
                style={{
                  color: "rgb(255,255,255,1)",
                  backgroundColor: "rgb(0,0,0,0.5)"
                }}
              >
                <tbody>
                  <tr>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          {this.chooser("Car", "Deal")} Model
                          <span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <select
                        style={{ width: "30vw" }}
                        className="form-control"
                        onChange={this.selectChange}
                      >
                        <option disabled selected>
                          Choose...
                        </option>
                        {this.selectRenderer()}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          Car Base Price<span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          Rs. {this.state.basePrice}
                        </h4>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          Car MSP<span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          Rs. {this.state.msp}
                        </h4>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          Incentive Range<span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td className="align-bottom">
                      <label>
                        <h4 className="font-weight-light">
                          Rs. {this.state.incPriceMin} - Rs.{" "}
                          {this.state.incPriceMax}
                        </h4>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-bottom col-12">
                      <label htmlFor="incRange">
                        <h4 className="font-weight-light">
                          Incentive Percent<span className="required">*</span>:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <InputRange
                        maxValue={100}
                        minValue={0}
                        id="incRange"
                        name="incRange"
                        value={this.state.incRange}
                        onChange={(value) => this.incCalc(value)}
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

CreateRedefineDeal.propTypes = {
  states: PropTypes.object.isRequired,
  redefineDeal: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  fetchDeals: PropTypes.func.isRequired,
  fetchCars: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  createDeal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, {
  redefineDeal,
  fetchDeals,
  fetchCars,
  createDeal
})(CreateRedefineDeal);

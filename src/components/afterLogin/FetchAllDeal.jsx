import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDeals, deleteDeal } from "../../actions/actions";
import cars from "../cars.jpg";

class FetchAllDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    };
    props.fetchDeals(props.states.loggedId, props.states.loggedInMode);
  }

  incCalc = (msp, incRange) => {
    const index = incRange.indexOf("-");
    const start = 0;
    const one = 1;
    const percent = 100;
    const min = parseInt(incRange.substring(start, index), 10);
    const max = parseInt(incRange.substring(index + one), 10);
    return `${(msp * min) / percent} - ${(msp * max) / percent}`;
  };

  handleDelete = (id, model) => {
    const oId = id;
    const oModel = model;
    const object = { oModel, oId };
    if (oId === undefined) {
      alert("Please log in before continuing!");
      this.props.history.push("/");
    } else {
      this.props.deleteDeal(object, () => this.props.fetchDeals(oId, "dealer"));
    }
  };

  renderTable = () => {
    if (this.props.states.deals !== undefined) {
      let count = 0;
      return (
        <table className="table">
          <thead>
            <tr style={{ color: "white" }}>
              <th>Sr. No.</th>
              <th>Car Model</th>
              <th>Car Manufacturer</th>
              <th>Car Base Price</th>
              <th>Car Maximum Sell Price</th>
              <th>Incntive Range</th>
              <th>Status</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody style={{ color: "white", backgroundColor: "SaddleBrown" }}>
            {this.props.states.deals.map((element) => (
              <tr key={element.dealModel}>
                <td>{++count}</td>
                <td>{element.dealModel}</td>
                <td>{element.dealManufacturer}</td>
                <td>{element.carBasePrice}</td>
                <td>{element.carMsp}</td>
                <td>{this.incCalc(element.carMsp, element.incentiveRange)}</td>
                <td>{element.status}</td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => {
                      this.handleDelete(
                        this.props.states.loggedId,
                        element.dealModel
                      );
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          <h1 className="font-weight-light">All Deals!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            You can find all the created deals here!
          </h5>
        </div>
        <div
          className="table-responsive"
          style={{ backgroundColor: "rgb(0,0,0,0.65)" }}
        >
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

FetchAllDeal.propTypes = {
  states: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchDeals: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  deleteDeal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { fetchDeals, deleteDeal })(
  FetchAllDeal
);

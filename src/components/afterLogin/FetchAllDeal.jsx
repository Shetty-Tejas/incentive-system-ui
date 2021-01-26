/* eslint-disable no-undefined */
/* eslint-disable no-invalid-this */
/* eslint-disable no-alert */
/* eslint-disable function-paren-newline */
/* eslint-disable no-extra-parens */
/* eslint-disable no-plusplus */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDeals, deleteDeal } from "../../actions/actions";

class FetchAllDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      deals: []
    };
    props.fetchDeals(props.states.loggedId, this.state.mode);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.deals !== state.deals) {
      return { deals: props.states.deals };
    }
    if (props.states.loggedId !== state.loggedId) {
      return {
        loggedId: props.states.loggedId
      };
    }

    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
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
    if (this.state.loggedId === undefined) {
      alert("Please log in before continuing!");
      this.props.history.push("/");
    } else {
      this.props.deleteDeal(object, () => this.props.fetchDeals(oId, "dealer"));
    }
  };

  renderTable = () => {
    if (this.state.mode === "dealer") {
      let count = 0;
      return (
        <table className="table">
          <thead>
            <tr>
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
          <tbody>
            {this.state.deals.map((element) => (
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
                      this.handleDelete(this.state.loggedId, element.dealModel);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (this.state.mode === "manufacturer") {
      return null;
    }
    return null;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">All Deals!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            You can find all the created deals here!
          </h5>
        </div>
        <div className="table-responsive">{this.renderTable()}</div>
      </div>
    );
  }
}

FetchAllDeal.propTypes = {
  states: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
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

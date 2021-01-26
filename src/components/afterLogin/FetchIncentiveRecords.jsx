/* eslint-disable no-undefined */
/* eslint-disable no-extra-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-invalid-this */
/* eslint-disable function-paren-newline */
/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIncentives } from "../../actions/actions";

class FetchIncentiveRecords extends Component {
  constructor(props) {
    super(props);
    this.state = { incentives: [] };
    props.fetchIncentives(this.props.states.loggedId);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.incentives !== state.incentives) {
      return { incentives: props.states.incentives };
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

  purchaseDate = (obj) => {
    const start = 0;
    const index = obj.indexOf("T");
    return obj.substring(start, index);
  };

  renderTable = () => {
    console.log(this.state.incentives);
    if (this.state.incentives !== undefined && this.state.incentives !== null) {
      return this.state.incentives.map((element) => (
        <tr key={element.incentiveId}>
          <td>{element.incentiveId}</td>
          <td>{element.customerName}</td>
          <td>{element.customerContact}</td>
          <td>{element.carModel}</td>
          <td>{this.purchaseDate(element.purchaseDate)}</td>
          <td>{element.totalCost}</td>
          <td>{element.incentivePercent}</td>
          <td>{element.incentiveGot}</td>
        </tr>
      ));
    }
    return null;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">All Incentive Records!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            You can find all your incentive records here!
          </h5>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Incentive Id</th>
                <th>Customer Name</th>
                <th>Customer Contact</th>
                <th>Car Model</th>
                <th>Purchase Date</th>
                <th>Total Cost</th>
                <th>Incentive Percent</th>
                <th>Incentive Received</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

FetchIncentiveRecords.propTypes = {
  states: PropTypes.object.isRequired,
  fetchIncentives: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});
export default connect(mapStateToProps, { fetchIncentives })(
  FetchIncentiveRecords
);

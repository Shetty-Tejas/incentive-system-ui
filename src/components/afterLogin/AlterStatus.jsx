/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-extra-parens */
/* eslint-disable no-plusplus */
/* eslint-disable no-invalid-this */
/* eslint-disable no-undefined */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDeals, alterDeal } from "../../actions/actions";

class AlterStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "" };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.loggedId !== undefined && !state.fetched) {
      props.fetchDeals(props.states.loggedId, props.states.loggedInMode);
      return { fetched: true };
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

  handleAlteration = (carModel, status) => {
    const id = this.state.loggedId;
    const model = carModel;
    const dealStatus = status;
    if (dealStatus === "approve" || dealStatus === "reject") {
      const bool = dealStatus === "approve";
      return this.props.alterDeal({ model, id, bool }, () =>
        this.props.fetchDeals(
          this.props.states.loggedId,
          this.props.states.loggedInMode
        )
      );
    }
    return null;
  };

  tableRender = () => {
    let count = 0;
    if (
      this.props.states.deals === undefined ||
      this.props.states.deals === null ||
      this.props.states.deals === []
    ) {
      return null;
    }
    return this.props.states.deals.map((element) => (
      <tr key={element.dealModel}>
        <td>{++count}</td>
        <td>{element.dealManufacturer}</td>
        <td>{element.dealModel}</td>
        <td>{element.carBasePrice}</td>
        <td>{element.carMsp}</td>
        <td>{this.incCalc(element.carMsp, element.incentiveRange)}</td>
        <td>{element.status}</td>
        <td>
          <input
            type="button"
            className="btn btn-success"
            value="Approve"
            onClick={() => this.handleAlteration(element.dealModel, "approve")}
          />
        </td>
        <td>
          <input
            type="button"
            className="btn btn-danger"
            value="Reject"
            onClick={() => this.handleAlteration(element.dealModel, "reject")}
          />
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Update Deal Status!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            Approve or reject the deals here!
          </h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Car Base Price</th>
                  <th>Car MSP</th>
                  <th>Incentive Range</th>
                  <th>Status</th>
                  <th>Approve?</th>
                  <th>Reject?</th>
                </tr>
              </thead>
              <tbody>{this.tableRender()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

AlterStatus.propTypes = {
  states: PropTypes.object.isRequired,
  fetchDeals: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  alterDeal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { fetchDeals, alterDeal })(AlterStatus);

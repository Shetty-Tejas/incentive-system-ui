/* eslint-disable no-extra-parens */
/* eslint-disable no-undefined */
/* eslint-disable no-invalid-this */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCustomer } from "../../actions/actions";

class FetchCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: [], errors: {}, customers: [] };
    props.fetchCustomer(props.states.loggedId);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.customers !== state.customers) {
      return {
        customers: props.states.customers
      };
    }
    return null;
  }

  date = (obj) => {
    const zero = 0;
    const index = obj.indexOf("T");
    return obj.substring(zero, index);
  };

  renderTable = () => {
    if (this.state.customers === undefined || this.state.customers === []) {
      return null;
    }
    return this.state.customers.map((element) => (
      <tr key={element.customerId}>
        <td>{element.customerId}</td>
        <td>{element.customerName}</td>
        <td>{element.customerContact}</td>
        <td>{this.date(element.customerPurchaseDate)}</td>
        <td>{element.purchasedCarManf}</td>
        <td>{element.purchasedCar}</td>
        <td>{element.totalCost}</td>
        <td>{element.dealerId}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">All Customer Records!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            You can find all the customer records here!
          </h5>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Customer Contact</th>
                <th>Purchase Date</th>
                <th>Car Manufacturer</th>
                <th>Car Model</th>
                <th>Total Cost</th>
                <th>Sold By</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

FetchCustomer.propTypes = {
  states: PropTypes.object.isRequired,
  fetchCustomer: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { fetchCustomer })(FetchCustomer);

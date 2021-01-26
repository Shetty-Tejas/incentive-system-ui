import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CustomerHeader from "./CustomerHeader";
import Login from "./Login";
import Register from "./Register";
import PropTypes from "prop-types";
import Welcome from "./Welcome";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = { manufacturer: "Manufacturer", dealer: "Dealer" };
    this.history = this.props.history;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <CustomerHeader />
          <Welcome />
        </Route>
        <Route exact path="/dealerSignIn">
          <CustomerHeader />
          <Login mode={this.state.dealer} history={this.history} />
        </Route>
        <Route exact path="/manufacturerSignIn">
          <CustomerHeader />
          <Login mode={this.state.manufacturer} history={this.history} />
        </Route>
        <Route exact path="/dealerReg">
          <CustomerHeader />
          <Register mode={this.state.dealer} history={this.history} />
        </Route>
        <Route exact path="/manufacturerReg">
          <CustomerHeader />
          <Register mode={this.state.manufacturer} history={this.history} />
        </Route>
      </Switch>
    );
  }
}
Customer.propTypes = {
  history: PropTypes.object.isRequired
};
export default Customer;

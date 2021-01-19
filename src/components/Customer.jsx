import React, { Component } from "react";
import CustomerHeader from "./CustomerHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = { dealer: "Dealer", manufacturer: "Manufacturer" };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <CustomerHeader />
          </Route>
          <Route exact path="/dealerSignIn">
            <CustomerHeader />
            <Login mode={this.state.dealer} />
          </Route>
          <Route exact path="/manufacturerSignIn">
            <CustomerHeader />
            <Login mode={this.state.manufacturer} />
          </Route>
          <Route exact path="/dealerReg">
            <CustomerHeader />
            <Login mode={this.state.dealer} />
          </Route>
          <Route exact path="/manufacturerReg">
            <CustomerHeader />
            <Login mode={this.state.dealer} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Customer;

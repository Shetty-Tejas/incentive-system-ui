import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerHeader from "./CustomerHeader";
import Login from "./Login";
import Register from "./Register";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = { dealer: "Dealer", manufacturer: "Manufacturer" };
  }
  render() {
    return (
      <Router forceRefresh>
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
            <Register mode={this.state.dealer} />
          </Route>
          <Route exact path="/manufacturerReg">
            <CustomerHeader />
            <Register mode={this.state.manufacturer} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Customer;

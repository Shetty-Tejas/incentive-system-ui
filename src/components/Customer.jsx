import React, { Component } from "react";
import CustomerHeader from "./CustomerHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DealerLogin from "./Login";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dealerSignIn">
            <CustomerHeader dealerActive="active" />
            <DealerLogin />
          </Route>
          <Route exact path="/manufacturerSignIn">
            <CustomerHeader manfActive="active" />
            Bye
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Customer;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateRedefineDeal from "./CreateRedefineDeal";
import DealerHeader from "./DealerHeader";

class Dealer extends Component {
  constructor(props) {
    super(props);
    this.state = { redefine: "redefine", create: "create" };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dealer/createDeals">
            <DealerHeader />
            <CreateRedefineDeal mode={this.state.create} />
          </Route>
          <Route exact path="/dealer/redefineDeals">
            <DealerHeader />
            <CreateRedefineDeal mode={this.state.redefine} />
          </Route>
          <Route exact path="/dealer/fetchAllDeals">
            World
          </Route>
          <Route exact path="/dealer/recordIncentive">
            Hello
          </Route>
          <Route exact path="/dealer/fetchCustomerById">
            World
          </Route>
          <Route exact path="/dealer/fetchCustomerByContact">
            Hello
          </Route>
          <Route exact path="/dealer/fetchIncentiveRecords">
            World
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Dealer;

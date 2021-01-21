import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateRedefineDeal from "./CreateRedefineDeal";
import DealerHeader from "./DealerHeader";
import FetchAllDeal from "./FetchAllDeal";
import FetchCustomer from "./FetchCustomer";
import RecordIncentive from "./RecordIncentive";

class Dealer extends Component {
  constructor(props) {
    super(props);
    this.state = { redefine: "redefine", create: "create" };
  }
  render() {
    return (
      <Router forceRefresh>
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
            <DealerHeader />
            <FetchAllDeal />
          </Route>
          <Route exact path="/dealer/recordIncentive">
            <DealerHeader />
            <RecordIncentive />
          </Route>
          <Route exact path="/dealer/fetchCustomer">
            <DealerHeader />
            <FetchCustomer />
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

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import CreateRedefineDeal from "./CreateRedefineDeal";
import DealerHeader from "./DealerHeader";
import FetchAllDeal from "./FetchAllDeal";
import FetchCustomer from "./FetchCustomer";
import RecordIncentive from "./RecordIncentive";
import FetchIncentiveRecords from "./FetchIncentiveRecords";

class Dealer extends Component {
  constructor(props) {
    super(props);
    this.state = { redefine: "redefine", dealer: "dealer", create: "create" };
    this.history = this.props.history;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/dealer/createDeals">
          <DealerHeader />
          <CreateRedefineDeal mode={this.state.create} history={this.history} />
        </Route>
        <Route exact path="/dealer/redefineDeals">
          <DealerHeader />
          <CreateRedefineDeal
            mode={this.state.redefine}
            history={this.history}
          />
        </Route>
        <Route exact path="/dealer/fetchAllDeals">
          <DealerHeader />
          <FetchAllDeal mode={this.state.dealer} history={this.history} />
        </Route>
        <Route exact path="/dealer/recordIncentive">
          <DealerHeader />
          <RecordIncentive history={this.history} />
        </Route>
        <Route exact path="/dealer/fetchCustomer">
          <DealerHeader />
          <FetchCustomer />
        </Route>
        <Route exact path="/dealer/fetchIncentiveRecords">
          <DealerHeader />
          <FetchIncentiveRecords />
        </Route>
      </Switch>
    );
  }
}
Dealer.propTypes = {
  history: PropTypes.object.isRequired
};
export default Dealer;

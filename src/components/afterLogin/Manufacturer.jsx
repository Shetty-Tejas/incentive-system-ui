import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertCar from "./InsertCar";
import AlterStatus from "./AlterStatus";
import FetchAllCars from "./FetchAllCars";

class Manufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = { insert: "insert" };
  }
  render() {
    return (
      <Router forceRefresh>
        <Switch>
          <Route exact path="/manufacturer/insertCar">
            <InsertCar mode={this.state.insert} />
          </Route>
          <Route exact path="/manufacturer/alterStatus">
            <AlterStatus />
          </Route>
          <Route exact path="/manufacturer/fetchAllDeals"></Route>
          <Route exact path="/manufacturer/fetchAllCars">
            <FetchAllCars />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Manufacturer;

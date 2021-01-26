import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import InsertCar from "./InsertCar";
import AlterStatus from "./AlterStatus";
import FetchAllCars from "./FetchAllCars";
import ProfilePage from "./ProfilePage";
import ManufacturerHeader from "./ManufacturerHeader";

class Manufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = { manufacturer: "manufacturer", insert: "insert" };
    this.history = this.props.history;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/manufacturer/">
          <ManufacturerHeader />
          <ProfilePage history={this.history} />
        </Route>
        <Route exact path="/manufacturer/insertCar">
          <ManufacturerHeader />
          <InsertCar history={this.history} />
        </Route>
        <Route exact path="/manufacturer/alterStatus">
          <ManufacturerHeader />
          <AlterStatus />
        </Route>
        <Route exact path="/manufacturer/fetchAllCars">
          <ManufacturerHeader />
          <FetchAllCars />
        </Route>
      </Switch>
    );
  }
}

Manufacturer.propTypes = {
  history: PropTypes.object.isRequired
};
export default Manufacturer;

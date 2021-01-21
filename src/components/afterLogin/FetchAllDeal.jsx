import React, { Component } from "react";

class FetchAllDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTable = () => {
    return true;
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">All Deals!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            You can find all your created deals here!
          </h5>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Car Model</th>
                <th>Car Manufacturer</th>
                <th>Car Base Price</th>
                <th>Car Manufacturer</th>
                <th>Incntive Range</th>
                <th>Status</th>
                <th>Delete?</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FetchAllDeal;

import React, { Component } from "react";

class AlterStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "" };
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }
  tableRender = () => {
    return true;
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Update Deal Status!</h1>
          <br />
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            Approve or reject the deals here!
          </h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Car Base Price</th>
                  <th>Car MSP</th>
                  <th>Incentive Range</th>
                  <th>Status</th>
                  <th>Approve?</th>
                  <th>Reject?</th>
                </tr>
              </thead>
              <tbody>{this.tableRender()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AlterStatus;

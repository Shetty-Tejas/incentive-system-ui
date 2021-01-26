/* eslint-disable no-invalid-this */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTable = () => {
    if (this.state.mode === "dealer") {
      return null;
    } else if (this.state.mode === "manufacturer") {
      return null;
    }
    this.history.push("/");
    return <tr>Please log in to continue!</tr>;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Profile Page!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">Welcome to your profile!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <table className="table">
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

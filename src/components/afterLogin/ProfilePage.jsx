/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-invalid-this */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProfile } from "../../actions/actions";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.history = this.props.history;
    props.fetchProfile(props.states.loggedId, props.states.loggedInMode);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.loggedId !== state.loggedId) {
      return { loggedId: props.states.loggedId };
    }
    if (props.states.loggedIdMode !== state.mode) {
      return { mode: props.states.loggedIdMode };
    }
    return null;
  }

  renderTable = () => {
    if (this.props.states.loggedInMode === "dealer") {
      const { dealerId, dealerName, dealerContact, dealerIncentive } =
        this.props.states.userObj === undefined
          ? ""
          : this.props.states.userObj;
      return (
        <tbody>
          <tr>
            <td>
              <h4 className="font-weight-light">Dealer ID: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{dealerId}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="font-weight-light">Dealer Name: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{dealerName}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="font-weight-light">Dealer Contact: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{dealerContact}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="font-weight-light">Incentive Got: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{dealerIncentive}</h4>
            </td>
          </tr>
        </tbody>
      );
    } else if (this.props.states.loggedInMode === "manufacturer") {
      const { manufacturerId, manufacturerName, manufacturerEmail } =
        this.props.states.userObj === undefined
          ? ""
          : this.props.states.userObj;
      return (
        <tbody>
          <tr>
            <td>
              <h4 className="font-weight-light">Manufacturer ID: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{manufacturerId}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="font-weight-light">Manufacturer Name: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{manufacturerName}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="font-weight-light">Manufacturer E-Mail: </h4>
            </td>
            <td>
              <h4 className="font-weight-light">{manufacturerEmail}</h4>
            </td>
          </tr>
        </tbody>
      );
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
            <table className="table table-borderless">
              {this.renderTable()}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  states: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});
export default connect(mapStateToProps, { fetchProfile })(ProfilePage);

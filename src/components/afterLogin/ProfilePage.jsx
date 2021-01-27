/* eslint-disable no-undefined */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-invalid-this */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProfile } from "../../actions/actions";
import cars from "../cars.jpg";

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
              <h4 className="font-weight-light">Rs. {dealerIncentive}</h4>
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
    const style = {
      padding: "10px",
      overflow: "hidden",
      height: "100vh",
      fontFamily: "Serif",
      color: "black",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${cars})`,
      backgroundColor: "white",
      backgroundAttachment: "fixed"
    };
    return (
      <div className="container-fluid" style={style}>
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Profile Page!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">Welcome to your profile!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <table
              className="table"
              style={{
                color: "Teal",
                borderRadius: "8px",
                backgroundColor: "white"
              }}
            >
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

/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { logOut } from "../../actions/actions";
import PropType from "prop-types";
import { connect } from "react-redux";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    props.logOut(this.history);
  }

  render() {
    return <React.Fragment />;
  }
}

LogOut.propTypes = {
  logOut: PropType.func.isRequired,
  history: PropType.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});
export default connect(mapStateToProps, { logOut })(LogOut);

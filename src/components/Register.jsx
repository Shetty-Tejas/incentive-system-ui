import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "" };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mode !== state.mode) {
      return {
        mode: props.mode
      };
    }
    return null;
  }

  render() {
    return <div></div>;
  }
}

export default Register;

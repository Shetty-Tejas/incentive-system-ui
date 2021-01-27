import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCars } from "../../actions/actions";
import cars from "../cars.jpg";

class FetchAllCars extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.loggedId !== undefined && !state.fetched) {
      props.fetchCars(props.states.loggedId, props.states.loggedInMode);
      return { fetched: true };
    }

    if (props.states.loggedId !== state.loggedId) {
      return {
        loggedId: props.states.loggedId
      };
    }

    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
  }

  renderTable = () => {
    if (
      this.props.states.cars === undefined ||
      this.props.states.cars === null ||
      this.props.states.cars === []
    ) {
      return null;
    }
    let count = 0;
    return this.props.states.cars.map((element) => (
      <tr key={element.carModel}>
        <td>{++count}</td>
        <td>{element.carManufacturer}</td>
        <td>{element.carModel}</td>
        <td>Rs. {element.carBasePrice}</td>
        <td>Rs. {element.carMsp}</td>
      </tr>
    ));
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
          <h1 className="font-weight-light">All Cars</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            All available cars are shown here
          </h5>
          <br />
        </div>
        <div className="table-responsive">
          <form>
            <table className="table" style={{ backgroundColor: "Tan" }}>
              <thead>
                <th>Sr no.</th>
                <th>Car Manufacturer</th>
                <th>Car Model</th>
                <th>Base Price</th>
                <th>Maximum Selling Price</th>
              </thead>
              <tbody style={{ backgroundColor: "RosyBrown" }}>
                {this.renderTable()}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

FetchAllCars.propTypes = {
  states: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  fetchCars: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  states: state.states,
  errors: state.errors
});

export default connect(mapStateToProps, { fetchCars })(FetchAllCars);

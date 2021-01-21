import React, { Component } from "react";

class RecordIncentive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value }, () =>
      console.log(this.state.date)
    );
  todaysDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const tempMonth = date.getMonth() + 1;
    const tempDay = date.getDate();
    const month = tempMonth < 10 ? "0" + tempMonth : tempMonth;
    const day = tempDay < 10 ? "0" + tempDay : tempDay;
    return year + "-" + month + "-" + day;
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Record Incentive!</h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">You can record your sales here!</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="name">
                      <h4 className="font-weight-light">Customer Name:</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      className="form-control input-sm"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name goes here! Ex. John Doe"
                      required
                      autoFocus
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="number">
                      <h4 className="font-weight-light">
                        Customer Contact no.:
                      </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      className="form-control input-sm"
                      type="number"
                      id="number"
                      name="number"
                      placeholder="Contact no. goes here! Ex. 9876543210"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="date">
                      <h4 className="font-weight-light">Date of purchase:</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="date"
                      id="date"
                      name="date"
                      max={this.todaysDate()}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-bottom">
                    <label htmlFor="model">
                      <h4 className="font-weight-light">Car Model:</h4>
                    </label>
                  </td>
                  <td>
                    <select
                      data-width="100%"
                      className="selectpicker"
                      data-live-search="true"
                      data-size="3"
                    >
                      <option>Hello</option>
                      <option>Hello</option>
                      <option>Hello</option>
                      <option>Hello</option>
                      <option>Hello</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Submit"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RecordIncentive;

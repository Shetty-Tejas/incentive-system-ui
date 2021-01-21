import React, { Component } from "react";

class FetchAllCars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">All Available Cars</h1>
          <br />
        </div>
        <div className="row justify-content-center">
          <div className="col-6 table-responsive">
            <form>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="align-bottom">
                      <label htmlFor="mId">
                        <h4 className="font-weight-light">
                          {this.state.mode} Manufacturer ID:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
                        type="number"
                        id="mId"
                        name="mId"
                        placeholder="Enter Manufacturer ID:"
                        required
                        autoFocus
                      />
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
            </form>
          </div>
        </div>
        {/* <div className="row justify-content-center">
            <h6 className="font-weight-light">
                Don't have an account?&nbsp;
                <Link to={this.regRouter}>Please register.</Link>
            </h6>
            </div> */}
      </div>
    );
  }
}

export default FetchAllCars;

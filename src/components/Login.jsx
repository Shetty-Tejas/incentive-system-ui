import React, { Component } from "react";

class DealerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">Welcome Dealer!</h1>
        </div>
        <div className="row justify-content-center">
          <caption>
            <h5 className="font-weight-light">Please log-in to continue!</h5>
          </caption>
        </div>
        <div className="row justify-content-center">
          <div className="table-responsive">
            <form>
              <table className="table table-borderless">
                <tbody>
                  <tr className="d-flex">
                    <td className="align-bottom">
                      <label htmlFor="dId">
                        <h4 className="font-weight-light">Dealer ID:</h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
                        type="number"
                        id="dId"
                        name="dId"
                      />
                    </td>
                  </tr>
                  <tr className="d-flex">
                    <td className="align-bottom">
                      <label htmlFor="dPass">
                        <h4 className="font-weight-light">Password:</h4>
                      </label>
                    </td>
                    <td>
                      <input
                        className="form-control input-sm"
                        type="text"
                        id="dPass"
                        name="dPass"
                      />
                    </td>
                  </tr>
                  <tr className="d-flex">
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
      </div>
    );
  }
}

export default DealerLogin;

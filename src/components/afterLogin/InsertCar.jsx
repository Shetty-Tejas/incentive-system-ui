import React, { Component } from "react";

class InsertCar extends Component{
    constructor(props){
        super(props)
        this.state = { };
    }

    render (){
        return (
            <div className="container-fluid">
              <div className="row justify-content-center">
                <h1 className="font-weight-light">Welcome Insert Car Details {this.state.mode}!</h1><br/>
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
                              {this.state.mode} ID:
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
                        <td className="align-bottom">
                          <label htmlFor="carModel">
                            <h4 className="font-weight-light">Enter Car Model details:</h4>
                          </label>
                        </td>
                        <td>
                          <input
                            className="form-control input-sm"
                            type="text"
                            id="carModel"
                            name="carModel"
                            placeholder="Eg: Maruti Suzuki Desire"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="align-bottom">
                          <label htmlFor="carBasePrice">
                            <h4 className="font-weight-light">Enter BasePrice</h4>
                          </label>
                        </td>
                        <td>
                          <input
                            className="form-control input-sm"
                            type="number"
                            id="bsPrice"
                            name="bsPrice"
                             placeholder="Eg: Rs. 500000 "
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="align-bottom">
                          <label htmlFor="carMsp">
                            <h4 className="font-weight-light">Enter Max Selling Price</h4>
                          </label>
                        </td>
                        <td>
                          <input
                            className="form-control input-sm"
                            type="number"
                            id="mxPrice"
                            name="mxPrice"
                            placeholder="Eg: Rs 700000 "
                            required
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
        )
    }
}

export default InsertCar; 
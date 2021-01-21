import React, { Component } from "react";
import InputRange from "react-input-range";

class CreateRedefineDeal extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "", incRange: { min: 2, max: 10 } };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.mode !== state.mode) {
      return {
        mode: props.mode
      };
    }
    return null;
  }
  chooser = (exp1, exp2) => {
    if (this.state.mode === "create") return exp1;
    else if (this.state.mode === "redefine") return exp2;
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="font-weight-light">
            {this.chooser("Create Deal!", "Redefine Deal!")}
          </h1>
        </div>
        <div className="row justify-content-center">
          <h5 className="font-weight-light">
            {this.chooser(
              "Create a deal for a car model.",
              "Redefine a pre-existing deal."
            )}
          </h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 table-responsive">
            <form>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="align-bottom">
                      <label htmlFor="name">
                        <h4 className="font-weight-light">
                          {this.chooser("Car", "Deal")} Model:
                        </h4>
                      </label>
                    </td>
                    <td>
                      <select
                        data-width="30vw"
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
                    <td className="align-bottom col-12">
                      <label htmlFor="name">
                        <h4 className="font-weight-light">Incentive Range:</h4>
                      </label>
                    </td>
                    <td>
                      <InputRange
                        maxValue={100}
                        minValue={0}
                        value={this.state.incRange}
                        onChange={(value) => this.setState({ incRange: value })}
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
      </div>
    );
  }
}

export default CreateRedefineDeal;

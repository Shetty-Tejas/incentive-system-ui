import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'

class AddTrainee extends Component {
    constructor(props) {
        super(props);
        this.id = React.createRef();
        this.name = React.createRef();
        this.domain = React.createRef();
        this.location = React.createRef();


    }
    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/listOfTrainees')
            }, 2000)
        }
    }
    add() {
        let newTrainee = {
            id: this.id.current.value,
            name: this.name.current.value,
            domain: this.domain.current.value,
            location: this.location.current.value,

        }

        this.props.onAddTrainee(newTrainee)

    }

    update() {
        let trainee = {
            id: this.id.current.value,
            name: this.name.current.value,
            domain: this.domain.current.value,
            location: this.location.current.value,
        }
        this.props.onUpdateTrainee(trainee)

    }

    render() {

        return (
            <div className="container mt-5">
            <div className="row">
              <div className="col">
                <form>
                  <div className="mb-3 row">
                    <label htmlFor="first-name" className="col-sm-4 col-form-label">
                      Trainee Id
                    </label>
                    <div className="col-sm-5 ">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        ref={this.id}
                        name="Id"
                        required
                      />
                    </div>
                  </div>
    
                  <div className="mb-3 row">
                    <label htmlFor="last-name" className="col-sm-4 col-form-label">
                      Trainee Name
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.name}
                        name="name"
                        required
                      />
                    </div>
                  </div>
    
                  <div className="mb-3 row">
                    <label htmlFor="last-name" className="col-sm-4 col-form-label">
                      Trainee Domain
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.domain}
                        name="domain"
                        required
                      />
                    </div>
                  </div>
    
    
                  <div className="mb-3 row">
                    <label htmlFor="phoneno" className="col-sm-4 col-form-label">
                      Trainee Location
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.location}
                        name="location"
                        required
                      />
                    </div>
                  </div>
    
                  <div className="row mt-3">
                    <div className="col">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={this.add.bind(this)}
                      >
                        Add
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={this.update.bind(this)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    
            <br></br>
            <br></br>
    
            <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>
    
            {/* {this.state.addMessage !== "" && (
              <div class="alert alert-success" role="alert">
                {this.state.addMessage}
              </div>
            )}
    
            {this.state.updateMessage !== "" && (
              <div class="alert alert-success" role="alert">
                {this.state.updateMessage}
              </div>
            )} */}
          </div>



        )

    }

}


const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTrainee: (trainee) => {
            dispatch(actionCreators.addTrainee(trainee))
        },
        onUpdateTrainee: (id, newTraineeObject) => {
            dispatch(actionCreators.updateTrainee(id, newTraineeObject))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())

        }

    }

}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddTrainee))

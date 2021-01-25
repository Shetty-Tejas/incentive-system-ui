import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/actions'

class ViewTrainee extends Component {
    
   
    
    componentDidMount() {
        this.props.onGetTrainees()
    }

    delete(traineeId){
        this.props.onDeleteTrainee(traineeId);
    }

    render() {
       let traineesList=this.props.traineesList.map((trainee,index)=>{
            return(
                <tr key={index}>
                    <th>{trainee.id}</th>
                    <td>{trainee.name}</td>
                    <td>{trainee.domain}</td>
                    <td>{trainee.location}</td>
                    <td>
                        <button onClick={this.delete.bind(this,trainee.id)} className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
        return (
             <div>
                    <div className="trn-table-div">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">Trainee ID</th>
                                    <th scope="col">Trainee Name</th>
                                    <th scope="col">Trainee Domain</th>
                                    <th scope="col">Trainee Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {traineesList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        traineesList:state.traineesList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTrainees: () => {
          return  dispatch(actionCreated.getAllTrainees())
        },
        onDeleteTrainee: (traineeId, newTraineeObject) => {
          return dispatch(actionCreated.deleteTrainee(traineeId, newTraineeObject))
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewTrainee)
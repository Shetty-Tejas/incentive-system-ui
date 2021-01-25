import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'


class SearchByTraineeId extends Component {
    constructor(props) {
        super(props)
        this.traineeId = React.createRef()
    }

    search() {
       this.props.onSearchByTraineeId(this.traineeId.current.value)
    }

    componentDidMount() {
        this.props.clearState()
    }

    render() {
        let traineeList = this.props.traineeList.map((trainee, index) => {
            return (
                <tr key={index}>
                    <th>{trainee.traineeId}</th>
                    <td>{trainee.traineeName}</td>
                    <td>{trainee.traineeDomain}</td>
                    <td>{trainee.traineeLocation}</td>        
                </tr>
            )
        })
        return (
              <div className="search-trainee-id">
               <div className="mb-3 input-search-id ">
                    <input 
                    type="text" 
                    ref={this.traineeId} 
                    className="form-control" 
                    id="traineeId" 
                    placeholder="Trainee ID" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                </div>
                <hr />
                <div className="tra-table-div">
                   <table className="table table-info trainee-table">
                        <thead>
                            <tr>
                                <th scope="col">Trainee Id</th>
                                <th scope="col">Trainee Name</th>
                                <th scope="col">Trainee Domain</th>
                                <th scope="col">Trainee Location</th>                                               
                            </tr>
                        </thead>
                        <tbody>
                            {traineeList}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        traineeList: state.traineeList,
        returnedMessage: state.returnedMessage
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchById: (traineeId) => dispatch(actionCreators.getTraineesById(traineeId)),
        clearState: () => dispatch(actionCreators.clearState())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByTraineeId)



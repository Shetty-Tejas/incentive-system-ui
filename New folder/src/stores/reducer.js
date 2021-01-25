
import * as actionCreators from '../actions/actions'

const initialState = {
      returnedMessage: 'data yet Found',
      traineesList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_TRAINEES:
            let listOfTrainees = action.data.traineesList
            let resMessage=action.data.resMessage
            console.log(action.data)
            console.log('List of Trainees')
            console.log(listOfTrainees)
            if(listOfTrainees.length==0){
                resMessage='No Data Found'
            }
            return {
                returnedMessage: resMessage,
                traineesList: listOfTrainees
            }

        case actionCreators.DELETE_TRAINEE:
            let listOfAfterDeletion = action.data.traineesList
            let resMsg=action.data.resMessage
            console.log(resMsg)
            console.log(listOfAfterDeletion)
           // console.log(messageAfterDeletion)
           if(listOfAfterDeletion.length==0){
            resMsg='After Deletion, No Data Found'
            }
            return {
                returnedMessage: resMsg,
                traineesList: listOfAfterDeletion

            }

        case actionCreators.ADD_TRAINEE:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.trainees
            console.log('Addition of trainee')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                traineesList: listAfterAddition
            }

        case actionCreators.UPDATE_TRAINEE:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.trainees
            console.log('Updating trainee')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                traineesList: listAfterUpdation
            }

 

        // case actionCreators.GET_TRAINEES_BY_ID:
        //     let listOfTraineeById = action.data.trainees
        //     console.log('List of trainee by id')
        //     console.log(listOfTraineeById)
        //     return {
        //         traineesList: listOfTraineeById
        //     }
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                traineesList: []
            }

        default:
            return state
    }
}

export default reducer;

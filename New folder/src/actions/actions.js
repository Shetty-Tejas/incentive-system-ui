import axios from 'axios'
export const ADD_TRAINEE = 'ADD_TRAINEE'
export const GET_ALL_TRAINEES = 'GET_ALL_TRAINEES'
export const DELETE_TRAINEE = 'DELETE_TRAINEE'
export const UPDATE_TRAINEE = 'UPDATE_TRAINEE'
export const GET_TRAINEE_BY_ID = 'GET_TRAINEE_BY_ID'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'



const BASE_URL = 'http://localhost:8080/api/trainee/'


const getAllTraineesAction = (data) => {
    return {
        type: GET_ALL_TRAINEES,
        data
    }
}
export const getAllTrainees = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllTraineesAction(response.data))
                
            })
    }
}


const addTraineeAction = (data) => {
    return {
        type: ADD_TRAINEE,
        data
    }
}
export const addTrainee = (newTrainee) => {
    return (dispatch) => {
        axios.post(BASE_URL, newTrainee)
            .then((response) => {
                alert("Trainee Sucessfully added")
                //console.log(response.data)
                dispatch(addTraineeAction(response.data))
            })
    }
}


const deleteTraineeAction = (data) => {
    return {
        type: DELETE_TRAINEE,
        data
    }
}
export const deleteTrainee = (traineeId) => {
    return (dispatch) => {
        axios.delete(BASE_URL + traineeId)
            .then((response) => {
                dispatch(deleteTraineeAction(response.data))
            }).catch(error=>{
                console.log(error)
            })
                
    }
}

const updateTraineeAction = (data) => {
    return {
        type: UPDATE_TRAINEE,
        data
    }
}
export const updateTrainee = (newTraineeDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL+'updatetrainee/'+newTraineeDetails.id, newTraineeDetails)
            .then((response) => {
                alert("Trainee Updated added")
                dispatch(updateTraineeAction(response.data))
            })
    }
}
//search by domain action
const getTraineeByIdAction = (data) => {
    return {
        type: GET_TRAINEE_BY_ID,
        data
    }
}
//search by id function
export const getTraineeById = (traineeId) => {
    return (dispatch) => {
        let URL = `http://localhost:8080/trainee/view?traineeId=${traineeId}`
        axios.get(URL)
            .then((response) => {
                dispatch(getTraineeByIdAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}






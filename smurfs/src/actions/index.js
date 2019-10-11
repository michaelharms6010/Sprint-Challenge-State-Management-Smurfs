import axios from "axios";

export const FETCHING_SMURFS ="FETCHING_SMURFS"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR"
export const ADD_SMURF ="ADD_SMURF"
export const UPDATE_SMURF = "UPDATE_SMURF"
export const DELETE_SMURF = "DELETE_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS"
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE"

export const fetchSmurfs = ()=>{
    return dispatch => {
    dispatch({type: FETCHING_SMURFS});
    axios.get("http://localhost:3333/smurfs")
    .then(res=> {
        console.log("get response", res)
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type:FETCH_SMURF_ERROR});
    })
    }
}


export const addSmurf = newSmurf => dispatch =>{
    dispatch({type: ADD_SMURF})
    console.log(newSmurf)
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(res =>{
        console.log("post response:", res)
        dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: err})
    })
    
        
}

export const updateSmurf = updatedSmurf => dispatch =>{
    dispatch({type: UPDATE_SMURF})
    console.log(updatedSmurf)
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res =>{
        console.log("put response:", res)
        dispatch({type: UPDATE_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: UPDATE_SMURF_FAILURE, payload: err})
    })
    
        
}




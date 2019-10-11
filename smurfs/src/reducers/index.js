import {
    FETCHING_SMURFS,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,
    UPDATE_SMURF,
    UPDATE_SMURF_FAILURE,
    UPDATE_SMURF_SUCCESS,
    DELETE_SMURF,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE
} from '../actions/';
import { REFUSED } from 'dns';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURFS: {
            return {
                ...state,
                fetchingSmurfs: true,
            }
        }

        case FETCH_SMURF_SUCCESS: {
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                fetchingSmurfs: false
            };
        }

        case FETCH_SMURF_ERROR: {
            return {
                ...state,
                fetchingSmurfs:false,
                error: "Error fetching Smurfs"
            }
        }

        case ADD_SMURF: {
            return {
                ...state,
                addingSmurf:true,
                error: "",
            };
        }
        
        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs:false,
                addingSmurf: false,
                error: ""
            }
        }

        case ADD_SMURF_FAILURE: {
            return {
                ...state,
                addingSmurf: false,
                error: action.payload,
            }
        }

        case UPDATE_SMURF: {
            return{
                ...state,
                updatingSmurf: true,
                error:""
            }
        }

        case UPDATE_SMURF_SUCCESS: {
            return {
                ...state,
                updatingSmurf: false,
                error:"",
                smurfs:action.payload

            }

        }

        case UPDATE_SMURF_FAILURE: {
            return {
                ...state,
                updatingSmurf: false,
                error: action.payload

            }
        }

        case DELETE_SMURF: {
            return {
                ...state,
                deletingSmurf: true,
                error:""
            }
        }
        case DELETE_SMURF_FAILURE: {
            return {
                ...state,
                deletingSmurf: false,
                error: action.payload
                
            }
        }
        case DELETE_SMURF_SUCCESS: {
            return {
                ...state, 
                deletingSmurf: false,
                error: "",
                smurfs: action.payload
            }
        }

    



        default: return state;
    }
}

export default reducer;
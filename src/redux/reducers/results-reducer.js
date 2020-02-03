import {
    RETRIEVE_RESULTS,
    RETRIEVE_RESULTS_ERROR,
    RETRIEVE_RESULTS_OK
} from '../action-types'

const defaultState = {
    error: false,
    results: [],
}

const results = (state = defaultState, action) => {
    switch(action.type) {
        case RETRIEVE_RESULTS:
        case RETRIEVE_RESULTS_OK:
            return {
                ...state,
                results: action.payload
            }
        case RETRIEVE_RESULTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default results

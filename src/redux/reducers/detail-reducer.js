import {
    RETRIEVE_DETAIL,
    RETRIEVE_DETAIL_ERROR,
    RETRIEVE_DETAIL_OK
} from '../action-types'

const defaultState = {
    detail: {},
    error: null
}


const detail = (state = defaultState, action) => {
    switch(action.type) {
        case RETRIEVE_DETAIL:
        case RETRIEVE_DETAIL_OK:
            return {
                ...state,
                detail: action.payload
            }
        case RETRIEVE_DETAIL_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default detail

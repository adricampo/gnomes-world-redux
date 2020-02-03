import { combineReducers } from 'redux'
import detail from './reducers/detail-reducer'
import results from './reducers/results-reducer'

export default combineReducers({
    detail,
    results
})
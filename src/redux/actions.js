import {
RETRIEVE_DETAIL,
RETRIEVE_DETAIL_ERROR,
RETRIEVE_DETAIL_OK,

RETRIEVE_RESULTS,
RETRIEVE_RESULTS_ERROR,
RETRIEVE_RESULTS_OK,
} from './action-types'

import retrieveGnome  from '../logic/retrieve-gnome'
import searchGnomes  from '../logic/search-gnomes'

const downloadItems = () => ({
    type: RETRIEVE_RESULTS,
    payload: true
})

const downloadItemsOk = items => ({
    type: RETRIEVE_RESULTS_OK,
    payload: items
})

const downloadItemsError = () => ({
    type: RETRIEVE_RESULTS_ERROR,
    payload: true
})

const downloadDetail = () => ({
    type: RETRIEVE_DETAIL,
    payload: true
})

const downloadDetailOk = item => ({
    type: RETRIEVE_DETAIL_OK,
    payload: item
})

const downloadDetailError = () => ({
    type: RETRIEVE_DETAIL_ERROR,
    payload: true
})

export function searchGnomesAction(query, criteria){
    return async(dispatch) => {
        dispatch(downloadItems())
        try{
            const data = await searchGnomes(query, criteria)
            dispatch(downloadItemsOk(data))
        } catch(error) {
            dispatch(downloadItemsError())
        }
    }
}

export function retrieveGnomeAction(gnomeId) {
    return async(dispatch) => {
        dispatch(downloadDetail())
        try {
            const data = await retrieveGnome(gnomeId)
            dispatch(downloadDetailOk(data))
        } catch(error) {
            dispatch(downloadDetailError())
        }
    }
}
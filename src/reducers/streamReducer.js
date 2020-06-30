import _ from 'lodash'
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
}from '../actions/types'

export default (state={} , action) =>{
    switch (action.type) {
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')} // ... in the _.mapKeys takes the key value pairs (objects) inside the big object and adds them into the new state object
        case FETCH_STREAM:
            return {...state,[action.payload.id]: action.payload}
        case   CREATE_STREAM:
            return {...state,[action.payload.id]: action.payload}
        case   EDIT_STREAM:
            return {...state,[action.payload.id]: action.payload}
        case DELETE_STREAM :
            return _.omit(state, action.payload) //omit here create a new object from the state object and the id (action.payload) as key to remove with its val 
        default:
            return state;
    }
}
import {combineReducers}  from 'redux';
import authReducer from './authReducer';

// export default combineReducers({
//     replaceMe : () => 'fsgtgs'
// })

export default combineReducers({
    auth : authReducer
})
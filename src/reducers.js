import { combineReducers } from 'redux'
import randomJokeReducer from './randomJokeReducer'
import defaultReducer from './defaultReducer'


export default combineReducers({
    randomJokeReducer,
    defaultReducer
});

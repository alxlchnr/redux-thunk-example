import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {
    createStore,
    applyMiddleware
} from 'redux'
import reducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
));
console.log(store.getState())

export default store;

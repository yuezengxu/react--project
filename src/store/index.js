import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import reduxPromiseMiddleware from 'redux-promise-middleware'
const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));


export default store


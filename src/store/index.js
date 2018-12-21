import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import listReducer from "../store/reducers/listReducer"



const reducers = combineReducers({
    listReducer
})

const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));


export default store


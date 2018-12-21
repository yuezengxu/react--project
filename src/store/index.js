import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import movie from "./reducers/movie";
const reducers = combineReducers({
    movie,
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
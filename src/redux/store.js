import {createStore, applyMiddleware, compose} from "redux"
import todosReducer from "./reducers"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(todosReducer,composeEnhancers(applyMiddleware(thunk)))

export default store
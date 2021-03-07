import {combineReducers,createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    users:userReducer,
    posts:postReducer
})

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)));

export default store;
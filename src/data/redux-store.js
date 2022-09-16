import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  friendsPage:friendsReducer,
  auth:authReducer,
  form:formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
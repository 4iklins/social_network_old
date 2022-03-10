import { applyMiddleware, combineReducers, createStore } from "redux";
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

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
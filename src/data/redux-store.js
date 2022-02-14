import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  friendsPage:friendsReducer,
  auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
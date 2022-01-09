import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reduser";

let reducers = combineReducers({
  postsPage:postsReducer,
  dialogsPage:dialogsReducer
})

let store = createStore(reducers);

export default store;
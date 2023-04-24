import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";

import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sidebarReducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  frendsState: sideBarReducer,
});

let store = createStore(reducers);
/*    */
export default store;

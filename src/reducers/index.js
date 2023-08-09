import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  articleReducer: articleReducer,
});

export default rootReducer;

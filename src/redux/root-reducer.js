import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import AddReducer from './adds/add.reducer';
import addReducer from "./adds/add.reducer";
export default combineReducers({
  user: userReducer,
  add:addReducer
});

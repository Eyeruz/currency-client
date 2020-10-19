import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
import userReducer from "./userReducer";

export default combineReducers({
  currencies: currencyReducer,
  users: userReducer,
});

import { combineReducers } from "redux";
import reducerCountry from "./reducerCountry";
import reducerHistory from "./reduserHistory";

const rootReducer = combineReducers({
  country: reducerCountry,
  history: reducerHistory,
});
export default rootReducer;

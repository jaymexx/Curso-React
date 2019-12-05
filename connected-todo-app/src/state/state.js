import { combineReducers } from "redux";
import lists from "./lists/reducer";

const reducers = combineReducers({
    lists
});

export default reducers;
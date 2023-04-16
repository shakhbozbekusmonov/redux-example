import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { employeeReducer } from "./employeeReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    employee: employeeReducer,
});

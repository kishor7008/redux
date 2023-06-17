import { combineReducers } from "redux";
import Reducer from "./component/Reducer/CounterReducer";


let combineReducer = combineReducers(
    { counter: Reducer }
)

export default combineReducer


//count =0;
//
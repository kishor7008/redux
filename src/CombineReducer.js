import { combineReducers } from "redux";
import Reducer from "./component/Reducer/CounterReducer";
import { profileReducer } from "./component/Reducer/ProfileReducer";

let combineReducer = combineReducers(
    { counter: Reducer ,profile:profileReducer}

)


export default combineReducer


//count =0;
//



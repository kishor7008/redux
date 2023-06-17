
import { legacy_createStore, compose } from "redux";
import combineReducer from "./CombineReducer";

let store = legacy_createStore(
    combineReducer, window.__redux_devtools_extension_compose__ || compose
)
export default store;


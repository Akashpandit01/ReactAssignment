
import { createStore } from "redux";
import { useReducer } from "react";
import counterReducer from "./reducer";


const store=createStore(counterReducer);
export default store;

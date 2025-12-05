
import {createStore,applyMiddleware} from "redux";
import CounterReducer from "./reducer";
import { delayMiddleware,logger } from "./miiddeleware";


const store=createStore(
    CounterReducer,
    applyMiddleware(logger,delayMiddleware)
);
export default store


// import { createStore,applyMiddleware } from "redux";
// import CounterReducer from "./reducer";
 

// const loggerrmiddleware =(store)=>(next)=>(action)=>{

//     console.log("Middleware intercepted",action);
    
//     next(action);
// };
// const store=createStore(CounterReducer,applyMiddleware(loggerrmiddleware))

// export default store;


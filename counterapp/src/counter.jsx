import React from "react";

import { increment,decrement,reset } from "./fetures/counterslice";
  import {useSelector,useDispatch} from 'react-redux'

export default function Counter(){
  
    const count=useSelector(state=>state.counter.value);
    const dispatch=useDispatch();

  return(<>
   <h2>count:{count}</h2>
   <button  onClick={()=>dispatch(increment())}>increment</button>
   <button onClick={()=>dispatch(decrement())}> Decrement</button>
   <button onClick={()=>dispatch(reset())}>Reset </button>
  
  </>)
}
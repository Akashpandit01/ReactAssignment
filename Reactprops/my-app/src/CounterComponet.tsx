  
 import React from "react"

 import { useState } from "react"
  function CounterComponet({initialValue}){

    const [count,setCount]=useState(initialValue);
       
    const increment =()=>{
        setCount(prev=>prev+1);
    };

    const decrement =()=>{
        setCount(prev=>(prev>0? prev-1:0));
    };
    return( <>
    <h1> {count}</h1>
         <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Increment</button>
    </>)
  }
  export default CounterComponet;
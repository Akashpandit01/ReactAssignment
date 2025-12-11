import { useState } from "react"

const CounterApp=()=>{


    const[count,setCount]=useState(0);

  const  incment =()=>{
    setCount(prev=>prev+1);
  }
   const decrement=()=>{
    setCount( prev=>(prev>0)?prev-1:0);
   }
   const recet=()=>{
    setCount(0);
   }
     
   return( <>
    <h1> {count}</h1>
    <button onClick={incment}>Increment</button>
    <button onClick={decrement} >Decrement</button>
    <button onClick={recet} >Recet</button>
   
   </>)
}
export default CounterApp;
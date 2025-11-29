import React, { useEffect, useRef, useState } from "react";


export default function Counter(){
    const[count,setCount]=useState(0);
    const inputRef=useRef(null);

   useEffect(()=>{
    inputRef.current.focus();
   },[]);


    return(<>
    <div>
        <p>Count{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>IncreaseCount</button>
        <br />
        <input type="text" ref={inputRef} placeholder="clck" />
    </div>
    </>)
}
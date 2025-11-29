
import React, { useEffect, useRef, useState } from "react";


export default function Counter(){
    const [count,setCount]=useState(0);
    const inputRef=useRef(null);


    useEffect(()=>{
      inputRef.current.focus();  
    })
    return(
        <div>
        <p>count:{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increase Count

        </button>
        <br/>
        <input ref={inputRef} type="text"  />
        </div>
    )
}
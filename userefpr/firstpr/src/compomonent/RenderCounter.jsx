
import React, { useEffect, useRef, useState } from "react";


function RenderCounter(){
     
    const [count,setCount]=useState(0); 
    const renderCount=useRef(1);

    const prevCount=useRef(0);
    useEffect(()=>{
   renderCount.current+=1;
   prevCount.current=count;
    });

    return(
        <>

        <div>

            <h2>counter:{count}</h2>
            <h3>prevcount:{prevCount.current} times</h3>
            <button onClick={()=>setCount(prev=>prev+1)}>Increase COunt</button>

            <p>Complonent Re-rendered:{renderCount.current} times</p>
        </div>
        </>
    )
}
export default RenderCounter;

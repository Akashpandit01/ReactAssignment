import { useEffect, useState } from "react";

  

  function TimeComponent(){
     const [seconds,setSeconds]=useState(0);
     const [count,setCount]=useState(0);
     useEffect(()=>{
        console.log(("⏰ Timer started"));
        const timer=setInterval(()=>{
            setSeconds(prev=>prev+1);
            console.log(`Seconds :${seconds}s`);
        },1000)


        return () =>{
            clearInterval(timer);
            
             console.log("Timer stopper")   
            
        }
     },[count])
     return(<>
     <h1> Time:{seconds}s</h1>
     <h2>{count}</h2>
     <button onClick={()=>setCount(prev=>prev+1)}>Increase count</button>
     </>)
  }
  export default TimeComponent;
import { useState } from "react";


export default function InputBox(){
    const [text,setText]=useState("");
    const[isDark,SetIsDark]=useState(true);

       const [count,setCount]=useState(0);
    return (

        <div style={
            {
                backgroundColor:isDark?"black":"white",
                color:isDark?"red":"orange"
            }
        }>

         <input type="text"  onChange={(e)=>setText(e.target.value)}/>
        <p> You typed:{text}</p>
         
           <button onClick={()=>setCount(prev=>prev+1) } style={{color:isDark?"red":"orange"}}>Increment</button>
           <button onClick={()=>setCount(prev=>(prev>0)?prev-1:0)} style={{color:isDark?"red":"orange"}}> Decrement</button>
           <button onClick={()=>SetIsDark(!isDark)} style={{color:isDark?"red":"orange"}}>chagecolor</button>
           <h1 >{count}</h1>
        </div>
    )
}
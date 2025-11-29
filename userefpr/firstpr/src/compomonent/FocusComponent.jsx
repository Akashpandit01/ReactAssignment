


import React, { useRef } from "react";


function FocuInput(){

     const inputef=useRef(null);

     function focusinput(){
        console.log(inputef.current);
         inputef.current.focus();
        inputef.current.style.color="red"
     }
    return(
        
        <>
       <div>

         <input type="text" ref={inputef} placeholder="Type here..." />
         <button onClick={focusinput}>Focus Input</button>
       </div>
         
        
        </>
    )
}
export default  FocuInput
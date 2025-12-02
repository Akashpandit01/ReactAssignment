import { useState } from "react"

 const useClickMiddleware=(callback,delay=2000)=>{
  const[lastClick,setLastClick]=useState(0);

  return ()=>{
    const now=Date.now();

   setLastClick(now);
   callback();

    if(now-lastClick<delay){
        console.log("clicked bloack by middleware")
        return;
    }
  }
    }

function ClickButton (){
    const handlclick=useClickMiddleware(()=>{
        console.log("Button Clicked");

    })

   
    return(<>
     <button onClick={handlclick}>Click ME</button>
    </>)


}

export default ClickButton;
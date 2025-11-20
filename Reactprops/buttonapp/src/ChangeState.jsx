 


  import { useState } from "react"
function ChangeState(){
  const [color,setColor]=useState("green")
  const[btn,setBtn]=useState(false);
  
  const btnOff=()=>{
    setBtn(prev=>!prev);
  }

    return(<>
       <button onClick={btnOff}
        style={{
         color: btn?"green":"red"
        }}
       
       >{btn?"ON":"OFF"}</button>
    
    </>)


}
export default ChangeState;
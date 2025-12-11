import { useState } from "react"

const ToggleLayout=()=>{
 
    const [isdark,seTdark]=useState(false);


       return (<>
       
         <div style={{wodth:"500px",
            height:"500px",
            backgroundColor:isdark?"black":"white",
            color:isdark?"White":"black",
            textAlign:"center"
         }}>
    <h2 >{isdark?"darkMode":"Light Mode"}</h2>
      <button onClick={()=>seTdark(!isdark)}  style={{background:isdark?"white":"black",
        color:isdark?"black":"white"
      }}>Toggle</button>

         </div>
       </>)
}
export default ToggleLayout;
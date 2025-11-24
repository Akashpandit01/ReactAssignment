import { useContext } from "react";
import { colorContext } from "./ColorProvider";


function ChildComponent(){
    const {color,toggletheme}=useContext(colorContext);

    return (
        <div style={{
            backgroundColor:color==="dark"?"#222":"#fff",
            color:"dark"?"#000":"#fff",
            padding:"20px"
        }}>
     <h2>Theme:{color}</h2>
   <button onClick={toggletheme}> Toggle Theme</button>

        </div>
    )
}
export default ChildComponent;
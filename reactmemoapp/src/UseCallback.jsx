import react,{ useCallback, useState } from "react"
 const Button=react.memo(({onClick,label})=>{
    console.log("Button Renderd");
    return <button onClick={onClick}>{label}</button>
 })
  
const UseCallback=()=>{
    const [count,setCount]=useState(0);
    const handlclick=useCallback(()=>{
        console.log("Button Clicked");
    },[]);

    return (
        <div>

            <h2>Without useCallback</h2>
            <p>COunt:{count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
            <Button onClick={handlclick} label="Non Memoizez function"/>
        </div>
    )
}
export default UseCallback;
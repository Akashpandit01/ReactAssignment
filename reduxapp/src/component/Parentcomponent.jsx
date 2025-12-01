import { useState } from "react"

export default function ParentComponent(){
  
    const [count,setCount]=useState(0);

    return (<>
    <ChildComponent count={count} setCount={setCount}/>
    
    </>)
}

function ChildComponent({count,setCount}){
  return (
    <>
    <div>
        <p>count:{count}</p>
        <button onClick={()=>setCount(count+1)}></button>
    </div>
    </>
  )  
}

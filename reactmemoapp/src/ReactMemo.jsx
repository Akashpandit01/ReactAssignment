import React, { useState } from "react";

// const Child =({label})=>{
//     console.log("child Rendered")
//     return <p>{label}</p>
// }

 const Child =React.memo(({label})=>{
    console.log("child Rendered")
    return <p>{label}</p>
}
);


const ReactMemo=()=>{
    const [count,setCount]=useState(0);

    return (
        <div>
            <h2>Whitout react.Memo</h2>

            <button onClick={()=>setCount(prev=>prev+1)}>Increment Count</button>
            <p>Count:{count}</p>
            <Child label="I re-renderd every time!"/>
        </div>
    )
}
export default ReactMemo
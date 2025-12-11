 
 import {useRef,useEffect,useState} from 'react'
export default function PreviousValue(){
   


const [count,setCount]=useState(0);
const prevRef=useRef();


useEffect(()=>{
    prevRef.current=count;
},[count]);

return (
    <>
    <h1>curent :{count}</h1>
    <h2> Previous:{prevRef.current}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>  
    </>
)


}
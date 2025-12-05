import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function SlowDouble({number}){
    const slowFunction=(num)=>{
        console.log("⌛Calculating....");
        for(let i=0;i<1e9;i++){
            
        }
        console.log("Completed");
        return num*2;
    }
    const result=useMemo(()=>slowFunction(number),[number])

return <p>Result:{result}</p>
}


function UseMemo() {

const [number,setNumber]=useState(1);
const[color,setcolor]=useState(false);

const toggleColor=()=>setcolor(prev=>!prev);
  return (
    <>
    <div style={{backgroundColor:color?'lightblue':'lightcoral',padding:'20px'}}>
      <h2>Slow Calculation without useMemo</h2>
  <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />

  <button onClick={toggleColor}>Toggle BackGroundcolor</button>
  <SlowDouble number={number}/>
    </div>
    </>
  )
}

export default UseMemo;

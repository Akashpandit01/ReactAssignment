import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './counterApp'
import ToggleLayout from './Toggleyaout'
import InputBox from './InputBox'
import NameList from './ListRenderApp'
import Products from './Product'
import Welcome from './propdrilling'
import Posts from './useEfectpr'

function App() {
  const [count, setCount] = useState(0)
  const [color,setcolor]=useState("red");
  const [text,setText]=useState("black");

  return (
    <>
      {/* <CounterApp/>
      <ToggleLayout/>
      <InputBox/> */}
      {/* <NameList/>
      <Products/> */}

      {/* <Welcome text={text} color={color}/>
      <button onClick={()=>
        setcolor(prev=>(prev==="red"?"black":"red"))}> changecolor</button>
<button onClick={()=>(setText(prev=>prev==="black"?"Red":"black"))}> changetext</button>
     */}

     <Posts/>
    </>
  )
}

export default App
 

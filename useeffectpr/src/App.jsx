import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './Fetchdata'
import TimeComponent from './TimerComponent'

function App() {
  const [count, setCount] = useState(0);
  const [show,setShow]=useState(false);
  return (
    <>
    
      {show && <TimeComponent/>}
    <button onClick={()=>setShow(!show)}>Click</button>

    
 
    </>
  )
}

export default App

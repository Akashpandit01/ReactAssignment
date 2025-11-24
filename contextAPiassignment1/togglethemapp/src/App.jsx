import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorProvider from './ColorProvider'
import ChildComponent from './ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorProvider>
   
     <ChildComponent/>
     
     </ColorProvider>
    </>
  )
}

export default App

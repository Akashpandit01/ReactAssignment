import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickButton from './component/ClickButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ClickButton/>
    </>
  )
}

export default App

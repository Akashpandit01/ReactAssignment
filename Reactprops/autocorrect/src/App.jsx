import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCorrectApp from './AutoCorrectApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AutoCorrectApp/>
    </>
  )
}

export default App

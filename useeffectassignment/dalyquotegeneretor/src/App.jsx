import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteApp from './QuoteApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <QuoteApp/>
    </>
  )
}

export default App

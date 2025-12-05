import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datafetcher from './component/DataFetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Datafetcher/>
    </>
  )
}

export default App

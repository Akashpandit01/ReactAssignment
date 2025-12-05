import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './component/users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/>
     <Users/>
    </>
  )
}

export default App

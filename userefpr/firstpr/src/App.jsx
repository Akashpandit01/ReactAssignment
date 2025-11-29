import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocuInput from './compomonent/FocusComponent'
import RenderCounter from './compomonent/RenderCounter'
import QuerybasePagination from './compomonent/QuerybasePagination'

function App() {

 
  const [count, setCount] = useState(0)

  return (
    <>
    <QuerybasePagination/>

    </>
  )
}

export default App

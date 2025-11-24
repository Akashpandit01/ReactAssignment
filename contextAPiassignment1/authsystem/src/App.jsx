import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthProvider from './AuthProvider'
import Navbar from './NavBar'
import Mains from './Mains'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <AuthProvider>
  <Navbar/>
  <Mains/>
   
    </AuthProvider>
    
  )
}

export default App

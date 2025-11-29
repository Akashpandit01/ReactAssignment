import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Aboutus from './Aboutus'
import Contact from './Contactus'
import { Route, Routes } from 'react-router-dom'
import Navbar from './NavBar'
import LandingPage from './LandingPage'
import Unknown from './Unkonown'
  
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  
 <Routes>
  
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<Aboutus/>}/>
  <Route path='contact' element={<Contact/>}/>

  <Route path='*' element={<Unknown/>}/>
 </Routes>
    
    </>
  )
}

export default App


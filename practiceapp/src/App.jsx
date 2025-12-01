import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Aboutus from '../../practices/routingapp/src/Aboutus'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>


      </Routes>
      
        <Navbar/>
      </BrowserRouter>

    
    </>
  )
}

export default App

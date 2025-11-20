import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProfileCard
     name="akash Pandit"
     age={23}
     bio="I am a developer passionate about Java, React, and building scalable applications. I enjoy problem-solving and working on exciting projects."/>
    </>
  )
}

export default App

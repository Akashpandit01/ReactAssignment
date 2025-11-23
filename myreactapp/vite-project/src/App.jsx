import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react';
import { useContext } from 'react';


  const UserContext=createContext();// step 1: create context
function App() {
  
 const [user,setUser]=useState("tommy")  
  return  (

    //step 2 provide context
    <UserContext.Provider value={user}>

      <Parent/>
    </UserContext.Provider>
  )
   
  
}
function Parent({user}){
  return <Child/>
}
 
function Child(){
  return <Gradchild/>;
}

function Gradchild(){

  const user=useContext(UserContext)
  return <h1>Hello ,{user}</h1>
}

export default App

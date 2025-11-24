import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  const [count, setCount] = useState(0)
    
  function reducer(state,action)
  {
    switch(action.type)
    {
      case 'incement':
      return {count:state.count+1};
      case 'decrement':
        return {count:state.count-1};
          default :
          state;
    
    }
   

    }


     default  function caunter(){
      const [state,dispatch]=useReducer(reducer,{count:0})
  }
  return (
    <>
    
    </>
  )
}

export default App

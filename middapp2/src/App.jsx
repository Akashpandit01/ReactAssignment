import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './redux/store'
import { increment } from './redux/action'
import ClickButton from './ClickButton'
import Counter from './Counter'

function App() {
  

  console.log("Intial state",store.getState())
  store.dispatch(increment());
  console.log("updated state",store.getState);
  return (
    <>
     
     {/* <ClickButton/> */}
     <Counter/>
    </>
  )
}

export default App

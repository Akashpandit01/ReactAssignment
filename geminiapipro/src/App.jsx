import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Chatbutton from './chatbot/ChatButton'
import ChatWindow from './chatbot/Chatwindow';

function App() {
    const [ischatOpen,setIsChatOpen]=useState(false);
  return (
    <>
    
    <Chatbutton  isOpen={ischatOpen}
    OnClick={()=>setIsChatOpen(!ischatOpen)}/>


    <ChatWindow isOpen={ischatOpen} OnClick={()=>setIsChatOpen(false)}/>

      
    </>
  )
}

export default App

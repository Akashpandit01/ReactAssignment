
import { GoogleGenAI } from "@google/genai";
import { useEffect, useRef, useState } from "react";

const genAp = new GoogleGenAI({apiKey:"AIzaSyD3Khavqc1ettyPgpRA6hAKS8OmA6NDSow" });

const ChatWindow=(isOpen,OnClose)=>{

    const [userName,setUserName]=useState("guest");
    const [userIniTial,setUserInitial]=useState("G");
    const [message,setMessage]=useState([]);
    const[input,setInput]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [isMinimizez,setIsMinimized]=useState(false);
    const chatWindowRef=useRef(null);
    const messaeEndRef=useRef(null);
    const inputRef=useRef(null);


    useEffect(()=>{
   const fetchUserData=()=>{
    const userdetails=JSON.parse(localStorage.getItem("name") ||'{name:"Guest"}')
    setUserName(userdetails?.name || "Guest")
    setUserInitial((userdetails.name ||"G").charAt(0).toUppercase())
    setMessage([{
    text:`hi ${userdetails.name ||"Guest"}! I'am Your Ai Assistant Powerd by Masai How can I Help You?`,isBot:true,
},
])
   }
    },[isOpen])

     //this useeffect will handle  closing of the pop up

     useEffect(()=>{
        const handleClickeOutside=(event)=>{
            if(chatWindowRef.current && !chatWindowRef.current.contain(event.target))
            {
                onclose();
            }
        }
        if(isOpen){
            document.addEventListener("mousedown",handleClickeOutside);
        }
        return ()=>{
document.addEventListener("mousedown",handleClickeOutside);
        }


     },[isOpen,onclose])


     if(!isOpen) return null;

     return (
        <div ref={chatWindowRef}>
            
<header></header>

        </div>
     )

}

export default ChatWindow;
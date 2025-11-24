import { createContext, useState } from "react";

 
 
  export const colorContext=createContext();
 export default function ColorProvider({children}){

    const [color,setColor]=useState("dark");


    const toggletheme =()=>{
        setColor((prev)=>(prev==="dark"?"light":"dark"));

    };
    return (
 <colorContext.Provider value={{color,toggletheme}}>
   {children}
 </colorContext.Provider>

    );

 }
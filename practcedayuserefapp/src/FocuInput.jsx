

import {useRef,useEffect} from 'react'
export default function  FocusInput(){

  const inputRef=useRef();


  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <>
    
     <input type="text"  ref={inputRef} placeholder='Type here...'/>
 
   <button onClick={()=>inputRef.current.focus()}>focus Again</button>
    </>
  )

} 

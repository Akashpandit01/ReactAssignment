import {useState,useEffect,useRef} from 'react';

export function useTimer(){
    const [timer,setTimer]=useState(0);
    const [isRunning,setIsRunning]=useState(false);

    const intervalRef=useRef(null);

    const startTimer=()=>{
        if(isRunning)
            return;
        setIsRunning(true);

        intervalRef.current=setInterval(()=>{
            setTimer((prev)=>prev+1);
        },1000)
    }
    
const stopTimer=()=>{
    setIsRunning(false);
    crearInterval(intervalRef.current);
    intervalRef.current=null;
};
const restTimer=()=>{
    stopTimer();
    setTimer(0);
}
useEffect(()=>{
    return()=>clearInterval(intervalRef.current);
},[]);

return {
    timer,
    isRunning,
    startTimer,
    stopTimer,
    restTimer,
}
}

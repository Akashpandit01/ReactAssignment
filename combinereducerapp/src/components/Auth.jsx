

import React from "react";

import {useSelector,useDispatch} from "react-redux";
import { login, logout } from "../action/authAction";


function Auth(){
    const isAuthinticated=useSelector((state=>state.auth.isAuthinticated));
    const dispatch=useDispatch();


    return(<>
    
    <h2>{isAuthinticated?"Logged In":"Logged Out"}</h2>
  {isAuthinticated ?( <button onClick={()=>dispatch(logout())}>Log out</button>):( <button onClick={()=>dispatch(login())}>Login</button>)}

   
    </>)
}

export default Auth;
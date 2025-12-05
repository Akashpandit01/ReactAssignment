import React,{useEffect} from "react";

import {useSelector,useDispatch} from 'react-redux';
import { fetchusers } from "../users/userslice";

function Users(){
  
    const {data,loading,error}=useSelector(state=>state.users)
    const dispatch=useDispatch();
  useEffect(()=>{

    dispatch(fetchusers())


  },[dispatch]);
  
    if(loading) 
        return <p>Loading...</p>
        if(error)
            return <p>error:{error}</p>

    return(<>
      <ul>
        {
            data.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))
        }
  
      </ul>
    </>)
}
export default Users;
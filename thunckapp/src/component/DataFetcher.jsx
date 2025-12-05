
import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { fetchdata } from "../redux/action";

const Datafetcher=()=>{
     const{loading,data,error}=useSelector((state)=>state);
     const dispatch=useDispatch();


     useEffect(()=>{
        dispatch(fetchdata());
     },[dispatch])
    return (<>
    <h2>Async datafetching with Redux Thunk</h2>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}

      {/* {data &&(
        <div>
            <h3>Fetching Data</h3>
            <p>{data.id}</p>
            <p>{data.title}</p>
        </div>
      )} */}
   <div>
  {Array.isArray(data) &&
    data.map((item) => (
      <p key={item.id}>{item.title}</p>
    ))
  }
</div>


    
    
    </>)
}

export default Datafetcher;

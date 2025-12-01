import { useEffect, useState } from "react";


function Home(){
    const[data,setData]=useState([]);
    async function fetchData(){
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const result=await response.json();
        setData(result);

    }
useEffect(()=>{
    fetchData();
},[]);
return (
   
   
   <>
   <ul> 
    {
        // data.map((item)=>(
        //   <li key={item.id}>{item.title}</li>  
        // ))

    data.filter((item)=>(item.id=='8')).map((item,index)=>(
        <li key={index}>{item.id} {item.title}</li>
    ))

    }
   </ul>
   </>) 
}

export default Home;
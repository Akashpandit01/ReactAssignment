import React, { useEffect, useState } from "react";


function FetchData(){

 const [data,setdata]=useState([]);
 const [loading,setLoading]=useState(false);

  const [error,setError]=useState("");


   //  async function datafetch(){
   //      const Response=await fetch('https://jsonplaceholder.typicode.com/posts');
   //      const result= await Response.json();

   //        setdata(result);
   //  }


   useEffect(()=>{
      async function fetchdata(){
         setLoading(true);
           try {
             let response=await fetch ('https://jsonplaceholder.typicode.com/posts');
             let result=await response.json();
             console.log(result);
             setdata(result);
           } catch (error) {
            console.log(error.message);
           }finally{
            setLoading(false);
           }

         }
         fetchdata();
    
   },[]);
   
   if(loading)
   {
      return (
         <p>loading....</p>
      )
   }

     return(<>
     {/* <button onClick={datafetch}>Click</button>

     <ul>
    {
     data.map((item,index)=>(
        <li key={index}>{item.title}</li>
     ))   
    }
     

     </ul> */}

     <h1>postt</h1>
     {
      data.slice(0,5).map((posts,index)=>(
         <p key={posts.id}>{index+1}.{posts.title}</p>
      ))
     }
     
     </>)
}

export default FetchData;
import React, { useEffect, useState } from "react";
  function QuerybasePagination(){

    const[currentPage,setCurrentPage]=useState(1);
    const [page,setpage]=useState(1);
    const[posts,setPost]=useState([]);
    const postPerPage=5;
    
    async function fetchData()
    {
        // const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
                const response=await fetch(`https://jsonplaceholder.typicode.com/posts`);

        const result=await response.json();
        setPost(result);
    }

    useEffect(()=>{
       fetchData(); 
    },[]) ;  //[page]   


    const indexOfLastPost=currentPage*postPerPage;
    const indexOffirstpost=indexOfLastPost-postPerPage;
    const currentpost=posts.slice(indexOffirstpost,indexOfLastPost)
    return(
        <>
        <h2>Page:{currentPage}</h2>
        <div>{
            currentpost.map(post=>(
       <p key={post.id}>Id:{post.id} <span>{post.title}</span></p>
            ))
            }
            <button onClick={()=>setCurrentPage(prev=>prev-1)} disabled={currentPage===1}>Prev</button>
            <button onClick={()=>setCurrentPage(prev=>prev+1)}>Next</button>
            </div>
        </>
    )
  }
  export default QuerybasePagination
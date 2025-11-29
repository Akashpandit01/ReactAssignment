import { useState } from "react"


export default function TodoApp1()
{
    const[todos,setTods]=useState([]);


    function addTodo(text){
        setTods([...todos,{id:Date.now(),text,completed:false}]);
    }
  function toggleTodo(id){
    setTods(todos.map(todo=>todo.id==id?{...todo,completed:!todo.completed}:todo))
  }


  function deleteTodo(id){
   setTods(todos.filter(todo=>todo.id!==id))
  }

    return (<>
    <div>
   <button onClick={()=>addTodo("New Task")}>New Task</button>
   <ul>
  {todos.map((todo)=>(
    <li key={todo.id}>
        <span style={{textDecoration:todo.completed?'line-through':'none',cursor:"pointer",marginRight:"20px"
        }} onClick={()=>toggleTodo(todo.id)}>{todo.text}</span>

        <button onClick={()=>deleteTodo(todo.id)}> ❌</button>
    </li>
  ))}

   </ul>

    </div>
    </>)
}
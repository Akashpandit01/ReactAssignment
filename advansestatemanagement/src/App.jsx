import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

import { useReducer } from "react";
import TodoApp1 from './TodoApp1'
import FetchData from './FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <TodoApp1/> */}
      <FetchData/>
    </>
  )
}

export default App






//   function reducer(state,action){
//     switch(action.type)
//     {
//       case 'increment':
//         return {count:state.count+1};
//         case 'decrement':
//           return {count:state.count-1}
//           default:
//             return state;
//     }
//   }

// export  default function Counter(){
//   const[state,dispatch]=useReducer (reducer,{count:0})

//   return (<>
//   <div>
//     <h1>
//       counter using useReducer
//     </h1>
//     <p>Count:{state.count}</p>
//     <button onClick={()=>dispatch({type:'increment'})}>Increase Count</button>
//     <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
//   </div>
//   </>)
// }
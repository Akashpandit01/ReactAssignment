import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementAsync } from "./redux/action";


function Counter(){
  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch();

    return (<>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>

    <button onClick={()=>dispatch(decrement())}>DECREMENT </button>
    <button onClick={()=>dispatch(incrementAsync())}>INCREMENT Async</button>
    </>)
}
export default Counter
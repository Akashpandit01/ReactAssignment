import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./action";


 const Counter =()=>{
    const count=useSelector((state)=>state.count)
 
    const dispatch=useDispatch();
    return (
        <div>
            <h2>COunt:{count}</h2>

            <button onClick={()=>{dispatch(increment())}}> Increment</button>
        <button onClick={()=>{dispatch(decrement())}}> decrement</button>


        </div>
    )
}
export  default Counter;
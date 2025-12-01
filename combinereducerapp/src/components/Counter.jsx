

import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from "../action/counteraction";
function Counter(){
      const count=useSelector((state)=>state.counter.count);
      const dispatch=useDispatch();

    return (
        <>

        <h2>Count:{count}</h2>
        <button onClick={()=>dispatch(increment())}> INCREMENT</button>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
        </>
    )
}
export default Counter;
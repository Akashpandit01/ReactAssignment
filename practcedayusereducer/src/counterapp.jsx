import { useReducer } from "react";

function reducer(state,action){
    
    switch(action.type){
        case "INC" :
            return state+1;
            case "DEC":
                return state>0?state-1:0;
                case "Recet":
                    return 0;
                    default:
                        return state;
    }
};


function CounetrApp(){
    const [count,dispatch]=useReducer(reducer,0);

    return (
        <>
        <h1>{count}</h1>
<button  onClick={()=>dispatch({type:"INC"})}>+ </button>  
<button onClick={()=>dispatch({type:"DEC"})}>-</button>  
<button onClick={()=>dispatch({type:"Recet"})}>Recett</button>    
        </>
    )
}
export default CounetrApp;
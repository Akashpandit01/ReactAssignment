

export const fetchdata=()=>{
    return async (dispatch)=>{
        dispatch({type:'FETCH_START'});

        try{
            let response= await fetch('https://jsonplaceholder.typicode.com/todos');
            const result= await response.json();
            dispatch({type:"FETCH_SUCCESS",payload:result})



        }catch(error){

            dispatch({type:"FETCH_ERROR",error:"Failed to fetch"});
        }
    }
}
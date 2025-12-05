
import  { createLogger } from 'redux-logger';

const logger=createLogger();
 const delayMiddleware=(store)=>(next)=>(action)=>{

    if(action.type==='INCREMENT_ASYNC'){
   next(action)
        setTimeout(()=>{
            store.dispatch({type:"INCREMENT"})
        },2000);

    }else{
        next(action)
    }
}
export {logger,delayMiddleware}
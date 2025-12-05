
import { configureStore } from "@reduxjs/toolkit";
import counteRducer from '../fetures/counterslice'
  import userReducer from '../users/userslice'
 import {createLogger} from 'redux-logger'
 const logger=createLogger()
export const store=configureStore({
    reducer:{
        counter:counteRducer,
        users:userReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
    
})


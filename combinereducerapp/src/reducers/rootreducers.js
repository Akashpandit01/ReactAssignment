
import {combineReducers} from 'redux'
import counterReducer from './counterreducer';
import authReducer from './authreducer';

const rootReducers=combineReducers({counter:counterReducer,
   auth: authReducer,
})

export default rootReducers;
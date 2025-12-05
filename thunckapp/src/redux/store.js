import{createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import dataResucer from './reducer';

const store=createStore(dataResucer,applyMiddleware(thunk));

export default store;

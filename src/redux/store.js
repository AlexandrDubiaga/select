import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../redux/AppReducer'
const rootReducer = combineReducers({
        app:AppReducer
  })

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
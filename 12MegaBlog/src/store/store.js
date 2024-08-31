//for reducers
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

//making the store
//store has one parameter,reducer
const store=configureStore({
    reducer:{
        auth : authSlice,
    }
})

export default store;
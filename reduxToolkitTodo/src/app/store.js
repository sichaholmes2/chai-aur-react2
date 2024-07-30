import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../fearures/todo/todoSlice'


//configure store takes an object insideit
export const store = confihureStore({
//key value
reducer:todoReducer



})
//for authentication

import { createSlice } from "@reduxjs/toolkit";

//to track id the suer is logged in or not

const initialState={
    //initially the user is not authenticated
    status:false,
    userData:null
}



const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state, action)=>{
            //when user is logged in 
            state.status=true;
            state.userData=action.payload.userData;

        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }

    }

})

export const {login, logout}=authSlice.actions

//exporting reducers from authSlice
export default authSlice.reducer
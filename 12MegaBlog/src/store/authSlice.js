import { createSlice } from "@reduxjs/toolkit";

//this is done to see if user is authenticated or not
//initialstate is user is not authenticated
const initialState={
//status is false as user is not authenticated
    status:false,
    userData: null

}

const authSlice= createSlice({
  name:"auth",
  initialState,
  reducers:{

    login:(state, action)=>{
        state.status=true;
        state.userData=action.user.payload.userData;



    },

    logout:(state)=>{
        state.status=false;
        state.userData=null;

    }

  }


})


export const {login, logout}= authSlice.actions

//exporting reducer from authSlice

export default authSlice.reducer
import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from "./appwrite/auth"

//importing login and logout from authSlice
import {login, logout} from "./store/authSlice"

import {Footer, Header} from './components'
import { Outlet } from 'react-router-dom';


function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL)

  const[loading, setLoading]=useState(true)
  const dispatch= useDispatch()


  useEffect(()=>{

    //using authService ->getCurrentUser 
    authService.getCurrentUser()
    .then((userData)=>{
 //if userdata is there we will dispatch
 if(userData){
 //import  login and logout from ./store/authSlice
  dispatch(login({userData}))
 }
 else{
  //if we didnt get thedata, user logs out
  //so state staus become false
     dispatch(logout())
 }


    })


    //finally is always executed
    //finally the loasing job is done
    .finally(()=> setLoading(false))


  },[])
 
 //if its not loading do something else like null
  return !loading?(
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'> 
    <div className='w-full block'>

      <Header/>
      <main>
        {/* for outlet we need react router dom we will install it later */}
        
        {/* {<Outlet/>} */}
      </main>
      <Footer/>

    </div>

    </div>
  ): (null)


}

export default App

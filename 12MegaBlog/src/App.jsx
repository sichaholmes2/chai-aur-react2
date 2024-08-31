import { useState, useEffect } from 'react'

import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  //making a loading state
  const [loading, setLoading]=useState(true)

//dispatch for combining redux with react
const dispatch= useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    //if user data is there then i will dispatch

      if(userData){
        dispatch(login({userData}))

      }else{
        dispatch(logout())


      }

  })
  //.finally is always run
  .finally(()=>setLoading(false))



},[])
  
  //console.log(import.meta.env.VITE_APPWRITE_URL)
 return !loading?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
     <Header/>
     <main>
     TODO:<Outlet/>
     </main>

     <Footer/>

    </div>
  </div>
   
 ):null
}

export default App

{/* { <Outlet/>} */}
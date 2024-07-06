import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  
  return (
    <UserContextProvider>
      //whatever component here can directly get access to data
      <h1>React with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

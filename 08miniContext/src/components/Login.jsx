import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    //having state for placeholder with username with default empty value
   const [username, setUsername]=useState('')
    //having state for placeholder with password with default empty value
    const [password, setPassword]=useState('')


    //this setUser data is coming from the wrap of UserContextprovider.jsx
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username' />



      <input type="text" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

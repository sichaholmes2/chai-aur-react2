import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
   // getting the data through user
    const {user}=useContext(UserContext)
    //if user is not present
  if(!user)return  <div>please login</div>

  return <div>Welcome{user.username}</div>
}

export default Profile

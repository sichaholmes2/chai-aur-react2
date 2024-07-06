import React from "react";
import UserContext from "./UserContext";

//children is the genereic name, just to pass what is coming
const UserContextProvider=({children})=>{
    //making a state for passig data

    const[user, setUser]=React.useState(null)
   return(
    //making a state for passig data
    
    //for wrapping, oly UserContext wont work, you have to use its property called UserContext.Provider
    <UserContext.Provider  value={{user, setUser}}>
    {children}
    
    
    </UserContext.Provider>
   )
}

export default UserContextProvider
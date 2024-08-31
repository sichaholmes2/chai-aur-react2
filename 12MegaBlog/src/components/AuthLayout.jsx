//we make protected containers container

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

//if its children will be rendered or not
export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
       //if user doesnt give anything in authenticatiom, it is true
      //authstatus->false(user not authenticated)
      //!==authentication=true, false!=true

        if(authentication && authStatus !== authentication){
            //going to login
            navigate("/login")
        } 
        
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
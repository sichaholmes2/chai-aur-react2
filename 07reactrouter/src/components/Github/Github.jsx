import React, { useEffect } from 'react'
import { useState } from 'react'


function Github() {
    const [data, setData]=useState([])
    useEffect(()=>{
       
        fetch('https://api.github.com/users/sichaholmes2')
        // converting the response from string to json
        .then(response=>response.json())
        //showing the data using console log
        //but the data needs to be rendered using useState
        .then(data=>{
            console.log(data);
            setData(data);
        })
    },[])


  return (
    <div className='text-center m-4 bg-gray-600' tect-white p-4 text-3xl>Github Followers: {data.followers}
    
    <img className='text-center' src={data.avatar_url}  alt="Git picture" width={300} />
    </div>



)
}

export default Github

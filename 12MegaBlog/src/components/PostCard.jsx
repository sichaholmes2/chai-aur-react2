import React from 'react'
//the information comes from service
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

//using id, appwrite, featuredImage
function PostCard({$id, title, featuredImage}) {
    
  return (
    //link to go to the id of the post
    <Link to={`/post/${$id}`}>
        {/* what to display inside link */}
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* getFilePreview to get the img url */}
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
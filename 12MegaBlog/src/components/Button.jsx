import React from 'react'
//parentsers they take is children i.e the text to be displayed inside button
function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    //spreading props
    ...props

}) {
  return (
    <div>
       <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
      
    </div>
  )
}

export default Button

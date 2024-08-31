import React,{useId} from 'react'

//properrties->options, label, className
function Select({options,
    label, 
    className,
     ...props
    },ref) {
        const id=useId()
  return (
    <div className='w-full'>
        //if label exists we diaplay label
        {label && <label htmlFor={id} className=''></label>}

        //select element
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
           {/* options gives array , looping through those arrays*/}
           {options?.map((option)=>(
            <option key={option} value={option}>
                {option}

            </option>
          ) )}


        </select>
      
    </div>
  )
}

export default React.forwardRef(Select)

import { useState, useCallback, useEffect , useRef} from 'react'



function App() {
  // 8 is the default length of the password generated
  const [length, setLength] = useState(8)


  //for number checkbox
  const [numberAllowed, setNumberAllowed]=useState(false)

  //for character checkbox
  const [charAllowed, setCharAllowed]= useState(false)


  const [password, setPassword] = useState('');


//useRef hook
//making a variable to useRef
// useRef gives the reference to variable passwordRef
//currently the default reference given will be null

const passwordRef= useRef(null)



  //for the already given password
  const passwordGenerator =useCallback(()=>{
    let pass=""

    // string will have the data using which i will make password
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    //if numerAllowe checkbox is clicked
    if(numberAllowed) str+="0123456789"


    //if charAllowed checkbox is clicked
    if(charAllowed) str+="!@#$%^&*"
     

    //setting for the length
    for (let i = 1; i <length; i++) {
      let char =Math.floor(Math.random()* str.length +1)

      pass+=str.charAt(char)
      
    }


 setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])


//making a function for copying the function to clipboard
//dependency will be password
const copyPasswordtoClipboard = useCallback(()=>{

  // for copying things tp clipboard indegeneous to react
 window.navigator.clipboard.writeText(password)

},
[password]
)












  //dependencies: change in lengthn length, numberAllowed, charAllowed, setPassword

 //using setPassword as a dependency is an optimization(memoization and keeping in cache)

  useEffect(()=>{

  passwordGenerator()

 },[length, numberAllowed, charAllowed, setPassword])

 
  return (
    <>
      

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700">
          <h1 className='text-white text-center my-3'>password generator</h1>
          {/* for input */}
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>

           <input type="text" 
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
            readOnly
            //getting the reference
            ref={passwordRef}


           />
            <button 
            onClick={copyPasswordtoClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

          </div>

       <div className='flex text-sm x-2'>
         <div className='flex items-center gap-x-1'>
          {/* taking input for length as a bar */}
         <input type="range" 
         min={6}
         max={100}
         value={length}
         className='cursor-pointer' 

        //  onchange event to change the length of the bar and the string
         onChange={(e) => {setLength(e.target.value)}}
          />
       <label >Length: {length}</label>


         </div>


         {/* input checkbox for numbers */}
         <div className="flex items-center gap-x-1"><input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label></div>
       </div>
         



     {/* input for numbers */}

         <div  className="flex items-center gap-x-1">

         <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
         </div>

      </div>

    </>
  )
}

export default App

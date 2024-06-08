import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //react hook useState
  //used to change the state of the variable, values wont be upddated. this change will be propagated through the ui, DOM
  //useState raturns an array. The first element return counter. The secone one return the function
  //let ecause the value of counter is updated throught
  // useState(<default value of the state>)
  let [counter, setCounter]=useState(15)
//setCounter is responsible for updating the variable 
//the variable counter will be updated throughout the webpage

  

  //we will not keep it as var as the value will be changed further
  // let counter=15;

   const addValue =()=>{
    console.log("clicked", counter)
    //  counter=counter+1;
    setCounter(counter+1);
    

   }


   const removeValue=()=>{
      setCounter(counter-1);
   }


  return (
    <>
      <h1>Chai aur react</h1>
        
        


      {/* injecting the above counter value here */}
      <h2>counter value: {counter}</h2>

      {/* on clicking button will execute the addvaluefunction */}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

   let myObj ={
    username: "hitesh",
    age:21
   }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>

 

    {/* just like App is closed earlier  */}
     <Card username="chaiaurcode" btnText="click me"/>

     {/* you can repeat the card component without any problem */}
     <Card username="siddhartha" btnText="visit me"/>






    </>
  )
}

export default App

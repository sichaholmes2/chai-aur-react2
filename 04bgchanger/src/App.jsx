import {useState } from "react"

function App() {
  // since colour will be used for changes in ui, we need to use usestate

  //default color=olive
   const [color, setColor]= useState("orange")

  return (
    <div className="w-full h-screen duration-200"

  //  {/* implementing useState with inline css */}
    style ={{backgroundColor: color}} >


  {/* to make the bar at the bottom */}
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >

        <div  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           {/* onclick is a function thet iself need a function to execute  */}
          <button onClick={()=>setColor("red")} className="otline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          
          <button onClick={()=>setColor("green")} className="otline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

          <button onClick={()=>setColor("blue")} className="otline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>


        </div>
        </div>
    </div>
  )
}

export default App

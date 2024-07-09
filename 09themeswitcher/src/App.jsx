
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode]=useState("light")
 const lightTheme=()=>{
   setThemeMode("light")
  //this changes the value of dark in tailwind to light
 }
 const darkTheme=()=>{
  setThemeMode("light")
 //this changes the value of light in tailwind to dark
}

//actual change in theme(has to be done through js) no role of react

useEffect(() => {
 // accessess document , then access html, then access classList, then remove light or dark or both
document.querySelector('html').classList.remove("light", "dark")
} , [themeMode])




  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>

  )
}

export default App

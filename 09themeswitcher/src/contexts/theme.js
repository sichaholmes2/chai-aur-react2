import {createContext, useContext} from "react"

//inside createContext the default value can be given
//int thsi case we will have an object with theme mode that has value light
export const ThemeContext=createContext({
    // we can have variable and methods as default
   themeMode:"light",
//    making two methods
   darkTheme: ()=>{},
   lightTheme:()=>{}

})

export const ThemeProvider =ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}
import {usezeffect, useState, useEffect} from "react"


function useCurrencyInfo(currency){
    //some data needs to be returned
    // i want to call an api
         // useState has an empty object so that in case api is not returnrd, it will not crash
    const [data, setData]=useState({}) 
    //useEffect can be used to fetch api 
    //.then for chaining
         useEffect(()=> {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      //res.json to conver the data into json format
      .then((res)=>res.json())

      //giving that response to use case for ui change
      .then((res)=>setData(res[currency]))
     }, [currency])
    // the valur returned bu seeffect nedd to nmake change in ui so we use useState


  console.log(data);
    return data
}


//exporting the custom hook
export default useCurrencyInfo;
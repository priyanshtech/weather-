import { createContext ,useState,useEffect} from "react";
export const hello=createContext()
export default function Properly({children}){
    const [city,setCity]=useState("")
      const [weather , setWeather]=useState({})
    
    
      async function handleSearch(){
        const url=`https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        const fetcher= await fetch(url)
        const response=await fetcher.json()
        if (!response.results){
          setWeather(null);
          return;
        }
        const i =response.results[0];
        const final= { naam:i.name,
          population:i.population,
          latitude:i.latitude,
          timezone:i.timezone}
    
        setWeather(final);}
    
    return(<hello.Provider value={{city,setCity,weather,setWeather,handleSearch}}>
        {children}

    </hello.Provider>)
}
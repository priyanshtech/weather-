import SearchBar from "./components/searchBar"
import WeatherCard from "./components/weatherCard"
import {useContext, useState} from "react"
import { hello } from "./context/context"


export default function App(){
  const {city,setCity,weather,setWeather,handleSearch}=useContext(hello)

  

  





  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-yellow-200 " >
    <SearchBar />
    <WeatherCard weather={weather} city={city} />
    </div>
    </>
  )
}
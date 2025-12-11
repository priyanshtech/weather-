import SearchBar from "./components/searchBar"
import WeatherCard from "./components/weatherCard"
import {useState} from "react"

export default function App(){

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


  





  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-yellow-200 " >
    <SearchBar city={city} setCity={setCity} onSearch={handleSearch}/>
    <WeatherCard weather={weather} city={city} />
    </div>
    </>
  )
}
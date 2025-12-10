import SearchBar from "./components/searchBar"
import WeatherCard from "./components/weatherCard"

export default function App(){
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-yellow-200 " >
    <SearchBar/>
    <WeatherCard/>
    </div>
    </>
  )
}
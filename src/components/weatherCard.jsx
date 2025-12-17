import { useContext } from "react";
import { hello } from "../context/context";

export default function WeatherCard(){
  const {city,weather} = useContext(hello)
    if (!weather) {
    return (
      <div className="flex justify-center mt-10 text-xl text-red-600">
        No city found. Try again.
      </div>
    );
  }




return (<div className="flex justify-center">
    <div className="mt-10 border-3 border-blue-900 h-fit w-fit px-3 py-3">
        <h1 className="text-3xl   flex justify-center font-bold mb-5 ">City Report</h1>
        <ul>
        <li className="text-xl">City name:    {weather.naam} </li>
        <li className="text-xl"> Timezone:  {weather?.timezone??"-"}</li>
        <li className="text-xl">Latitude:                 {weather?.latitude??"-"}</li>
        
        <li className="text-xl">Population: {weather?.population??"-"} </li>

        </ul>
    </div></div>
)
}
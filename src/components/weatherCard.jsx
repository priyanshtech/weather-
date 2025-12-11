export default function WeatherCard({city,weather}){
return (<div className="flex justify-center">
    <div className="mt-10 border-3 border-blue-900 h-fit w-fit px-3 py-3">
        <h1 className="text-3xl   flex justify-center font-bold mb-5 ">Weather Report</h1>
        <ul>
        <li className="text-xl">City name{city} </li>
        <li className="text-xl">Temperature {weather.naam}</li>
        <li className="text-xl">Weather condition {weather.latitude}</li>
        
        <li className="text-xl">Humidity{weather.timezone} </li>

        </ul>
    </div></div>
)
}
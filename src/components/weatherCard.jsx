export default function WeatherCard(){
return (<div className="flex justify-center">
    <div className="mt-10 border-3 border-blue-900 h-fit w-fit px-3 py-3">
        <h1 className="text-3xl   flex justify-center ">Weather Report</h1>
        <ul>
        <li className="text-xl">City name </li>
        <li className="text-xl">Temperature </li>
        <li className="text-xl">Weather condition </li>
        <li className="text-xl">Weather icon </li>
        <li className="text-xl">Humidity </li>

        </ul>
    </div></div>
)
}
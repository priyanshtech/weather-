import { useContext } from "react";
import { hello } from "../context/context";
export default function SearchBar (){
    const { city, setCity, handleSearch }=useContext(hello)
    return (
        <div className="text-black flex justify-center">
            <input placeholder="search anything" 

            onKeyDown={(e) => {
                if (e.key === "Enter") {
                handleSearch();
                }
            }}
            
            className="border-3 px-3 p-1 rounded-lg mt-3 border-blue-900"

            value={city}

            onChange={(e)=> setCity(e.target.value)}
            />
            <button 
            onClick={handleSearch}
            
            
            className="border-3 px-3 p-1 rounded-lg mt-3 border-blue-900 bg-blue-300  hover:bg-blue-700 transition-all duration-300 mx-3">Search</button>
        </div>
    )
}
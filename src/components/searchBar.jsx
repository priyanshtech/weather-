export default function SearchBar ({ city, setCity, onSearch }){
    return (
        <div className="text-black flex justify-center">
            <input placeholder="search anything" 

            onKeyDown={(e) => {
                if (e.key === "Enter") {
                onSearch();
                }
            }}
            
            className="border-3 px-3 p-1 rounded-lg mt-3 border-blue-900"

            value={city}

            onChange={(e)=> setCity(e.target.value)}
            />
            <button 
            onClick={onSearch}
            
            
            className="border-3 px-3 p-1 rounded-lg mt-3 border-blue-900 bg-blue-300  hover:bg-blue-700 transition-all duration-300 mx-3">Search</button>
        </div>
    )
}
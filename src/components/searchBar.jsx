export default function SearchBar (){
    return (
        <div className="text-black flex justify-center">
            <input placeholder="search anything" className="border-3 px-3 p-1 rounded-lg mt-3 border-blue-900"
            onChange={(e)=> city==e.target.value}/>
            <button className="border-3 px-3 p-1 rounded-lg mt-3 border-blue-900 bg-blue-300 hover:bg-blue-400 transition-all duration-300 mx-3">Search</button>
        </div>
    )
}
import { useRef, useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchhandler = () => {
        console.log('Search Handler', searchTerm);
    }
    return (
        <form className="recipe-search-bar" onSubmit={(e)=> {e.preventDefault();}}>
            <input type="text" className="w-200 h-15 m-5 p-2 border-solid border-black shadow-md rounded-md" placeholder="Search a recipe" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <button type="Submit" className="w-30 h-15 bg-[#FF2C2C] text-white hover:bg-[#F43378] border-[#FF2C2C] border-white rounded-md border-solid border-2" onClick={searchhandler}> Search </button>

        </form>
    );
}

export default SearchBar;
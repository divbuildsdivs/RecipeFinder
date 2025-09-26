import { useRef, useState } from "react";

const SearchBar = ({recipeList, setFilteredList}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchhandler = () => {
        const filteredList = recipeList.filter((item) => {
            return item.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) || item.strCategory.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredList(filteredList);
    }
    return (
        <form className="recipe-search-bar" onSubmit={(e)=> {e.preventDefault();}}>
            <input type="text" className="w-80 lg:w-200 h-15 m-5 p-2 border-solid border-black shadow-md rounded-md" placeholder="Search a recipe" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <button type="Submit" className="w-30 h-15 bg-[#FF2C2C] text-white hover:bg-[#F43378] border-[#FF2C2C] border-white rounded-md border-solid border-2" onClick={searchhandler}> Search </button>

        </form>
    );
}

export default SearchBar;
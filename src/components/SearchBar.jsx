import { useState } from "react";

const SearchBar = ({setSearchDone, searchTerm, setSearchTerm}) => {
    const [inputValue, setInputValue] = useState("");
    

    const searchhandler = () => {
        // const filteredList = recipeList.filter((item) => {
        //     return item.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) || item.strCategory.toLowerCase().includes(searchTerm.toLowerCase());
        // });
        //setFilteredList(filteredList);
        if(inputValue.trim() !== searchTerm.trim() ){
            setSearchDone(false);
            setSearchTerm(inputValue.trim());
        }
       
    }
    const recommendedRecipesHandler = () => {
        if(searchTerm.trim() !== "") {
            setSearchDone(false);
            setSearchTerm("");
        }
    }
    return (
        <form className="recipe-search-bar" onSubmit={(e)=> {e.preventDefault();
        searchhandler();}}>
            <input type="text" className="w-80 lg:w-200 h-15 m-5 p-2 border-solid border-black shadow-md rounded-md" placeholder="Search a recipe" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
            </input>
            <button type="submit" className="px-7 py-4 ml-2 bg-[#FF2C2C] text-white hover:bg-[#F43378] border-[#FF2C2C] border-white rounded-md border-solid border-2 cursor-pointer" > Search </button>
            <button type="button" className="px-7 py-4 ml-2 bg-[#FF2C2C] text-white hover:bg-[#F43378] border-[#FF2C2C] border-white rounded-md border-solid border-2 cursor-pointer" onClick={recommendedRecipesHandler}> Recommended Recipes </button>
        </form>
    );
}

export default SearchBar;
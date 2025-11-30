import { useEffect, useState } from "react";

const SearchBar = ({setSearchDone, searchTerm, setSearchTerm}) => {
    const [inputValue, setInputValue] = useState("");
    
    

    useEffect(()=>{
        console.log(inputValue);
        setSearchTerm(inputValue.trim());
    }, [inputValue]);

    const recommendedRecipesHandler = () => {
        if(searchTerm.trim() !== "") {
            setSearchDone(false);
            setSearchTerm("");
        }
    }
    return (
        <form className="recipe-search-bar flex flex-col justify-center items-center" >
            <input type="text" className="w-[80%] h-15 m-5 p-2 border-solid border-black shadow-md rounded-md" placeholder="Search a recipe" value={inputValue} onChange={(e) =>setInputValue(e.target.value)}>
            </input>
            <button type="button" className="px-7 py-4 ml-2 bg-[#FF2C2C] text-white hover:bg-[#F43378] border-[#FF2C2C] border-white rounded-md border-solid border-2 cursor-pointer" onClick={recommendedRecipesHandler}> Recommended Recipes </button>
        </form>
    );
}

export default SearchBar;
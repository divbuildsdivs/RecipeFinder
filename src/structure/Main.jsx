import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import {recipeApiUrl} from '../data/recipeData.js'
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
const Main = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    useEffect(()=>{
        fetch(recipeApiUrl)
            .then((res)=> res.json())
            .then((data) => {
                setRecipeList(data.stories);
                setFilteredList(data.stories);
            })
            .catch(error => {
                console.error('Errror Fetching Data', error);
            });
    }, []);
    return (
        <div id="main" className="main">
            <SearchBar recipeList={recipeList} setFilteredList={setFilteredList}/>
            <RecipeCatalogue filteredList={filteredList}/>
        </div>
    );
};

export default Main; 
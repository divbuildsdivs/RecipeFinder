import { useEffect, useState } from "react";
import {recipeApiUrl} from '../data/recipeData.js'
import RecipeCard from "./RecipeCard.jsx";

const RecipeCatalogue = () => {
    const [recipeList, setRecipeList] = useState([]);
    useEffect(()=>{
        fetch(recipeApiUrl)
            .then((res)=> res.json())
            .then((data) => {
                setRecipeList(data.stories);
            })
            .catch(error => {
                console.error('Errror Fetching Data', error);
            });
    }, []);

    console.log(recipeList);
    return (
        <div id="recipe-catalogue" className="recipe-list__container">
            <h1>Recipe List</h1>
            <ul className="flex flex-row gap-10 flex-wrap m-4 justify-center">
                {recipeList.map((recipe)=> {
                    return(
                        <li key = {recipe.id} >
                            <RecipeCard recipe = {recipe}/>
                        </li>
                    );
                    
                })}
            </ul>
        </div>
    );
};

export default RecipeCatalogue; 
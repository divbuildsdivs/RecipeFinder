import { useEffect, useState } from "react";
import {recipeApiUrl} from '../data/recipeData.js'

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
            <ul>
                {recipeList.map((recipe)=> {
                    return(
                        <li>
                            <h2>{recipe.name}</h2>
                        </li>
                    );
                    
                })}
            </ul>
        </div>
    );
};

export default RecipeCatalogue; 
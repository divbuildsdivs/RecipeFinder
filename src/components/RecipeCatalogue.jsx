import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.jsx";

const RecipeCatalogue = (props) => {
    
    return (
        <div id="recipe-catalogue" className="recipe-list__container">
            <h1>{props.title}</h1>
            <ul className="flex flex-row gap-10 flex-wrap m-4 justify-center">
                {props.filteredList.map((recipe)=> {
                    return(
                        <li key = {recipe.idMeal} >
                            <RecipeCard recipe = {recipe}/>
                        </li>
                    );
                    
                })}
            </ul>
        </div>
    );
};

export default RecipeCatalogue; 
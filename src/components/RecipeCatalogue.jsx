import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.jsx";

const RecipeCatalogue = (props) => {
    if(props.recipeList?.length > 0) {
        return (
            <div id="recipe-catalogue" className="recipe-list__container">
                <h1 className="m-8">{props.title}</h1>
                <ul className="flex flex-row gap-10 flex-wrap m-4 justify-center">
                    {props.recipeList.map((recipe)=> {
                        return(
                            <li key = {recipe.idMeal} >
                                <RecipeCard recipe = {recipe}/>
                            </li>
                        );
                        
                    })}
                </ul>
            </div>
        );
    }
    else {
        return(
        <div id="recipe-catalogue" className="recipe-list__container">
            <h1 className="m-4">Oops!</h1>
            <br></br>
            <h2>We don't have any related recipes</h2>
        </div>);
        
    }
    
};

export default RecipeCatalogue; 
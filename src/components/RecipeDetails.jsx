import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { mealDBSearchApi } from "../data/recipeData";

const RecipeDetails = () => {
   const [recipeDetailsData, setRecipeDetailsData] = useState("");
    const [queryParams, setQueryParams] = useSearchParams();
    const searchApiURL = mealDBSearchApi + queryParams.get("id").toString();
    useEffect(()=> {
        fetch(searchApiURL)
            .then(res=> res.json())
            .then(data => setRecipeDetailsData(data?.meals?.[0]));
    }, [queryParams]);
  
    return( <>
        <h1> {recipeDetailsData.strMeal} </h1>
        
        <img className="h-100 w-100"  src={recipeDetailsData.strMealThumb}></img>
        <p> {recipeDetailsData.strInstructions}</p>
</>);
   
}

export default RecipeDetails;
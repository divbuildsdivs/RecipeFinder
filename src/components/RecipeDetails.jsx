import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { mealDBSearchApi } from "../utils/constants.js";
import FavouriteRecipesContext from "../utils/FavouriteRecipesContext";

const RecipeDetails = () => {
  const {favouriteRecipes, setFavouriteRecipes} = useContext(FavouriteRecipesContext);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [queryParams] = useSearchParams();

  const recipeId = queryParams.get("id");
  const searchApiURL = mealDBSearchApi + recipeId;

  useEffect(() => {
    if (!recipeId) return; // avoid unnecessary fetch
    fetch(searchApiURL)
      .then((res) => res.json())
      .then((data) => setRecipeDetailsData(data?.meals?.[0]))
      .catch((err) => console.error("Error fetching recipe details:", err));
  }, [recipeId]);

  if (!recipeDetailsData) return <p>Loading...</p>;

  // ✅ Process instructions outside JSX
  const instructions = recipeDetailsData.strInstructions
    ? recipeDetailsData.strInstructions.split(".").filter((i) => i.trim() !== "")
    : [];

  const handleFavouriteClick = () => {
    let favRecipes = [...favouriteRecipes, recipeDetailsData];
    setFavouriteRecipes(favRecipes);
  }

  return (
    <div className="recipe-details">
      <div className="title m-4 p-4 mx-auto">
        <h1>{recipeDetailsData.strMeal}</h1>
      </div>

      <div className="recipe-description flex m-10 p-4 border-solid border-[2px] border-[#FF2C2C] rounded-md ">
        <img
          className="h-100 w-100"
          src={recipeDetailsData.strMealThumb}
          alt={recipeDetailsData.strMeal}
        />

        <div className="recipe-description__text">
          {instructions.map((item, index) => (
            <p key={index} className="text-start mx-8 my-2">
              <strong>{index + 1}.</strong> {item.trim()}
            </p>
          ))}
        </div>
      </div>
      <button type="Submit" className="cursor-pointer px-5 py-4 mx-8 bg-[#FF2C2C] text-white hover:bg-[#F43378] border-[#FF2C2C] border-white rounded-md border-solid border-2" onClick={handleFavouriteClick}> Add To Favourites </button>
    </div>
  );
};

export default RecipeDetails;

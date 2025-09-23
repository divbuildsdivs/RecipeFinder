import { Link } from "react-router";
const RecipeCard = ({key, recipe}) => {
   const recipeName = recipe.strMeal.toLowerCase()
                  .trim()
                  .replace(/&/g, 'and')         // replace &
                  .replace(/[\s\W-]+/g, '-')    // replace spaces and non-word chars with -
                  .replace(/^-+|-+$/g, '');     // trim - from start/end
   return(
   <Link to="/recipe-details">
    <div className="recipe-card p-[3px] border-solid border-[2px] border-[#FF2C2C] rounded-md flex flex-col align-center justify-center">
      <img src={recipe.strMealThumb} alt={recipeName} className="rounded-md h-70 m-4" />
      <h2 className="recipe-title w-50 mx-auto h-15">
         {recipe.strMeal}
      </h2>

    </div>
   </Link>
   ) ;
}

export default RecipeCard;
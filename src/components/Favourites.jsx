import { useContext } from "react";
import FavouriteRecipesContext from "../utils/FavouriteRecipesContext";
import RecipeCatalogue from "./RecipeCatalogue";
const Favourites =() => {

    const {favouriteRecipes, setFavouriteRecipes} = useContext(FavouriteRecipesContext);

     return (
        <>
         <RecipeCatalogue title ="Favourite Recipes!" filteredList ={favouriteRecipes}/>
        </>
     );
}

export default Favourites;
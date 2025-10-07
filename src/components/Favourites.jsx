import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Favourites =() => {

    const {favouriteRecipes, setFavouriteRecipes} = useContext(UserContext);

     return (
        <>
        <h1>{favouriteRecipes}</h1>
        </>
     );
}

export default Favourites;
import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import {mealDBSearchByName, recipeApiUrl} from '../data/recipeData.js'
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import SkeletonCatalogue from '../components/SkeletonCatalogue.jsx';
import { useOutletContext } from 'react-router';
import { use } from 'react';
const Main = () => {
    const { refreshKey } = useOutletContext(); 
    const [recipeList, setRecipeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchDone, setSearchDone ] = useState(false);
    // const [filteredList, setFilteredList] = useState([]);
    useEffect(()=>{
       // fetch(recipeApiUrl + "erroririfyingAPI"
        fetch(mealDBSearchByName + searchTerm)
            .then((res)=> {
                if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
              })
            .then((data) => {
                if(data?.meals?.length > 0) {
                    setRecipeList(data.meals);
                }
                else {
                    setRecipeList([]);
                }
                
                setSearchDone(true);
            })
            .catch(error => {
                
                console.error('Errror Fetching Data', error);
                setRecipeList(null);
            });
    }, [searchTerm]);

    useEffect(() => {
        setSearchTerm("");
    },[refreshKey])

    if( searchDone) {
        return (
            <div id="main" className="main">
                <SearchBar setSearchDone = {setSearchDone} searchTerm = {searchTerm} setSearchTerm={setSearchTerm}/>
                <RecipeCatalogue title ="Recommended Recipes" recipeList={recipeList}/>
            </div>
        );
    } else {
        return (
            <div id="main" className="main">
                <SkeletonCatalogue/>
            </div>
        );
    }
   
};

export default Main; 
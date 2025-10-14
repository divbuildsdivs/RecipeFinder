import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import { useDispatch, useSelector } from 'react-redux';
import {mealDBSearchByArea, mealDBSearchByCategory, mealDBSearchByName } from '../utils/constants.js'
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import SkeletonCatalogue from '../components/SkeletonCatalogue.jsx';
import { useOutletContext } from 'react-router';
import { addRecipe } from '../store/savedSearchesSlice.js';

const SearchComponent = () => {
    const { refreshKey } = useOutletContext(); 
    const [recipeList, setRecipeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchDone, setSearchDone ] = useState(false);
    // const [filteredList, setFilteredList] = useState([]);
    const dispatch = useDispatch();
    const recentSearches = useSelector((store) => store.savedSearches.searchTerms);
    
    useEffect(()=>{
       // fetch(recipeApiUrl + "erroririfyingAPI"
        
        setRecipeList([]);
        if(searchTerm in recentSearches || searchTerm === "") {
            console.log(recentSearches);
        }
        else {
            dispatch(addRecipe(searchTerm));
            console.log(recentSearches);
        }
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
                    setSearchDone(true);
                }
            }).then(() => {
                fetch(mealDBSearchByCategory + searchTerm)
                .then((res)=> {
                    if (!res.ok) {
                      throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                  })
                .then((data) => {
                    if(data?.meals?.length > 0) {
                        setRecipeList(prev => [...new Set([...prev, ...data.meals])]);
                        setSearchDone(true);
                    }
                    
                })
            }).then(() => {
                fetch(mealDBSearchByArea + searchTerm)
                .then((res)=> {
                    if (!res.ok) {
                      throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                  })
                .then((data) => {
                    if(data?.meals?.length > 0) {
                        setRecipeList(prev =>  [...new Set([...prev, ...data.meals])]);
                    }
                    setSearchDone(true);
                    
                })
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
                <RecipeCatalogue title ="Recipes" recipeList={recipeList}/>
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

export default SearchComponent; 
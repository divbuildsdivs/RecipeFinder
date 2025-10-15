import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import { useDispatch, useSelector } from 'react-redux';
import {mealDBSearchByArea, mealDBSearchByCategory, mealDBSearchByName } from '../utils/constants.js'
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import SkeletonCatalogue from '../components/SkeletonCatalogue.jsx';
import { useOutletContext } from 'react-router';
import { saveSearchTerms, saveSearchResults } from '../store/savedSearchesSlice.js';

const SearchComponent = () => {
    const { refreshKey } = useOutletContext(); 
    const [recipeList, setRecipeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchDone, setSearchDone ] = useState(false);
    
    const dispatch = useDispatch();
    const resultsFromStore = useSelector((store) => {
        return store.savedSearches.searchResults;
    })

    useEffect(()=>{
        setRecipeList([]);
        if(Object.keys(resultsFromStore).includes(searchTerm) ) {
            setRecipeList(resultsFromStore[searchTerm]);
            setSearchDone(true);
        }
        else {
            console.log('API calling');
            let resultsFromAPI = [];
            fetch(mealDBSearchByName + searchTerm)
            .then((res)=> {
                if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
              })
            .then((data) => {
                if(data?.meals?.length > 0) {
                    resultsFromAPI= [...data.meals];
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
                        resultsFromAPI= [...resultsFromAPI, ...data.meals];
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
                        resultsFromAPI= [...resultsFromAPI, ...data.meals];
                        setRecipeList(prev =>  [...new Set([...prev, ...data.meals])]);

                    }
                    console.log('saving', {key: searchTerm, results: resultsFromAPI } )
                    dispatch(saveSearchResults({key: searchTerm, results: resultsFromAPI}));
                    setSearchDone(true);
                })
            })
            .catch(error => {
                
                console.error('Errror Fetching Data', error);
                setRecipeList(null);
            });
        }
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
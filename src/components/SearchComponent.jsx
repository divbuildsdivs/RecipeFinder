import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import { useDispatch, useSelector } from 'react-redux';
import {mealDBSearchByArea, mealDBSearchByCategory, mealDBSearchByName } from '../utils/constants.js'
import SearchBar from '../components/SearchBar';
import { useContext, useEffect, useState } from 'react';
import SkeletonCatalogue from '../components/SkeletonCatalogue.jsx';
import { useOutletContext } from 'react-router';
import { saveSearchTerms, saveSearchResults } from '../store/savedSearchesSlice.js';
import SearchTermContext from '../utils/SearchTermContext.jsx'

const SearchComponent = () => {
    const { refreshKey } = useOutletContext(); 
    const [recipeList, setRecipeList] = useState([]);
   const {searchTerm, setSearchTerm} = useContext(SearchTermContext);
    const [searchDone, setSearchDone ] = useState(false);
    
    const dispatch = useDispatch();
    const resultsFromStore = useSelector((store) => {
        return store.savedSearches.searchResults;
    })

    useEffect(()=>{
        setSearchDone(false);
        setRecipeList([]);
        if(Object.keys(resultsFromStore).includes(searchTerm) ) {
            console.log('if block');
            setRecipeList(resultsFromStore[searchTerm]);
            setSearchDone(true);
        }
        else {
            console.log('API calling');
            let resultsFromAPI = [];
            fetch(mealDBSearchByName + searchTerm)
            .then((res)=> {
                if (!res.ok) {
                    console.log('Error');
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
                        console.log('Error');
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
                      console.log('Error');
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
            <RecipeCatalogue title ="Recipes" recipeList={recipeList}/>
        );
    } else {
        return (<SkeletonCatalogue/>);
    }
   
};

export default SearchComponent; 
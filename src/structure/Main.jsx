import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import {recipeApiUrl} from '../data/recipeData.js'
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import SkeletonCatalogue from '../components/SkeletonCatalogue.jsx';
const Main = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    useEffect(()=>{
       // fetch(recipeApiUrl + "erroririfyingAPI")
        fetch(recipeApiUrl)
            .then((res)=> {
                if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
              })
            .then((data) => {
                setRecipeList(data);
                setFilteredList(data);
            })
            .catch(error => {
                
                console.error('Errror Fetching Data', error);
                setRecipeList(null);
            });
    }, []);
    if(recipeList === null) {
        return (<div> <h1> Something Went Wrong </h1></div>)
    }

   else if(recipeList.length !== 0) {
        return (
            <div id="main" className="main">
                <SearchBar recipeList={recipeList} setFilteredList={setFilteredList}/>
                <RecipeCatalogue title ="Recipes!" filteredList={filteredList}/>
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
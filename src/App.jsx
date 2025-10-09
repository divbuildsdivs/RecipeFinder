import { useEffect, useState } from 'react'
import Header from './structure/Header'
import Main from './structure/Main'
import Footer from './structure/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import './App.css'
import AboutUs from './components/AboutUs'
import RecipeDetails from './components/RecipeDetails'
import Error from './components/Error'
import FavouriteRecipesContext from './utils/FavouriteRecipesContext'
import Favourites from './components/Favourites'
// import {Provider} from "react-redux";
// import appStore from './utils/appStore'

function AppLayout() {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <>
      <FavouriteRecipesContext.Provider value = {{favouriteRecipes, setFavouriteRecipes}}>
        <Header setRefreshKey ={setRefreshKey}/>
        <Outlet context={{ refreshKey }}/>
        <Footer/>
      </FavouriteRecipesContext.Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element:<Main/>,
        errorElement: <Error/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path:"/recipe-details",
        element: <RecipeDetails/>
      },
      {
        path:"/favourites",
        element: <Favourites/>
      }
    ]
},

{

}
])

const App = () => {
  return (
    <RouterProvider router = {appRouter}></RouterProvider>
  )
}


export default App

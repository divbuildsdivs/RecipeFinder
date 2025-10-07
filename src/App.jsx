import { useEffect, useState } from 'react'
import Header from './structure/Header'
import Main from './structure/Main'
import Footer from './structure/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import './App.css'
import AboutUs from './components/AboutUs'
import RecipeDetails from './components/RecipeDetails'
import Error from './components/Error'
import UserContext from './utils/UserContext'
import Favourites from './components/Favourites'

function AppLayout() {
  const [favouriteRecipes, setFavouriteRecipes] = useState(["52934"]);
  
  

  return (
    <>
      <UserContext.Provider value = {{favouriteRecipes, setFavouriteRecipes}}>
        <Header/>
        <Outlet/>
        <Footer/>
      </UserContext.Provider>
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

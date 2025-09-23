import { useState } from 'react'
import Header from './structure/Header'
import Main from './structure/Main'
import Footer from './structure/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import './App.css'
import AboutUs from './components/AboutUs'
import RecipeDetails from './components/RecipeDetails'

function AppLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
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
        element:<Main/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path:"/recipe-details",
        element: <RecipeDetails/>
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

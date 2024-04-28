import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {Navbar} from './components';
import {Contact} from './container';
import FirstPage from "../src/Pages/FirstPage/FirstPage.jsx"
import Login from "../src/Pages/Login/Login.jsx"
import Register from "../src/Pages/Register/Register.jsx"
import HomePage from "./Main/HomePage.jsx"
import OSI from  "./Pages/OSI/OSI.jsx"
import IdeaOneFirst from  "./Pages/PhyLayer/idOne/idOneFirst.jsx"
import './App.css';
const Layout = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Contact />
        </>
    );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <FirstPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    // to modify to physicalLayer/chapterOne
    path: "/chapterOne",
    element: <OSI />,
  },
  {
    path: "/chapterTwo/first",
    element: <IdeaOneFirst />,
  },
]);
const App = () => {
  return (
    
     
      <>
    <div className="app">
        <div className="container">
       <RouterProvider router={router}/>
        </div>

    </div>
    </>
   
  )
}

export default App

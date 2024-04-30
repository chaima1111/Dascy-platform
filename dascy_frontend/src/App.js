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
import Layers from "./Pages/OSI/Layers.jsx"
import IdeaOneFirst from  "./Pages/PhyLayer/idOne/idOneFirst.jsx"
import IdeaTwoFirst from  "./Pages/PhyLayer/idTwo/IdTwo.jsx"
import IdeaThreeFirst from  "./Pages/PhyLayer/idThree/IdThree"
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
  //path to register page

  {
    path: "/register",
    element: <Register />,
  },
  //path to login page
  {
    path: "/login",
    element: <Login />,
  },
  {
    // Starting page of Networking course
    path: "/start",
    element: <FirstPage />,
  },
  {
    // to modify to physicalLayer/chapterOne
    path: "/chapterOne",
    element: <OSI />,
  },
  {
    // to modify to physicalLayer/chapterOne
    path: "/chapterOne/layers",
    element: <Layers />,
  },
  {
    path: "/chapterTwo/first",
    element: <IdeaOneFirst />,
  },
  {
    path: "/chapterTwo/second",
    element: <IdeaTwoFirst />,
  },
  {
    path: "/chapterTwo/three",
    element: <IdeaThreeFirst />,
  }
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

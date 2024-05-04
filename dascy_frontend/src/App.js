import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {Navbar} from './components';
import {NavbarCourse} from './components';
import {Contact} from './container';
import FirstPage from "../src/Pages/FirstPage/FirstPage.jsx"
import Login from "../src/Pages/Login/Login.jsx"
import Register from "../src/Pages/Register/Register.jsx"
import HomePage from "./Main/HomePage.jsx"
import OSI from  "./Pages/OSI/OSI.jsx"
import HardWare from "./Pages/OSI/HardWare.jsx"
import IdeaOneFirst from  "./Pages/PhyLayer/idOne/idOneFirst.jsx"
import IdeaTwoFirst from  "./Pages/PhyLayer/idTwo/IdTwo.jsx"
import IdeaThreeFirst from  "./Pages/PhyLayer/idThree/IdThree"
import './App.css';
import Hangman from './Pages/OSI/practice/Hangman.jsx';
import Quizzes from './Pages/OSI/practice/Quizzes.jsx';
import FirstChapter from "./Pages/OSI/FirstChapter.jsx";
import AccountDashboard from "./Main/AccountDashboard.jsx";

const Layout = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Contact />
        </>
    );
}
const Layout2 = () =>{
    return(
        <>
        <NavbarCourse/>
        <Outlet/>
        
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
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "/courseOne",
        element: <FirstChapter />,
      },
      {
        path: "/chapter",
        element: <OSI />,
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
    path: "/startNetworking",
    element: <FirstPage />,
  },
  {
    // to modify to physicalLayer/chapterOne
    path: "/chapterOne/layers",
    element: <HardWare />,
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
  },
  {
    path: "/hangman",
    element: <Hangman />,
  },
  {
    path: "/quizz",
    element: <Quizzes />,
  },
  {
    path: "/test",
    element: <FirstChapter />,
  },
  {
    path: "/dashboard",
    element: <AccountDashboard />,
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

import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {Navbar} from './components';
import {NavbarCourse} from './components';
import {Contact} from './container';
import { Article } from "./components";

import FirstPage from "../src/Pages/FirstPage/FirstPage.jsx"
import Login from "../src/Pages/Login/Login.jsx"
import Register from "../src/Pages/Register/Register.jsx"
import HomePage from "./Main/HomePage.jsx"
import OSI from  "./Pages/OSI/OSI.jsx"
import Topo from  "./Pages/OSI/Topology/Topo"
import HardWare from "./Pages/OSI/HardWare.jsx"
import IdeaOneFirst from  "./Pages/PhyLayer/idOne/idOneFirst.jsx"
import IdeaTwoFirst from  "./Pages/PhyLayer/idTwo/IdTwo.jsx"
import IdeaThreeFirst from  "./Pages/PhyLayer/idThree/IdThree"
import './App.css';
import Hangman from './Pages/OSI/practice/Hangman.jsx';
import Quizzes from './Pages/OSI/practice/Quizzes.jsx';
import IntroQ from "./Pages/Introduction/IntroQ.jsx"
import FirstChapter from "./Pages/OSI/FirstChapter.jsx";
import Introdu from "./Pages/Introduction/Intro.jsx"
import NetContents from "./Pages/NetContents/NetContents.jsx";
import AccountDashboard from "./Main/AccountDashboard.jsx";
import AllcourseDash from "./Main/AllcourseDash.jsx";

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
const Layout3 = () =>{
    return (
      <>
        <NavbarCourse />
        <Outlet />
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
        path: "/logout",
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
    element: <Layout3 />,
    children: [
      {
        path: "/contents",
        element: <NetContents />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout2 />,
    children: [
      // path of the content of networking course

      {
        path: "/intro",
        element: <Introdu />,
      },
      {
        path: "/courseOne",
        element: <FirstChapter />,
      },
      {
        path: "/contents/osi",
        element: <OSI />,
      },
      {
        path: "/topo",
        element: <Topo />,
      },
      {
        path: "/contents/osi",
        element: <OSI />,
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
        path: "/chapterTwo/laws",
        element: <IdeaThreeFirst />,
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
    path: "/hangman",
    element: <Hangman />,
  },
  {
    path: "/quizz",
    element: <Quizzes />,
  },
  {
    path: "/introQuizz",
    element: <IntroQ />,
  },
  {
    path: "/dashboard",
    element: <AccountDashboard />,
  },
  {
    path: "/allcourses",
    element: <AllcourseDash />,
  },
  {
    path: "/article",
    element: <Article />,
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

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
import Taille from  "./Pages/OSI/Taille/taille.jsx"
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
import Ethernet from "./Pages/DataLink/etherent/Ethernet.jsx"
import DataLinkLay from "./Pages/DataLink/SecondLay/DataLinkLay.jsx"
import ErrorDet from './Pages/DataLink/errorDet/ErrorDet.jsx';
// quizzes
import AddressClasses from './Pages/Quizzes/AddressClasses.jsx';
import Analog from './Pages/Quizzes/Analog.jsx';
import DataEhernet from './Pages/Quizzes/DataEhernet.jsx';
import LawsPhy from './Pages/Quizzes/LawsPhy.jsx';
import Numeriqu from "./Pages/Quizzes/Numeriq.jsx"
import NetwRoute from './Pages/Quizzes/NetwRoute.jsx';
import ErrorDetQuizz from './Pages/Quizzes/ErrorDetQuizz.jsx';

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
        path: "/firstChapter/topo",
        element: <Topo />,
      },
      {
        path: "/firstChapter/Taille",
        element: <Taille />,
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
      // Second Layer
      {
        path: "/contents/DataLink",
        element: < Ethernet />,
      },
      {
        path: "/contents/DataLink/ethernet",
        element: <DataLinkLay />,
      },
      {
        path: "/contents/DataLink/errorDetecte",
        element: <ErrorDet />,
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
    path: "/introQuizz",
    element: <IntroQ />,
  },
  {
    path: "/ipQuizz",
    element: <AddressClasses />,
  },
  {
    path: "/AnalogQuizz",
    element: <Analog />,
  },
  {
    path: "/dllQuizz",
    element: <DataEhernet />,
  },
  {
    path: "/ErrQuizz",
    element: <ErrorDetQuizz />,
  },
  {
    path: "/lawsQuizz",
    element: <LawsPhy />,
  },
  {
    path: "/numerQuizz",
    element: <Numeriqu />,
  },
  {
    path: "/netwQuizz",
    element: <NetwRoute />,
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

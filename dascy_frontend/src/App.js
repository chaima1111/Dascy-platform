import React from 'react'
import {Navbar} from './components';
import {About,Contact,Courses,Features,Footer,Header,Search} from './container';

import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Courses/>
      <Search/>
    </div>
  )
}

export default App

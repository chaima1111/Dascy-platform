import React from 'react'
import {Navbar} from './components';
import {Courses,Header, About, Search,Contact} from './container';

import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Courses/>
      <Search/>
      <Contact/>
    </div>
  )
}

export default App

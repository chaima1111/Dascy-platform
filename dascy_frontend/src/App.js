import React from 'react'
import {Navbar} from './components';
import {Courses,Header, About, Search,Feedbacks} from './container';

import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Courses/>
      <Search/>
      <Feedbacks/>
    </div>
  )
}

export default App

import React from 'react'
import {Navbar} from './components';
import {Courses,Header,About,Feedbacks} from './container';

import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Courses/>
      
      <Feedbacks/>
    </div>
  )
}

export default App

import React from 'react'
import {Navbar} from './components';
import {Courses,Header} from './container';

import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
    </div>
  )
}

export default App

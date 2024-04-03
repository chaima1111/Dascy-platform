import React from 'react'
import {Navbar} from './components';
import {About,Contact,Courses,Features,Footer,Header} from './container';

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

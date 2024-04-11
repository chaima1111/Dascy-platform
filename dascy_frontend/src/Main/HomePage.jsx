import React from 'react'
import {Courses,Header, About, Search,Feedbacks} from '../container';

const HomePage = () => {
  return (
    <div>
        
      <Header />
      <About/>
      <Courses/>
      <Search/>
      <Feedbacks/>
    </div>
  )
}

export default HomePage

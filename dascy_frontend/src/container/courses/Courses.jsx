import React from 'react'

import contP from "../../assets/next.png"
import contB from "../../assets/nextB.png"
import iCourse from"../../assets/Course/pic1.png"
import { Feature } from "../../components"

import './courses.css'
const Courses = () => {
    
  return (
    <div className='dascy__courses section__padding' id="courses">
      <div className="dascy__courses-heading">
        <h1>
          Our best courses
        </h1>
        </div>
        <div className="dascy__courses-container">  
          <Feature imgCourse={iCourse} title="Artificial Intelligence" desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..." cont={contP}/>
          <Feature imgCourse={iCourse} title="Operating System" desc="Learn the basic operating system abstractions, mechanisms and their implementation..." cont={contB}/>
          <Feature imgCourse={iCourse} title="Artificial Intelligence" desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..." cont={contP}/>
          <Feature imgCourse={iCourse} title="Operating System" desc="Learn the basic operating system abstractions, mechanisms and their implementation..." cont={contB}/>
          <Feature imgCourse={iCourse} title="Artificial Intelligence" desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..." cont={contP}/>
          <Feature imgCourse={iCourse} title="Operating System" desc="Learn the basic operating system abstractions, mechanisms and their implementation..." cont={contB}/>
          <Feature imgCourse={iCourse} title="Artificial Intelligence" desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..." cont={contP}/>
          <Feature imgCourse={iCourse} title="Operating System" desc="Learn the basic operating system abstractions, mechanisms and their implementation..." cont={contB}/>
          <Feature imgCourse={iCourse} title="Artificial Intelligence" desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..." cont={contP}/>
          <Feature imgCourse={iCourse} title="Operating System" desc="Learn the basic operating system abstractions, mechanisms and their implementation..." cont={contB}/>
          <Feature imgCourse={iCourse} title="Artificial Intelligence" desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..." cont={contP}/>
          <Feature imgCourse={iCourse} title="Operating System" desc="Learn the basic operating system abstractions, mechanisms and their implementation..." cont={contB}/>

        </div>
      </div>

  )
}

export default Courses

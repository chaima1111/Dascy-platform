import React from 'react'

const Feature = ({imgCourse,title,desc,cont}) => {
  return (
    <div className="dascy__courses-container__feature">
      <div className="dascy__courses-container__feature-image">
        <img src={imgCourse} alt="" />
      </div>
      <div className="dascy__courses-container__feature-content">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
         <img src={cont} alt="continue" />
      </div>
    </div>
  )
}

export default Feature

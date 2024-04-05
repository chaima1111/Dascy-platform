import React from 'react'
import './userFeedback.css'

const UserFeedback = ({photo,name,desc}) => {
  return (
   <div className="dascy__feedbacks-container__UserFeedback">
      <div className="dascy__feedbacks-container__UserFeedback-content">
        <img src={photo} alt="" />
          <p>{desc}</p>
          <div  className='stars'/>
          <h3> {name}</h3>
          
    </div>
    </div>
  )
}

export default UserFeedback

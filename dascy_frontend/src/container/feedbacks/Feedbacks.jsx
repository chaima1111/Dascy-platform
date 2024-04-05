import React from 'react'
import contP from "../../assets/next.png"
import userphoto from "../../assets/FeedbacksUsers/image.png"
import {UserFeedback} from "../../components"
import './feedbacks.css'
const Feedbacks = () => {
  return (
    <div className='dascy__feedbacks section__padding' id='feedbacks'>
      <div className="dascy__feedbacks-heading">
        <h1>
    What Our Learners Say
        </h1>
        </div>
         <div className="dascy__feedbacks-container"> 
         <UserFeedback photo={userphoto} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " name="Daniel Walker" />
         <UserFeedback photo={userphoto} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " name="Daniel Walker" />
         <UserFeedback photo={userphoto} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " name="Daniel Walker" />
         <UserFeedback photo={userphoto} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " name="Daniel Walker" />
         <UserFeedback photo={userphoto} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " name="Daniel Walker" />
    </div>
    <div className='dascy__feedbacks-continue'>
      <img src={contP} alt="next" />
      <img src={contP} alt="next" />
    </div>
    </div>
  )
}

export default Feedbacks

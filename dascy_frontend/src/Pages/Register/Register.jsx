import React from 'react'
import {Link} from "react-router-dom";
import { FaUser,FaUniversity } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import './register.css'
const Register = () => {
  return (
    <div>
        <div className="Register_container">
    <div className='dascy__login-container_wrapper'>
      <form action="">
        <h1>Create An Account</h1>
        <div className="dascy__login-wrapper_input-box">
          <input type="text" placeholder='Your name' required />
          <FaUser className='icon' />
        </div>
        <div className="dascy__login-wrapper_input-box">
          <input type="text" placeholder='Your Year of Study' required />
          <FaUniversity className='icon'/>
        </div>
        <div className="dascy__login-wrapper_input-box">
          <input type="text" placeholder='Your University' required />
          <FaUniversity className='icon'/>
        </div>
        <div className="dascy__login-wrapper_input-box">
          <input type="password" placeholder='your password' required />
          <FaLock className='icon'/>
        </div>
        <div className="dascy__login-wrapper_input-box">
          <input type="email" placeholder='you@email.com' required />
          <MdEmail className='icon'/>
        </div>
       
        <button type="submit">Log in</button>
        <div className="register-link">
          <p> You have an account?    <Link to="/login">Log in</Link></p>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Register

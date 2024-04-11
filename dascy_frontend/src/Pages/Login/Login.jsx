import React from 'react'
import {Link} from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './login.css'
const Login = () => {
  return (
    <div className="dascy__login-container">
    <div className='dascy__login-container_wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="dascy__login-wrapper_input-box">
          <input type="email" placeholder='you@email.com' required />
          <FaUser className='icon' />
        </div>
        <div className="dascy__login-wrapper_input-box">
          <input type="password" placeholder='your password' required />
          <FaLock className='icon'/>
        </div>
        <div className="dascy__login-remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#forgetpw">Forget password</a>
        </div>
        <button type="submit">Log in</button>
        <div className="register-link">
          <p>Don't have an account?    <Link to="/register">Sign up</Link></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login

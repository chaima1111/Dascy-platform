import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Login = () => {
  return (
    <div className="container">
    <div className='container'>
    <div className='dascy__login'>
       <h1>Log in</h1>
      <form action="">
        <h3>Email</h3>
        <input  required type="email" placeholder='you@email.com'/>
        <h3>Password</h3>
        <input required type="text" placeholder='password' />
        <h5>Forgot you password?</h5>
        <button>Continue</button>
        <hr />
        <span>Not a member yet? <Link className='dascy__signup' to="/register"> Sign up</Link></span>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Login

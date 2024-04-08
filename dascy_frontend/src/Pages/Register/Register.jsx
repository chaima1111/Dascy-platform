import React from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
const Register = () => {
  return (
    <div  className="dascy__register">
       <h1>Create An Account</h1>
      <form action="">
        <h3>Your Name</h3>
       <input required type="text" placeholder='First Last'/>
        <h3>Your Year of Study</h3>
       <input required type="number" placeholder='2024'/>
        <h3>Your University</h3>
       <input required type="text" placeholder='University name'/>
       <h3>Password</h3>
        <input required type="text" placeholder='password' />
       <h3>Email</h3>
        <input  required type="email" placeholder='email'/>
        <button>Sign up</button>
       <hr />
        <span>Already a member? <Link className='dascy__signup' to="/login"> Login</Link></span>
      </form>
    </div>
  )
}

export default Register

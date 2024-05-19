import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaUniversity } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./register.css";
const Register = () => {
      const navigate = useNavigate();

      const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

      const { name, email, password } = formData;

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(
            "http://localhost:5000/signup",
            formData
          );
          console.log(res.data); // Log response data or handle as needed
          navigate("/dashboard");
          // Optionally, redirect to login page or display a success message
        } catch (error) {
          console.error("Registration error:", error.response.data);
          // Handle error, display error message to user.
        }
      };

  return (
    <div>
      <div className="Register_container">
        <div className="dascy__login-container_wrapper">
          <form  onSubmit={handleSubmit}>
            <h1>Create An Account</h1>
            <div className="dascy__login-wrapper_input-box">
              <input
                type="text"
                name="name"
                value={name}
                placeholder="your name"
                onChange={handleChange}
                required
              />

              
              <FaUser className="icon" />
            </div>
            {/* <div className="dascy__login-wrapper_input-box">
              <input type="text" placeholder="Your Year of Study" required />
              <FaUniversity className="icon" />
            </div> */}
            <div className="dascy__login-wrapper_input-box">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
              <MdEmail className="icon" />
            </div>
            <div className="dascy__login-wrapper_input-box">
              <input
                type="password"
                                name="password"

                value={password}
                onChange={handleChange}
                placeholder="your password"
                required
              />
              <FaLock className="icon" />
            </div>

            <button type="submit">Log in</button>
            <div className="register-link">
              <p>
                {" "}
                You have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

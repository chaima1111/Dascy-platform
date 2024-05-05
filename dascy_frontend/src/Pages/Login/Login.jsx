import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../authfeatures/authSlice";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="dascy__login-container">
      <div className="dascy__login-container_wrapper">
        <form onSubmit={Auth} action="">
          {isError && <p className="has-text-centered">{message}</p>}
          <h1>Login</h1>
          <div className="dascy__login-wrapper_input-box">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="dascy__login-wrapper_input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="dascy__login-remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgetpw">Forget password</a>
          </div>
          <button type="submit"> {isLoading ? "Loading..." : "Login"}</button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

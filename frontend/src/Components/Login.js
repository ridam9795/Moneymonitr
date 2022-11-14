import axios from "axios";
import React, { useState } from "react";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {};
  return (
    <div className="login center">
      <div>
        <form className="login-box">
          <h2>Login</h2>

          <div>
            <label className="label">Email Id</label>
            <input
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="btn btn-success login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setMobileno] = useState("");
  const navigate = useNavigate();
  axios.defaults.baseURL = "http://localhost:5000";

  const handleRegister = async () => {};

  return (
    <div className="login center">
      <div>
        <form className="login-box">
          <h2>Register</h2>

          <div>
            <label className="label">Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input"
              value={name}
            />
          </div>
          <div>
            <label className="label">Mobile number</label>
            <input
              type="text"
              onChange={(e) => setMobileno(e.target.value)}
              className="input"
              value={mobileno}
            />
          </div>
          <div>
            <label className="label">Email Id</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              value={email}
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              value={password}
            />
          </div>
          <button
            onClick={handleRegister}
            type="button"
            className="btn btn-success login-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

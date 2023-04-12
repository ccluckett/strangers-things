import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = ({ setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { token } = await registerUser(username, password); //call register func in api folder
    setToken(token);
    localStorage.setItem("token", token);
    setUsername("");
    setPassword("");
    navigate("/signin");
  };
  return (
    <div className="form-sigin w-50 mt-5 ms-auto me-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="floatingInput">Password:</label>
        </div>

        <button type="submit" className="btn btn-outline-danger w-100 mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

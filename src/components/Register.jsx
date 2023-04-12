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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          required
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

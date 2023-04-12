import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const SignIn = ({ token, setToken, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = await login(username, password);
    let response = token;
    console.log(token);
    if (token === response) {
      setIsLoggedIn(true);
      setToken(response);
      navigate("/profile");
    }
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
          <label for="floatingInput">Username</label>
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
          <label for="floatingInput">Password:</label>
        </div>

        <button type="submit" className="btn btn-outline-success w-100 mt-3">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

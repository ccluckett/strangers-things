import React, { useState } from "react";
import { login, myData } from "../api";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsLoggedIn, setUser, setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    const { data } = await login(user);
    let responseToken = data.token; //onClick run func that will grab the token if a player did indeed register
    if (responseToken) {
      const result = await myData(responseToken);
      localStorage.setItem("token", responseToken);
      setToken(responseToken);
      setUser(result.data);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
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

        <button type="submit" className="btn btn-success w-100 mt-3">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

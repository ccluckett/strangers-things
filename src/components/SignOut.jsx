import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setToken, setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className="container" >
      <button className="btn btn-outline-danger create-post"
        onClick={() => {
          setToken("");
          localStorage.removeItem("token");
          navigate("/");
          setIsLoggedIn(false);
        }}
      >
        Sign Out{" "}
      </button>

      <h1>See You Next Time !</h1>
    </div>
  );
};

export default SignOut;

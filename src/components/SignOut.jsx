import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setToken, setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          setToken("");
          localStorage.removeItem("token");
          navigate("/");
          setIsLoggedIn(false);
        }}
      >
        Sign Out{" "}
      </button>
    </div>
  );
};

export default SignOut;

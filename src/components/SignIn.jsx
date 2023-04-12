import React, {useState} from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";


const SignIn = ({token,setToken,setIsLoggedIn}) => {
  const navigate = useNavigate ()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      const { token } = await login(username,password);
      let response = token;
      console.log (token)
      if ( token === response ) {
          setIsLoggedIn(true);
          setToken(response);
          navigate("/profile")
      };
  
  };
  return(

    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} required onChange={(event) => setUsername(event.target.value)}></input>
      <label>Password:</label>
      <input type="text" value={password} required onChange={(event) => setPassword(event.target.value)}></input>
      <button type="submit">Sign In</button>
  
    </form>
  );
};

export default SignIn;

import React, {useState} from "react";

const Register = ({base_url}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState ("")
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if ( password === confirmPassword) {
      const registerUser = async () => {
        try {
          const response = await fetch( `${base_url}/users/register`, {
            method: "POST",
            headers: {
               'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
               user: {
                  username: username ,
                  password: password
               }
            })
          });
          const result = await response.json();
          setToken(result.data.token);
        } catch (error) {
          console.error(error)
        }
      }
      registerUser();
    } else {
       alert ("Incorrect Password")
    }
    console.log(username,password,confirmPassword);
  };
  console.log(token);

  return <div>
          <form onSubmit={handleSubmit}>
             <label>Username:</label>
             <input type="text" value={username} required onChange={(event)=>{setUsername(event.target.value)}}/>
             <label>Password:</label>
             <input type="text" value={password} required onChange={(event)=>{setPassword(event.target.value)}}/>
             <label>Confirm Password:</label>
             <input type="text" value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
             <button type="submit">Register</button>
          </form>
    
           </div>;

};

export default Register;

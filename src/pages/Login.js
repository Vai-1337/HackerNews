import "../css/login.css";
import { useState } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


const Login = () => {
  
  // State, data
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");  
  
  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName("")
    setPassword("")

    if (username=="" || password ) {
      alert("Please enter a username and password")
      return
    }

  }



  // Render
  return (
    <div className="login">      
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <TextField
        id="input-with-icon-textfield"
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
        {/* <input type="text" value={username} onChange={(event) => setUserName(event.target.value)}/>         */}
        <br />
        <label htmlFor="password">Password</label>
        <TextField type="password"
        id="input-with-icon-textfield"
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
            </InputAdornment>
          )
        }}
        // variant="standard"
      />
        {/* <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/> */}
        
      </form>
      <br/>
      <Stack spacing={2} direction="row">
      <Button variant="contained" type="submit">Login</Button>
      </Stack>
      <br/>
      <a href="https://news.ycombinator.com/forgot">Forgot your password</a>
      <br/>
      <br/>
      <br/>
      <form>        
        <label htmlFor="username">Username</label>
        <TextField
        id="input-with-icon-textfield"
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
        {/* <input type="text"/>         */}
        <br />
        <label htmlFor="password">Password</label>
        <TextField type="password"
        id="input-with-icon-textfield"
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
            </InputAdornment>
          ),
        }}
        // variant="standard"
      />
        {/* <input type="password" /> */}
      </form>
      <br/>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">Create account</Button>
      </Stack>
      <br/>
    </div>
  );
};

export default Login;

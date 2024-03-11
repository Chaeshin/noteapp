import React from 'react';

const Login = () => {
  return (
   <div>
        <h2>Log in</h2>
        <label>First Name</label>
        <input type='text' id='firstName'></input>
        <label>Last Name</label>
        <input type='text' id='lastName'></input>
        <button id='register'>Register</button>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('firstname', firstName);
        formData.append('lastname', lastName);
  
        const response = await axios.post(
          'http://hyeumine.com/newuser.php',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
        );
        alert('New User Successfully Created');
        setUserId(response.data.id);
        setFirstName('');
        setLastName('');
        
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  
  
    return (
      <div className='register' style={{display:'grid', justifyContent:'center', margin:'0', width:'auto', marginTop:'50px'}}>
        <div style={{height: '180px', width:'250px', display:'grid', justifyContent:'center',padding:'20px', border:'2px solid black'}}> 
            <h2 style={{margin:'0'}}>Register User</h2>
            <label style={{margin:'0'}}>First Name</label>
            <input type='text' id='firstName' style={{margin:'0'}} onChange={(e) => setFirstName(e.target.value)} ></input>
            <label style={{margin:'0'}}>Last Name</label>
            <input type='text' id='lastName' style={{margin:'0'}} onChange={(e) => setLastName(e.target.value)} ></input>
            <button id='register' onClick={handleSubmit} style={{marginTop:'10px'}} >Register</button>
        </div>
        <h4>User Id: {userId}</h4>
      </div>
    );
  };

export default Register;
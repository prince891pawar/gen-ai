import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router';
import "./login.scss"
import { useAuth } from '../hooks/useAuth';

const Register = () => {

   const navigate = useNavigate();
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const {loading, handleRegister} = useAuth

const handleSubmit = async (e) => {
  e.preventDefault(); 
  await handleRegister({username, email, password})
  navigate('/home')
};

if(loading){
  return (<main><h1>Loading......</h1></main>)
}

  return (
   <main>
   <div className='form-container'>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>

<div className="input-group">
        <label htmlFor="username">uername</label>
          <input
            onChange={(e)=>{setUsername(e.target.value)}} 
          type="text" id="username" name='username' placeholder='Username' />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
          <input
          onChange={(e)=>{setEmail(e.target.value)}} 
          type="email" placeholder='Enter Email' />
      </div>
      <div className="input-group">
       <label htmlFor="password">Password</label>
          <input
          onChange={(e)=>{setPassword(e.target.value)}} 
          type="password" placeholder='Enter Password' />
      </div>
      <button className='button primary-button'>Register</button>

      <p>do you already have accout? <Link to={"/login"}>Login</Link></p>
    </form>
   </div>
   </main>
  )
}

export default Register;

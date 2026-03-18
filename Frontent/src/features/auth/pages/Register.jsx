import React from 'react'
import {Link, useNavigate } from 'react-router';
import "./login.scss"

const Register = () => {

   const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault(); 
};

  return (
   <main>
   <div className='form-container'>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>

<div className="input-group">
        <label htmlFor="username">uername</label>
          <input type="text" id="username" name='username' placeholder='Username' />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' />
      </div>
      <div className="input-group">
       <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' />
      </div>
      <button className='button primary-button'>Register</button>

      <p>do you already have accout? <Link to={"/login"}>Login</Link></p>
    </form>
   </div>
   </main>
  )
}

export default Register;

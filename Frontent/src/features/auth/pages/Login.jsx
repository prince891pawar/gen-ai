import React from 'react'
import "./login.scss"
import {Link, useNavigate } from 'react-router';


const Login = () => {

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault(); 
};

  return (
   <main>
   <div className='form-container'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>


      <div className="input-group">
        <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' />
      </div>
      <div className="input-group">
       <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' />
      </div>
      <button className='button primary-button'>Login</button>

       <p>do not have accout? <Link to={"/register"}>Register</Link></p>
    </form>
   </div>
   </main>
  )
}

export default Login;

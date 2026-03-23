import React, { useState } from 'react'
import "./login.scss"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth"

const Login = () => {

  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({email, password});
     navigate('/')
  };

  if (loading) {
    return (<main><h1>Loading......</h1></main>)
  }

  return (
    <main>
      <div className='form-container'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Enter Email'
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Enter Password'
            />
          </div>

          <button className='button primary-button'>Login</button>

          <p>Do not have account? <Link to="/register">Register</Link></p>

        </form>         
      </div>
    </main>
  )
}

export default Login;

import React from 'react'
import "./login.scss"

const Login = () => {
  return (
   <main>
   <div className='form-container'>
    <h1>Login</h1>
    <form>
      <div className="input-group">
        <label htmlFor="email">email</label>
          <input type="email" placeholder='enter email' />
      </div>
      <div className="input-group">
       <label htmlFor="password">password</label>
          <input type="password" placeholder='enter Password' />
      </div>
      <button className='button'>Login</button>
    </form>
   </div>
   </main>
  )
}

export default Login;

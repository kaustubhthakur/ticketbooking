import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const userData = {
      username: username,
      password: password
    }

    const response = await axios.post("http://localhost:9000/auth/login", userData)

    if (response.status === 200) {
      const data = response.data
      localStorage.setItem('token', data.token)
      console.log(data);
      alert('logged in')
      navigate('/')
    }

    setUsername('')
    setPassword('')
  }

  return (
    <div className='login-page'>
      <div className='login-container'>
        <form onSubmit={submitHandler} className='login-form'>
          <h3 className='form-heading'>What's your username?</h3>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input-field'
            type="text"
            placeholder='Username'
          />

          <h3 className='form-heading'>Enter Password</h3>
          <input
            className='input-field'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required type="password"
            placeholder='Password'
          />

          <button className='submit-button'>Login</button>
        </form>
        
        <p className='sign-up-link'>
          New here? <Link to='/register' className='link'>Create new Account</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage

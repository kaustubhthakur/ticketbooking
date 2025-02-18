import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./LoginPage.css"

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const userCredentials = { username, password }
      const response = await axios.post('http://localhost:9000/auth/login', userCredentials)

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        alert('Logged in successfully!')
        console.log(response);
        navigate('/')
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message)
    }

    setUsername('')
    setPassword('')
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h3 className="register-title">Login</h3>
        <form onSubmit={submitHandler}>
          <label className="register-label">Username</label>
          <input
            required
            className="register-input"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="register-label">Password</label>
          <input
            required
            className="register-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="register-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to='/register'>Register here</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
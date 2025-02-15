import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./RegisterPage.css"

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('user')
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const newUser = { username, email, password, role }
      const response = await axios.post('http://localhost:9000/auth/register', newUser)

      if (response.status === 201) {
        localStorage.setItem('token', response.data.token)
        alert('Registered successfully!')
        navigate('/login')
      }
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message || error.message)
    }

    setEmail('')
    setUsername('')
    setPassword('')
    setRole('user')
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h3 className="register-title">Create Account</h3>
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

          <label className="register-label">Email</label>
          <input
            required
            className="register-input"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="register-label">Password</label>
          <input
            required
            className="register-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="register-label">Role</label>
          <select
            className="register-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="register-button">Create account</button>
        </form>
        <p className="register-link">
          Already have an account? <Link to='/login'>Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage

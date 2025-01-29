import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./RegisterPage.css"

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      email,
      password,
      isAdmin
    }

    const response = await axios.post("http://localhost:9000/auth/register", newUser)

    if (response.status === 201) {
      localStorage.setItem('token', response.data.token)
      navigate('/')
    }

    setUsername('')
    setEmail('')
    setPassword('')
    setIsAdmin(false)
    alert('registered!')
    console.log(response)
  }

  return (
    <div className='register-page'>
      <div className='register-container'>
        <form onSubmit={submitHandler} className='register-form'>
          <h3 className='form-heading'>Username</h3>
          <input
            required
            className='input-field'
            type="text"
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h3 className='form-heading'>Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-field'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='form-heading'>Password</h3>
          <input
            className='input-field'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required type="password"
            placeholder='password'
          />

          <div className='admin-checkbox'>
            <input
              type="checkbox"
              id="isAdmin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              className='checkbox-input'
            />
            <label htmlFor="isAdmin" className='checkbox-label'>Admin</label>
          </div>

          <button className='submit-button'>
            Create account
          </button>
        </form>
        <p className='login-link'>
          Already have an account? <Link to='/login' className='link'>Login here</Link>
        </p>
      </div>
      <div className='recaptcha'>
        <p className='recaptcha-text'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  )
}

export default RegisterPage

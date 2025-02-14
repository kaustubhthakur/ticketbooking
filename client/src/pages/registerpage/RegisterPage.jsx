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
      const newUser = {
        username,
        email,
        password,
        role
      }

      const response = await axios.post('http://localhost:9000/auth/register', newUser)

      if (response.status === 201) {
        const data = response.data
        localStorage.setItem('token', data.token)
        alert('register!!')
        console.log(response);
        navigate('/login')
      }
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message || error.message)
    }

    // Reset form fields
    setEmail('')
    setUsername('')
    setPassword('')
    setRole('user')
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
     
          <form onSubmit={submitHandler}>
            <h3 className='text-lg w-1/2  font-medium mb-2'>Username</h3>
            <input
              required
              className='bg-[#eeeeee] w-full rounded-lg px-4 py-2 border  text-lg placeholder:text-base mb-7'
              type="text"
              placeholder='Enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <h3 className='text-lg font-medium mb-2'>Email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Password</h3>
            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required type="password"
              placeholder='password'
            />

            <h3 className='text-lg font-medium mb-2'>Role</h3>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg'
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button
              type="submit"
              className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
            >
              Create account
            </button>
          </form>
          <p className='text-center'>
            Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
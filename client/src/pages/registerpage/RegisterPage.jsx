import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../context/UserContext';
import "./RegisterPage.css"
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };

    const response = await axios.post("http://localhost:9000/auth/register", newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      alert('Registered successfully!');
      localStorage.setItem('token', data.token);
      navigate('/');
    }

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="flex justify-center mb-6">
       
        </div>
        <form onSubmit={submitHandler}>
          <h3 className="register-heading">Create your account</h3>

          <div className="mb-6">
            <label htmlFor="username" className="register-label">Choose a username</label>
            <input
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="register-input"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="register-label">What's your email</label>
            <input
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="register-label">Enter Password</label>
            <input
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              type="password"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="register-button"
          >
            Create account
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="register-link">Login here</Link>
        </p>

       
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Navbar.css"
const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isAdmin: false,
    username: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const username = localStorage.getItem('username') || '';
    setAuthState({ isLoggedIn: !!token, isAdmin, username });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:9000/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear client-side storage regardless of backend response
      localStorage.removeItem('authToken');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('username');
      setAuthState({ isLoggedIn: false, isAdmin: false, username: '' });
      navigate('/login');
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          YourLogo
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {authState.isLoggedIn ? (
            <>
              <div className="user-info">
                <span>Welcome, {authState.username}</span>
                {authState.isAdmin && <span className="admin-badge">ADMIN</span>}
              </div>
              <Link to="/profile" className="nav-link" onClick={toggleMenu}>
                Profile
              </Link>
              <button 
                onClick={handleLogout} 
                className="nav-link logout-button"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="nav-link" onClick={toggleMenu}>
                Register
              </Link>
              <Link to="/login" className="nav-link" onClick={toggleMenu}>
                Login
              </Link>
            </>
          )}
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('users') || '{}');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:9000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        alert(`Error: ${data.error}`);
        return;
      }

      localStorage.removeItem("users");
      window.location.reload(); // Refresh the page to update UI
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          B
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-right">
            {user?.username ? (
              <>
                <div className="user-info">
                  <span>{user.username}</span>
                  {user?.isAdmin && <span className="admin-badge">Admin</span>}
                  {!user?.isAdmin && <span className="admin-badge">User</span>}
                  <a href="/profile">profile</a>
                  <a href="/createevent">CreateEvent</a>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
              </>
            )}
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './Navbar.css';
import logo from './logo.jpg';
import search_bar from './search_bar.png';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(() => localStorage.getItem('activeMenu') || 'Home'); // Initialize menu with saved value

  useEffect(() => {
    const pathToMenu = {
      '/': 'Home',
      '/livescore': 'Live Score',
      '/result': 'Result',
      '/upcomingmatches': 'Upcoming Matches',
      '/contactus': 'Contact Us',
    };
    setMenu(pathToMenu[location.pathname] || 'Home'); // Set active menu based on the current path
  }, [location.pathname]);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    localStorage.setItem('activeMenu', menuName); // Save active menu in localStorage
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        <li
          onClick={() => handleMenuClick('Home')}
          className={menu === 'Home' ? 'active' : ''}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => handleMenuClick('Live Score')}
          className={menu === 'Live Score' ? 'active' : ''}
        >
          <Link to="/livescore">Live Score</Link>
        </li>
        <li
          onClick={() => handleMenuClick('Result')}
          className={menu === 'Result' ? 'active' : ''}
        >
          <Link to="/result">Result</Link>
        </li>
        <li
          onClick={() => handleMenuClick('Upcoming Matches')}
          className={menu === 'Upcoming Matches' ? 'active' : ''}
        >
          <Link to="/upcomingmatches">Upcoming Matches</Link>
        </li>
        <li
          onClick={() => handleMenuClick('Contact Us')}
          className={menu === 'Contact Us' ? 'active' : ''}
        >
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>

     

      {/* Search Bar */}
      <div className="search-bar-container">
        <textarea name="Searchitem" className="search-bar" placeholder="Search..."></textarea>
        <img src={search_bar} alt="search icon" className="search-icon" />
      </div>

      <button>Sign In</button>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleViewScore = () => {
    localStorage.setItem('activeMenu', 'Live Score'); // Update the active menu in localStorage
    navigate('/livescore'); // Navigate to Live Score
  };

  return (
    <div className="header">
      <h2>
        <span>Online Cricket Live Score Board</span>
      </h2>
      <p>You can view local cricket match scores here, apart from national matches.</p>
      <button onClick={handleViewScore}>View Score</button>
    </div>
  );
};

export default Header;

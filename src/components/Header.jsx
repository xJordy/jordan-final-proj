// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img 
          src="/api/placeholder/150/50" 
          alt="Ono Academic College Logo" 
          className="logo" 
        />
        <span className="logo-text">פורטל הסטודנטים</span>
      </div>
      <div className="user-menu">
        <div className="icon-button">
          <span>🔍</span>
        </div>
        <div className="icon-button">
          <span>🔔</span>
          <span className="notification-count">3</span>
        </div>
        <div className="user-info">
          <div className="user-avatar">ט</div>
          <div className="user-details">
            <span className="user-name">טל ישראלי</span>
            <span className="user-role">סטודנט לתואר שני</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
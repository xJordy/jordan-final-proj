// components/QuickAccess.jsx
import React from 'react';

const QuickAccess = () => {
  const quickLinks = [
    { icon: '📚', text: 'ספרייה' },
    { icon: '📝', text: 'בחינות' },
    { icon: '📅', text: 'לוח שנה' },
    { icon: '💰', text: 'תשלומים' },
    { icon: '📊', text: 'ציונים' },
    { icon: '👥', text: 'סגל' }
  ];

  return (
    <div className="icon-grid">
      {quickLinks.map((link, index) => (
        <div className="icon-item" key={index}>
          <div className="icon">{link.icon}</div>
          <span className="icon-text">{link.text}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickAccess;
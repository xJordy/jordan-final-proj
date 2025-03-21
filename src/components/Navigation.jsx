// components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navLinks = [
    { name: 'דף הבית', path: '/', exact: true },
    { name: 'מידע אישי', path: '/profile' },
    { name: 'קורסים', path: '/courses' },
    { name: 'מערכת שעות', path: '/schedule' },
    { name: 'בחינות וציונים', path: '/exams' },
    { name: 'ספרייה', path: '/library' },
    { name: 'תשלומים', path: '/payments' },
    { name: 'אירועים', path: '/events' }
  ];

  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={link.exact}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
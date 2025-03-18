// components/Navigation.jsx
import React from 'react';

const Navigation = () => {
  const navLinks = [
    { name: 'דף הבית', href: '#', active: true },
    { name: 'מידע אישי', href: '#' },
    { name: 'קורסים', href: '#' },
    { name: 'מערכת שעות', href: '#' },
    { name: 'בחינות וציונים', href: '#' },
    { name: 'ספרייה', href: '#' },
    { name: 'תשלומים', href: '#' },
    { name: 'אירועים', href: '#' }
  ];

  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className={link.active ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
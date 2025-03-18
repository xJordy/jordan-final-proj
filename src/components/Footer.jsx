// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: 'צור קשר', href: '#' },
    { name: 'מדיניות פרטיות', href: '#' },
    { name: 'תקנון', href: '#' },
    { name: 'נגישות', href: '#' },
    { name: 'מוקד תמיכה: 054-9696680', href: '#' }
  ];

  return (
    <footer className="footer">
      <p>© 2025 הקריה האקדמית אונו | כל הזכויות שמורות</p>
      <div className="footer-links">
        {footerLinks.map((link, index) => (
          <a href={link.href} key={index}>{link.name}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Map path segments to readable names
  const getPathName = (path) => {
    const pathMap = {
      '': 'דף הבית',
      'profile': 'מידע אישי',
      'courses': 'קורסים',
      'schedule': 'מערכת שעות',
      'exams': 'בחינות וציונים',
      'library': 'ספרייה',
      'payments': 'תשלומים',
      'events': 'אירועים'
    };
    
    return pathMap[path] || path;
  };

  return (
    <div className="breadcrumbs">
      <Link to="/">ראשי</Link>
      {pathnames.length > 0 && <span>›</span>}
      
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        
        return last ? (
          <span key={to}>{getPathName(value)}</span>
        ) : (
          <React.Fragment key={to}>
            <Link to={to}>{getPathName(value)}</Link>
            <span>›</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
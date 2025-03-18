// components/QuickSearch.jsx
import React from 'react';

const QuickSearch = () => {
  const searchTags = [
    'מערכת שעות',
    'לוח בחינות',
    'שכר לימוד',
    'אישורי לימודים'
  ];

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="חיפוש..." />
        <span className="search-icon">🔍</span>
      </div>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem', 
        marginTop: '0.75rem' 
      }}>
        {searchTags.map((tag, index) => (
          <button 
            key={index}
            className="btn btn-sm" 
            style={{ 
              backgroundColor: 'var(--gray-light)', 
              color: 'var(--gray-dark)' 
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuickSearch;
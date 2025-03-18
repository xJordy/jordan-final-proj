// components/Card.jsx
import React from 'react';

const Card = ({ title, icon, action, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <div className="card-title-icon">{icon}</div>
          {title}
        </div>
        {action && (
          <button className="btn btn-outline btn-sm">
            {action.icon && <span className="btn-icon">{action.icon}</span>}
            {action.text}
          </button>
        )}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
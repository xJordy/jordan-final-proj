// components/SemesterProgress.jsx
import React from 'react';

const SemesterProgress = ({ percentage, startDate, endDate, semesterName }) => {
  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 500 }}>{semesterName}</span>
          <span>{percentage}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-value" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        color: 'var(--gray-dark)', 
        fontSize: '0.85rem' 
      }}>
        <span>תאריך התחלה: {startDate}</span>
        <span>תאריך סיום: {endDate}</span>
      </div>
    </>
  );
};

export default SemesterProgress;
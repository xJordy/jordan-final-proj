// components/UpcomingClasses.jsx
import React from 'react';

const UpcomingClasses = ({ classes }) => {
  return (
    <>
      {classes.map((classItem, index) => (
        <div className="upcoming-class" key={index}>
          <div className="upcoming-class-header">
            <h3>{classItem.title}</h3>
            <span className={`tag tag-${classItem.tag.type}`}>
              {classItem.tag.text}
            </span>
          </div>
          <div className="upcoming-class-info">
            <span>👨‍🏫 {classItem.instructor}</span>
            <span>🕒 {classItem.time}</span>
            <span>📍 {classItem.location}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingClasses;
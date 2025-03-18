// components/UpcomingEvents.jsx
import React from 'react';

const UpcomingEvents = ({ events }) => {
  return (
    <>
      {events.map((event, index) => (
        <div className="calendar-item" key={index}>
          <div 
            className="calendar-date" 
            style={event.highlighted ? { backgroundColor: 'var(--primary)' } : {}}
          >
            <span className="calendar-day">{event.day}</span>
            <span className="calendar-month">{event.month}</span>
          </div>
          <div className="calendar-content">
            <h4>{event.title}</h4>
            <p>{event.time} | {event.location}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingEvents;
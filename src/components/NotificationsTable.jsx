// components/NotificationsTable.jsx
import React from 'react';

const NotificationsTable = ({ notifications }) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '15%' }}>תאריך</th>
          <th style={{ width: '15%' }}>מקור</th>
          <th style={{ width: '55%' }}>נושא</th>
          <th style={{ width: '15%' }}>פעולות</th>
        </tr>
      </thead>
      <tbody>
        {notifications.map((notification, index) => (
          <tr key={index}>
            <td>{notification.date}</td>
            <td>{notification.source}</td>
            <td>{notification.subject}</td>
            <td>
              <button className="btn btn-primary btn-sm">צפייה</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotificationsTable;
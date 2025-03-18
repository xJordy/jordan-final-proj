// components/TasksTable.jsx
import React from 'react';

const TasksTable = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>שם המטלה</th>
          <th style={{ width: '20%' }}>קורס</th>
          <th style={{ width: '20%' }}>תאריך הגשה</th>
          <th style={{ width: '20%' }}>סטטוס</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>{task.course}</td>
            <td>{task.dueDate}</td>
            <td>
              <div>{task.status}</div>
              <div className="progress-bar">
                <div 
                  className="progress-value" 
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
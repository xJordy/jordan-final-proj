// App.jsx - Main component
import React from 'react';
import './App.css'; // We'll create this for global styles
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app" dir="rtl" lang="he">
      <Header />
      <Navigation />
      <main>
        <div className="breadcrumbs">
          <a href="#">ראשי</a>
          <span>›</span>
          <span>דף הבית</span>
        </div>

        <h1 className="page-title">שלום, טל!</h1>
        <p className="welcome-message">ברוך הבא לפורטל הסטודנטים. כאן תוכל למצוא את כל המידע הנחוץ לך בלימודים.</p>

        <AlertMessage 
          title="שימו לב - הודעה חשובה"
          message="יום עיון בנושא &quot;חדשנות בתעשייה&quot; יתקיים ב-15.3 באולם המרכזי. הרשמה בפורטל הסטודנטים עד לתאריך 13.3."
        />

        <StatsGrid />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

// AlertMessage component for important notifications
const AlertMessage = ({ title, message }) => {
  return (
    <div className="alert">
      <div className="alert-icon">!</div>
      <div className="alert-content">
        <h3 className="alert-title">{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

// StatsGrid component for the stats cards section
const StatsGrid = () => {
  const stats = [
    { icon: '📚', value: '8', label: 'קורסים פעילים', type: 'primary' },
    { icon: '📝', value: '3', label: 'מטלות להגשה', type: 'info' },
    { icon: '📅', value: '2', label: 'בחינות קרובות', type: 'warning' },
    { icon: '🔔', value: '5', label: 'הודעות חדשות', type: 'danger' }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className={`stat-icon stat-${stat.type}`}>{stat.icon}</div>
          <div className="stat-content">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
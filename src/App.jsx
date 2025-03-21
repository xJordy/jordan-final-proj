// App.jsx - Main component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // We'll create this for global styles
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

// Import or create page components for each route
// For example:
const CoursesPage = () => <div><h1>קורסים</h1></div>;
const ProfilePage = () => <div><h1>מידע אישי</h1></div>;
const SchedulePage = () => <div><h1>מערכת שעות</h1></div>;
const ExamsPage = () => <div><h1>בחינות וציונים</h1></div>;
const LibraryPage = () => <div><h1>ספרייה</h1></div>;
const PaymentsPage = () => <div><h1>תשלומים</h1></div>;
const EventsPage = () => <div><h1>אירועים</h1></div>;

function App() {
  return (
    <Router>
      <div className="app" dir="rtl" lang="he">
        <Header />
        <Navigation />
        <main>
          <Breadcrumbs />

          <Routes>
            <Route path="/" element={
              <>
                <h1 className="page-title">שלום, טל!</h1>
                <p className="welcome-message">ברוך הבא לפורטל הסטודנטים. כאן תוכל למצוא את כל המידע הנחוץ לך בלימודים.</p>
                <AlertMessage 
                  title="שימו לב - הודעה חשובה"
                  message="יום עיון בנושא &quot;חדשנות בתעשייה&quot; יתקיים ב-15.3 באולם המרכזי. הרשמה בפורטל הסטודנטים עד לתאריך 13.3."
                />
                <StatsGrid />
                <Dashboard />
              </>
            } />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
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
    { icon: '📚', value: '4', label: 'קורסים פעילים', type: 'primary' },
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
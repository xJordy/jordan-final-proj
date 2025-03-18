// components/Dashboard.jsx
import React from 'react';
import Card from './Card';
import UpcomingClasses from './UpcomingClasses';
import TasksTable from './TasksTable';
import NotificationsTable from './NotificationsTable';
import QuickAccess from './QuickAccess';
import SemesterProgress from './SemesterProgress';
import UpcomingEvents from './UpcomingEvents';
import QuickSearch from './QuickSearch';

const Dashboard = () => {
  // Data for upcoming classes
  const upcomingClasses = [
    {
      title: 'סמינר מחקרי',
      tag: { type: 'warning', text: 'היום' },
      instructor: 'פרופ\' כהן',
      time: '16:15-17:45',
      location: 'בניין 2, כיתה 305'
    },
    {
      title: 'גישות לכתיבה מדעית',
      tag: { type: 'primary', text: 'מחר' },
      instructor: 'ד"ר לוי',
      time: '10:00-11:30',
      location: 'בניין 4, כיתה 201'
    },
    {
      title: 'סדנת מחקר מתקדם',
      tag: { type: 'info', text: 'יום ה\'' },
      instructor: 'פרופ\' אברהם',
      time: '12:30-14:00',
      location: 'בניין 5, מעבדה 103'
    }
  ];

  // Data for tasks
  const tasks = [
    {
      name: 'עבודת מחקר - סמסטר א\'',
      course: 'שיטות מחקר',
      dueDate: '15/03/2025',
      status: 'בתהליך',
      progress: 65
    },
    {
      name: 'מצגת - נושאים מתקדמים',
      course: 'סמינר נושאי',
      dueDate: '18/03/2025',
      status: 'בתהליך',
      progress: 30
    },
    {
      name: 'תרגיל מסכם - פרק 4',
      course: 'סטטיסטיקה',
      dueDate: '22/03/2025',
      status: 'טרם התחיל',
      progress: 0
    }
  ];

  // Data for notifications
  const notifications = [
    {
      date: '11/03/2025',
      source: 'מזכירות אקדמית',
      subject: 'הזמנה לכנס שנתי בנושא חדשנות בתחום הטכנולוגיה'
    },
    {
      date: '10/03/2025',
      source: 'מדור בחינות',
      subject: 'שינוי בלוח הבחינות - מועדי ב\' סמסטר א\''
    },
    {
      date: '09/03/2025',
      source: 'ד"ר ישראלי',
      subject: 'תזכורת - הגשת עבודות לקורס שיטות מחקר'
    }
  ];

  // Data for upcoming events
  const events = [
    {
      day: '15',
      month: 'מרץ',
      title: 'כנס חדשנות בהייטק',
      time: '10:00-16:00',
      location: 'אולם כנסים מרכזי',
      highlighted: true
    },
    {
      day: '20',
      month: 'מרץ',
      title: 'יריד תעסוקה',
      time: '12:00-17:00',
      location: 'רחבת הקמפוס'
    },
    {
      day: '25',
      month: 'מרץ',
      title: 'הרצאת אורח: חדשנות בתעשייה',
      time: '18:00-20:00',
      location: 'אולם 405, בניין 3'
    }
  ];

  return (
    <div className="dashboard">
      <div className="main-content">
        <Card 
          title="שיעורים הקרובים" 
          icon="📅" 
          action={{ text: 'לוח זמנים מלא', icon: '👁️' }}
        >
          <UpcomingClasses classes={upcomingClasses} />
        </Card>

        <Card 
          title="מטלות קרובות" 
          icon="📋" 
          action={{ text: 'כל המטלות', icon: '👁️' }}
        >
          <TasksTable tasks={tasks} />
        </Card>

        <Card 
          title="הודעות מהמערכת" 
          icon="🔔" 
          action={{ text: 'כל ההודעות', icon: '👁️' }}
        >
          <NotificationsTable notifications={notifications} />
        </Card>
      </div>

      <div className="sidebar">
        <Card title="גישה מהירה" icon="⚡">
          <QuickAccess />
        </Card>

        <Card title="התקדמות סמסטר" icon="📊">
          <SemesterProgress 
            percentage={65}
            startDate="02/01/2025"
            endDate="15/05/2025"
            semesterName="סמסטר אביב 2025"
          />
        </Card>

        <Card title="אירועים קרובים" icon="📅">
          <UpcomingEvents events={events} />
        </Card>

        <Card title="חיפוש מהיר" icon="🔍">
          <QuickSearch />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust the path as necessary
import Attendance from './Attendance'; // Import your Attendance component
import Dashboard from './Dashboard'; // Import your Dashboard component

const MainComponent = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [attendanceType, setAttendanceType] = useState(null);
  const [navbarText, setNavbarText] = useState('Dashboard');

  const handleAttendanceChange = (type) => {
    setAttendanceType(type);
    setCurrentView('attendance');
    setNavbarText(type === 'daily' ? 'Daily Attendance' : 'Monthly Attendance');
  };
  
  const changeView = (view) => {
    setCurrentView(view);
    setNavbarText(view === 'dashboard' ? 'Dashboard' : 'Attendance');
  };

  return (
    <div>
      <Navbar isOpen={true} toggleSidebar={() => {}} navbarText={navbarText} />
      <div className="p-4">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'attendance' && <Attendance type={attendanceType} />}
        {/* Add other views similarly */}
      </div>
    </div>
  );
};

export default MainComponent;

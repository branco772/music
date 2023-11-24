// ToggleSidebar.jsx
'use client'
import React, { useState } from 'react';

function ToggleSidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="absolute top-0 left-0 m-4 text-xs text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-3 py-1">Toggle Sidebar</button>
      {children(sidebarOpen)}
    </>
  );
}

export default ToggleSidebar;
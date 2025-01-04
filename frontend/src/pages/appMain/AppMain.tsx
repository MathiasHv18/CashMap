import React, { useState } from "react";
import "./AppMain.css";
import Sidebar from "../../components/layouts/Sidebar/Sidebar";

function AppMain() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="AppMain_outerBox">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <main className="AppMain_content"></main>
    </div>
  );
}

export default AppMain;

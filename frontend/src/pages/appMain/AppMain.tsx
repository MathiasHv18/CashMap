import React, { useState } from "react";
import "./AppMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faChartBar, faCog, faBars } from "@fortawesome/free-solid-svg-icons";

function AppMain() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="AppMain_outerBox">
      {/* Barra lateral */}
      <nav
        className={`AppMain_sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}
        aria-label="Barra de navegación"
      >
        <div className="sidebar-header" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <a href="#home" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </a>
        <a href="#add" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faPlus} />
          <span>Add</span>
        </a>
        <a href="#stats" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Stats</span>
        </a>
        <a href="#settings" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </a>
      </nav>

      {/* Contenido principal */}
      <main className="AppMain_content"></main>
    </div>
  );
}

export default AppMain;

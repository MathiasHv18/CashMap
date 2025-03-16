import React, { useState } from "react";
// import "./AppMain.css";
import styles from "./AppMain.module.css";
import Sidebar from "../../components/layouts/Sidebar/Sidebar";
import Home from "../Home/Home";

function AppMain() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={styles.outerBox}>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <main className={styles.content}>
        <Home />
      </main>
    </div>
  );
}

export default AppMain;

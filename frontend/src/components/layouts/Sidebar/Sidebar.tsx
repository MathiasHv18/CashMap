import { useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faChartBar,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/CashMap(T).svg";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("sidebar-collapsed");
    } else {
      document.body.classList.remove("sidebar-collapsed");
    }
  }, [isCollapsed]);

  return (
    <nav
      className={`AppMain_sidebar ${isCollapsed ? "collapsed" : ""}`}
      aria-label="Barra de navegación"
    >
      <div className={`sidebar-logo ${isCollapsed ? "collapsed" : ""}`}>
        <img src={logo} alt="CashMap Logo" />
      </div>
      <div className="sidebar-header" onClick={onToggle}>
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
  );
}

export default Sidebar;

import React from "react";
import { Usermenu } from "./Usermenu";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../../../styles/Layout.css';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {Usermenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div key={menu.path} className={`menu-item ${isActive ? "active" : ""}`}>
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

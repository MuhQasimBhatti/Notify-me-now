import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dashboardLogo">Dashboard</div>
      <div>
        <ul className="sidebarList">
          <Link to="" className="sidebarLink m-1 ">
            <li className="sidebarLi py-2 px-5 rounded-3">Frontend Team</li>
          </Link>
          <Link to="" className="sidebarLink m-1">
            <li className="sidebarLi py-2 px-5  rounded-3">Backend Team</li>
          </Link>
          <Link to="" className="sidebarLink m-1">
            <li className="sidebarLi py-2 px-5  rounded-3">Flutter Team</li>
          </Link>
          <Link to="" className="sidebarLink m-1">
            <li className="sidebarLi py-2 px-5    rounded-3">Marketers</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

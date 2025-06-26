import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>Sidebar</p>
      <Link to="/feed">Feed</Link>
    </div>
  );
};

export default Sidebar;

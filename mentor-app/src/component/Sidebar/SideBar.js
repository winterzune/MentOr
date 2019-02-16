import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const SideBar = props => (
  <nav className="sidebar">
    <Link className="side-bar" to="/">
      MentOr
    </Link>
    <div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            to="/feed"
            className={
              window.location.pathname === "/feed"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Feed
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default SideBar;

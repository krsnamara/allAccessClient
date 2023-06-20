import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleFooter = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  return (
    <div className={`footer ${isCollapsed ? "collapsed" : "open"}`}>
      {!isCollapsed && (
        <div className="footer-content">
          <div className="list-container">
            <ul>
              <li className="nav-item">
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" onClick={handleLinkClick}>
                  Your Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/images" onClick={handleLinkClick}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events/new" onClick={handleLinkClick}>
                  Create Event
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`footer-tab ${isCollapsed ? "open" : "collapsed"}`}
        onClick={toggleFooter}
      >
        <span>{isCollapsed ? "_" : "V"}</span>
      </div>
    </div>
  );
};

export default Footer;

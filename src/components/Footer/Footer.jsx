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
    <div className={`footer ${isCollapsed ? "collapsed" : ""}`}>
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
            </ul>
            <ul>
              <li className="nav-item">
                <Link to="/events/new" onClick={handleLinkClick}>
                  Create Event
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews" onClick={handleLinkClick}>
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews/new" onClick={handleLinkClick}>
                  Create Review
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`footer-tab ${isCollapsed ? "" : "collapsed"}`}
        onClick={toggleFooter}
      >
        <span>{isCollapsed ? "Show" : "Hide"}</span>
      </div>
    </div>
  );
};

export default Footer;

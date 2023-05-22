import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import * as userService from "../../utilities/users-service";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="container">
        <div className="footer-header">
          <h2>Create your own Meetup group.</h2>
          <button>Get Started</button>
        </div>
        <hr /> */}
        <div className="list-container">
          <ul>
            <li className="nav-item">
              <Link to="/">Your Account</Link>
            </li>
            <li className="nav-item">
              <Link to="/venues">Venues</Link>
            </li>
            <li className="nav-item">
              <Link to="/evnts">Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/evnts/new">Create Event</Link>
            </li>
            <li className="nav-item">
            <Link to="/reviews">Reviews </Link>
            </li>
            <li className="nav-item">
            <Link to="/reviews/new">Create Review </Link>
            </li>
          </ul>
        </div>
      </div>
    // </div>
  );
};

export default Footer;

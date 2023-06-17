import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import * as userService from "../../utilities/users-service";

const Footer = () => {
  return (
    <div className="footer">
      <div className="list-container">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile">Your Account</Link>
          </li>
          <li className="nav-item">
            <Link to="/images">Events</Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/events/new">Create Event</Link>
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

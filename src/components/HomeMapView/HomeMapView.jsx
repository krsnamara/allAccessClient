import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map from "../../assets/Oakland-CA.png";
import "./HomeMapView.css";

export default function HomeMapView() {
  return (
    <>
      <h1>Map</h1>

      <div className="home-map-container">
        <div className="home-card-container">
          <div className="home-card">
            <div className="home-card-picture">
              <img
                src="https://i.imgur.com/dX7f3DJ.jpg"
                className="home-card-img-top"
                alt="cardImage"
              />
            </div>
            <div className="home-card-body">
              <h5 className="home-card-title">Meet up at Cheeseman Park</h5>
              <p className="home-card-text">Event Details. Go here.</p>
              <div className="home-location">
                <FaMapMarkerAlt size={24} color="green" />
                <p className="home-location-text">Denver, CO</p>
              </div>
              {/* eslint-disable-next-line */}
              <a href="#" className="home-btn btn-primary">
                link
              </a>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-picture">
              <img
                src="https://i.imgur.com/GpVxLfW.jpg"
                className="home-card-img-top"
                alt="..."
              />
            </div>
            <div className="home-card-body">
              <h5 className="home-card-title">Cooking Class</h5>
              <p className="home-card-text">This is a cooking class</p>
              <div className="home-location">
                <FaMapMarkerAlt size={24} color="green" />
                <p className="home-location-text">Oakland, CA</p>
              </div>
              {/* eslint-disable-next-line */}
              <a href="#" className="home-btn btn-primary">
                link
              </a>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-picture">
              <img
                src="https://i.imgur.com/M3famJE.jpg"
                className="home-card-img-top"
                alt="..."
              />
            </div>
            <div className="home-card-body">
              <h5 className="home-card-title">
                Hybrid: Friday Disability Peer Support Group
              </h5>
              <p className="home-card-text">
                SIGN UP TO JOIN THE GROUP! This hybrid peer support group is for
                individuals who have a disability and identify as a member of
                the LGBTQ+ community.
              </p>
              <div className="home-location">
                <FaMapMarkerAlt size={24} color="green" />
                <p className="home-location-text">E</p>
              </div>
              {/* eslint-disable-next-line */}
              <a href="#" className="home-btn btn-primary">
                link
              </a>
            </div>
          </div>
        </div>

        <div className="home-map">
          <img src={Map} className="home-map-img" alt="..." />
        </div>
      </div>
    </>
  );
}

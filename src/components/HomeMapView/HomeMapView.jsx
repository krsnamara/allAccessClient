import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HomeMapView.css';

export default function HomeMapView() {
  return (
    <>
      <h1>Map</h1>

      <div className="home-map-container">
        <div className="home-card-container">
          <div className="home-card">
            <div className="home-card-picture">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
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
              <a href="#" className="home-btn btn-primary">
                link
              </a>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-picture">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
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
              <a href="#" className="home-btn btn-primary">
                link
              </a>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-picture">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
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
              <a href="#" className="home-btn btn-primary">
                link
              </a>
            </div>
          </div>
        </div>

        <div className="home-map">
          <img
            src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
            className="home-map-img"
            alt="..."
          />
        </div>

        
      </div>
    </>
  );
}




import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HomeMapView.css';

export default function HomeMapView() {
  return (
    <>
      <h1>Map</h1>

      <div className="container">
        <div className="map-container">
          <div className="map">
            <img
              src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
              className="map-img"
              alt="..."
            />
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-picture">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Cooking Class</h5>
              <p className="card-text">This is a cooking class</p>
              <div className="location">
                <FaMapMarkerAlt size={24} color="green" />
                <p className="location-text">Oakland, CA</p>
              </div>
              <a href="#" className="btn btn-primary">
                link
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-picture">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Cooking Class</h5>
              <p className="card-text">This is a cooking class</p>
              <div className="location">
                <FaMapMarkerAlt size={24} color="green" />
                <p className="location-text">Oakland, CA</p>
              </div>
              <a href="#" className="btn btn-primary">
                link
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-picture">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Cooking Class</h5>
              <p className="card-text">This is a cooking class</p>
              <div className="location">
                <FaMapMarkerAlt size={24} color="green" />
                <p className="location-text">Oakland, CA</p>
              </div>
              <a href="#" className="btn btn-primary">
                link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

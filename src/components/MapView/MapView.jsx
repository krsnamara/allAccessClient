import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapAPI from "../MapAPI/MapAPI";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import "./MapView.css";

function MapView({ evnts }) {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  const loaded = () => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    return (
      <>
        <div className="home-map-container">
          <div className="home-map">
            <MapAPI
              apiKey={googleMapsApiKey}
              evnts={evnts}
              className="home-map-img"
            />
          </div>
          <div className="home-card-container">
            {evnts.slice(0, visibleCards).map((evnt) => (
              <div key={evnt._id} className="home-card">
                <div className="home-card-picture">
                  <img
                    src={evnt.imageUrl}
                    alt={evnt.imageUrl}
                    className="home-card-img-top"
                  />
                </div>
                <div className="home-card-body">
                  <Link
                    to={`/events/${evnt._id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5 className="home-card-title">{evnt.name}</h5>
                    <div className="mapLocationRating">
                      <div className="mapLocation-wrapper">
                        <img
                          src={LocationIcon}
                          alt="locationIcon"
                          className="mapLocationIcon"
                        />
                        <p className="mapLocationText">{evnt.address}</p>
                      </div>
                      <div className="mapRatingWrapper">
                        <p className="mapRatingText">4.0</p>
                        <p className="mapRating-amount">{"(487)"}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            {visibleCards < evnts.length && (
              <p onClick={handleLoadMore} className="mapLoadMore">
                Load more
              </p>
            )}
          </div>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{evnts ? loaded() : loading()}</section>;
}

export default MapView;

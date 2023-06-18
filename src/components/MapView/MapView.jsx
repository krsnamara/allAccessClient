import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapAPI from "../MapAPI/MapAPI";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import "./MapView.css";

function MapView({ images }) {
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
            <MapAPI apiKey={googleMapsApiKey} className="home-map-img" />
          </div>
          <div className="home-card-container">
            {images.slice(0, visibleCards).map((image) => (
              <div key={image._id} className="home-card">
                <div className="home-card-picture">
                  <img
                    src={image.imageUrl}
                    alt={image.imageUrl}
                    className="home-card-img-top"
                  />
                </div>
                <div className="home-card-body">
                  <Link
                    to={`/images/${image._id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <p className="home-card-title">{image.name}</p>
                    <div className="mapLocationRating">
                      <div className="mapLocation-wrapper">
                        <img
                          src={LocationIcon}
                          alt="locationIcon"
                          className="mapLocationIcon"
                        />
                        <p className="mapLocationText">{image.address}</p>
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
            {visibleCards < images.length && (
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

  return <section>{images ? loaded() : loading()}</section>;
}

export default MapView;

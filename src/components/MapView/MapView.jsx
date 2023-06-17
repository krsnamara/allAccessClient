import React from "react";
import { Link } from "react-router-dom";
import MapAPI from "../MapAPI/MapAPI";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import "./MapView.css";

function MapView({ images }) {
  const loaded = () => {
    const handleAlert = () => {
      window.alert("You have loaded all available for this section");
    };

    return (
      <>
        <div className="home-map">
          <MapAPI className="home-map-img" />
        </div>
        <div className="home-map-container">
          <div className="home-card-container">
            <h1 className="mapResults">Results</h1>
            {images.map((image) => (
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
                    <h5 className="home-card-title">{image.name}</h5>
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
            <p onClick={handleAlert} className="mapLoadMore">
              Load more
            </p>
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

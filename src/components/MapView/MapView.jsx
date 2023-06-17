import React from "react";
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
                  <h5 className="home-card-title">{image.name}</h5>
                  <div className="expLocation-wrapper">
                    <img
                      src={LocationIcon}
                      alt="locationIcon"
                      className="expLocationIcon"
                    />
                    <p className="expLocationText">{image.address}</p>
                  </div>
                  <div className="ratingWrapper">
                    <p className="ratingText">4.0</p>
                    <p className="rating-amount">{"(487)"}</p>
                  </div>
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

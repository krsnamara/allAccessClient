import { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MapMarker from "../../assets/buttons-icons/mapMarker.svg";
// import mapStyles from "./mapStyles";
import "./MapAPI.css";

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const center = {
  lat: 37.806,
  lng: -122.267,
};
// const markers = [
//   { lat: 37.805, lng: -122.29 },
//   { lat: 37.819, lng: -122.277 },
//   { lat: 37.817, lng: -122.23 },
//   { lat: 37.794, lng: -122.24 },
// ];

function MapAPI({ evnts }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    version: "weekly",
    googleMapsApiKey: googleMapsApiKey,
  });

  const [containerStyle, setContainerStyle] = useState({
    width: "100%",
    height: "80vh",
  });

  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      // eslint-disable-next-line
      const height = window.innerHeight;

      if (width < 800) {
        setContainerStyle({ width: "100%", height: "40vh" });
      } else if (width < 1200) {
        setContainerStyle({ width: "100%", height: "90vh" });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // eslint-disable-next-line
  const [map, setMap] = useState(null);

  const handleMarkerClick = (index) => {
    setSelectedMarkerIndex(index);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarkerIndex(null);
  };

  return isLoaded ? (
    <div className="wrapper">
      <div>
        <GoogleMap
          center={center}
          zoom={11.5}
          mapContainerStyle={containerStyle}
          options={{
            streetViewControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
            clickableIcons: false,
            disableDefaultUI: false,
            zoomControl: true,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.RIGHT_TOP,
            },
            // styles: mapStyles,
          }}
          onLoad={(map) => setMap(map)}
        >
          {evnts &&
            evnts.map((evnt, index) => (
              <Marker
                key={index}
                position={{
                  lat: evnt.lat,
                  lng: evnt.lng,
                }}
                title={evnt.name}
                options={{
                  icon: {
                    url: MapMarker,
                    scaledSize: { width: 40, height: 40 },
                  },
                }}
                onClick={() => handleMarkerClick(index)}
              />
            ))}
          {selectedMarkerIndex !== null && (
            <InfoWindow
              position={{
                lat: evnts[selectedMarkerIndex].latitude,
                lng: evnts[selectedMarkerIndex].longitude,
              }}
              onCloseClick={handleInfoWindowClose}
              options={{
                pixelOffset: new window.google.maps.Size(0, -30),
              }}
            >
              <div className="mapMarkers">
                <h3>{evnts[selectedMarkerIndex].name}</h3>
                <p>{evnts[selectedMarkerIndex].address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MapAPI;

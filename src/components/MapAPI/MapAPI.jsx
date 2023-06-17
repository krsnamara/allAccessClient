import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import MapMarker from "../../assets/buttons-icons/mapMarker.svg";
// import mapStyles from "./mapStyles";
import "./MapAPI.css";
// useJsApiLoader is a hook that loads the Google Maps JavaScript API in the background.
// useLoadScript is a hook that loads the Google Maps JavaScript API in the background.
// Marker is a component that renders a Google Maps marker.
// useMemo is a hook that memorizes the result of a function call. It is used to avoid unnecessary re-renders.

// can you use this to make a map of the world and then have the user click on the country they want to go to?

// https://developers.google.com/maps/documentation/javascript/examples/map-simple

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "50vh",
};

const center = {
  lat: 37.806,
  lng: -122.27,
};
const markers = [
  { lat: 37.805, lng: -122.29 },
  { lat: 37.819, lng: -122.277 },
  { lat: 37.817, lng: -122.23 },
  { lat: 37.794, lng: -122.24 },
];

function MapAPI() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    version: "weekly",
    googleMapsApiKey: googleMapsApiKey,
  });

  // eslint-disable-next-line
  const [map, setMap] = useState(null);

  return isLoaded ? (
    <div className="wrapper">
      <div>
        <GoogleMap
          center={center}
          zoom={12.97}
          mapContainerStyle={containerStyle}
          options={{
            streetViewControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
            clickableIcons: false,
            disableDefaultUI: false,
            zoomControl: true,
            // styles: mapStyles,
          }}
          onLoad={(map) => setMap(map)}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              title="testing"
              options={{
                icon: {
                  url: MapMarker,
                  scaledSize: { width: 40, height: 40 },
                },
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MapAPI;

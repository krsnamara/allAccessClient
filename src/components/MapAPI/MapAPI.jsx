import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
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
  height: "80vh",
};

const center = {
  lat: 37.806,
  lng: -122.27,
};

function MapAPI() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    version: "weekly",
    googleMapsApiKey: googleMapsApiKey,
  });

  const [map, setMap] = useState(null);

  return isLoaded ? (
    <div className="wrapper">
      <div>
        <GoogleMap
          center={center}
          zoom={12.25}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            clickableIcons: true,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MapAPI;

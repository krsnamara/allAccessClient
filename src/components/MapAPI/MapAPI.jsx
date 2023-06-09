import { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./MapAPI.css";
// useJsApiLoader is a hook that loads the Google Maps JavaScript API in the background.
// useLoadScript is a hook that loads the Google Maps JavaScript API in the background.
// Marker is a component that renders a Google Maps marker.
// useMemo is a hook that memorizes the result of a function call. It is used to avoid unnecessary re-renders.

// can you use this to make a map of the world and then have the user click on the country they want to go to?

// https://developers.google.com/maps/documentation/javascript/examples/map-simple

export default function MapAPI() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  //   console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
    >
      <MarkerF position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}

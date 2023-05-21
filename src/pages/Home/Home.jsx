import React, { useState } from 'react';
import MapToggle from '../../components/MapToggle/MapToggle';
import HomeGridView from '../../components/HomeGridView/HomeGridView';
import HomeMapView from '../../components/HomeMapView/HomeMapView';

function Home() {
  const [showMap, setShowMap] = useState(false);

  const handleToggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <div className="map-toggle">
        <MapToggle onToggle={handleToggleMap} />
      </div>

      {showMap ? (
        // Render map component
        <HomeMapView />
      ) : (
        // Render grid component
        <HomeGridView />
      )}
    </>
  );
}

export default Home;

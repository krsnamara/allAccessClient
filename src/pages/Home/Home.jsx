import React, { useState } from 'react';
import MapToggle from '../../components/MapToggle/MapToggle';
import HomeGridView from '../../components/HomeGridView/HomeGridView';
import HomeMapView from '../../components/HomeMapView/HomeMapView';
import Filter from '../../assets/Navigation_Filters.png';
import './Home.css';

function Home() {
  const [showMap, setShowMap] = useState(false);

  const handleToggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <div className="buttons">
        <MapToggle onToggle={handleToggleMap} />
        <button><img src={Filter} alt="Filter" className="filter-image" /></button>
        <button>All</button>
        <button className="mobile-hide">Classes & Workshops</button>
        <button className="mobile-hide">Bars</button>
        <button className="mobile-hide">Category</button>
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

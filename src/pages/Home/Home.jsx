import React, { useState } from "react";
import MapToggle from "../../components/MapToggle/MapToggle";
import DynamicHome from "../../components/DynamicHome/DynamicHome";
import MapView from "../../components/MapView/MapView";
import Filter from "../../assets/Navigation_Filters.png";
import "./Home.css";

function Home(props) {
  const [showMap, setShowMap] = useState(false);

  const handleToggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <div className="buttons">
        <MapToggle onToggle={handleToggleMap} />
        <button>
          <img src={Filter} alt="Filter" className="filter-image" />
        </button>
        <button>All</button>
        <button className="mobile-hide">Classes & Workshops</button>
        <button className="mobile-hide">Bars</button>
        <button className="mobile-hide">Category</button>
      </div>

      {showMap ? (
        // Render map component
        <MapView />
      ) : (
        // Render grid component
        <DynamicHome images={props.images} />
      )}
    </>
  );
}

export default Home;

import React, { useState } from "react";
import MapToggle from "../../components/MapToggle/MapToggle";
import DynamicHome from "../../components/DynamicHome/DynamicHome";
import MapView from "../../components/MapView/MapView";
import Filter from "../../assets/buttons-icons/nav-filters.svg";
import NavAll from "../../components/NavFilters/NavAll/NavAll.jsx";
import NavBars from "../../components/NavFilters/NavBars/NavBars.jsx";
import Classses from "../../assets/buttons-icons/nav-filters-classes.svg";
import Bars from "../../assets/buttons-icons/nav-filters-bars.svg";
import Next from "../../assets/buttons-icons/nav-filters-next.svg";
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
        <button>
          <NavAll />
        </button>
        <button className="mobile-hide">
          <img src={Classses} alt="Classses" className="filter-image" />
        </button>
        <button className="mobile-hide">
          <NavBars />
        </button>
        <button className="mobile-hide">
          <img src={Next} alt="Next" className="filter-image" />
        </button>
      </div>

      {showMap ? (
        // Render map component
        <MapView images={props.images} />
      ) : (
        // Render grid component
        <DynamicHome images={props.images} />
      )}
    </>
  );
}

export default Home;

import React, { useState } from "react";
import "./MapToggle.css";
import Grid from "../../assets/buttons-icons/grid-view.svg";
import Map from "../../assets/buttons-icons//map-view.svg";

export default function MapToggle({ onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <div className="checkbox-wrapper-8">
      <input
        type="checkbox"
        id="cb3-8"
        className="tgl tgl-skewed"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="cb3-8" className="tgl-btn">
        <img
          src={isChecked ? Map : Grid}
          alt={isChecked ? "Map" : "Grid"}
          className="toggle-image"
        />
      </label>
    </div>
  );
}

// https://uiverse.io/Shoh2008/average-duck-41

import React, { useState } from "react";
import "./MapToggle.css";
import Grid from "../../assets/Grid_View.png";
import Map from "../../assets/map_view.png";

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
          src={isChecked ? Grid : Map}
          alt={isChecked ? "Grid" : "Map"}
          className="toggle-image"
        />
      </label>
    </div>
  );
}

// https://uiverse.io/Shoh2008/average-duck-41

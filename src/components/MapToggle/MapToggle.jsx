import React from 'react';
import './MapToggle.css';

export default function MapToggle({ onToggle }) {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <div className="checkbox-wrapper-8">
      <input type="checkbox" id="cb3-8" className="tgl tgl-skewed" onChange={handleToggle} />
      <label htmlFor="cb3-8" data-tg-on="Map" data-tg-off="Grid" className="tgl-btn"></label>
    </div>
  );
}

// https://uiverse.io/Shoh2008/average-duck-41

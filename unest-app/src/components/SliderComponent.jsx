// src/components/SliderComponent.js
import React from 'react';
import Slider from '@mui/material/Slider';
// import '@mui/material/Slider/dist/Slider.css';

const SliderComponent = ({ value, onChange }) => {
  return (
    <Slider
      value={value}
      onChange={onChange}
      min={300}
      max={2000}
      step={25}
      valueLabelDisplay="auto"
    />
  );
};

export default SliderComponent;

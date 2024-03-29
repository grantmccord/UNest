// src/components/SliderComponent.js
import React from 'react';
import Slider from '@mui/material/Slider';
// import '@mui/material/Slider/dist/Slider.css';

const SliderComponent = ({ value, onChange }) => {
  const marks = [
    {
      value: 300,
      label: '$300'
    },
    {
      value: 1150,
      label: '$1150'
    },
    {
      value: 2000,
      label: '$2000'
    },
  ]

  return (
    <Slider
      value={value}
      onChange={onChange}
      min={300}
      max={2000}
      defaultValue={2000}
      valueLabelDisplay="off"
      marks={marks}
    />
  );
};

export default SliderComponent;

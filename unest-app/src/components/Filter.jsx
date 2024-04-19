import { useState } from 'react';
import { Radio } from "@material-tailwind/react";
import Slider from '@mui/material/Slider';
import SliderComponent from "./SliderComponent";
 
export default function Filter({ handleFilter, handleSlider, sliderValue }) {

  function handleButtons(param) {
    handleFilter(param);
  }

  function handleBar(value) {
    handleSlider(value); 
  }

  return (
    <div className="flex-row">
      Sort by:
      <div className='space-x-4'>
        {/* <input
          type='radio'
          name='Room Type'
          value='Room Type'
          


          
        /> */}
        <Radio onChange={(e) => handleButtons(e.target.value)} name="type" label="Room Type" value='Room Type' />
        <Radio onChange={(e) => handleButtons(e.target.value)} name="type" label="Bedroom Count" value='Bedroom Count' />
      </div>
      <div>
        Max Price: {sliderValue}
        <Slider
          min={300}
          max={2000}
          defaultValue={sliderValue}
          valueLabelDisplay="off" // doesnt work; maybe some css somewhere else breaks this
          onChange={(event) => handleBar(event.target.value)}
        />
      </div>
    </div>
  );
}
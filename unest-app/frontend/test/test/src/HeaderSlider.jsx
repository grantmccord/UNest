import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function MyDropdownWithSlider() {
  const [sliderValue, setSliderValue] = useState(50); // Initial value

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
      <select className="border rounded p-2">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>

      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        min={0}
        max={100}
        step={1}
        valueLabelDisplay="auto"
      />

      {/* Additional buttons */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
    </div>
  );
}

export default MyDropdownWithSlider;

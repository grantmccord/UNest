import React from 'react';
import { Slider } from '@mui/material';
import { Radio } from "@material-tailwind/react";

function SearchBar({ handleFilter, handleSlider, handleChange, handleClick, sliderValue }) {
  
  function handleButtons(param) {
    handleFilter(param);
  }

  function handleBar(value) {
    handleSlider(value); 
  }

  function handleText(value) {
    handleChange(value);
  }

  function handleSearch() {
    handleClick();
  }

  return <>
    <div>
      <div className="space-y-10">
        {/* Input field for search criteria */}
        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="bg-gray-100 outline-none" onChange={(e) => handleText(e.target.value)} type="text" placeholder="Property/University Name" />
          </div>
          <div className="flex-row">
            Sort by:
            <div className='space-x-4'>
              <Radio onChange={(e) => handleButtons(e.target.value)} name="type" label="Room Type" value='Room Type' />
              <Radio onChange={(e) => handleButtons(e.target.value)} name="type" label="Bedroom Count" value='Bedroom Count' />
            </div>
            <div>
              Max Price: {sliderValue}
              <Slider
                min={300}
                max={2000}
                defaultValue={sliderValue}
                valueLabelDisplay="off" 
                onChange={(event) => handleBar(event.target.value)}
              />
            </div>
          </div>
          <div onClick={handleSearch} className="bg-red-400 py-3 px-5 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <div>Search</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SearchBar;
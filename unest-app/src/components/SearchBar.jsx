import React, { Component, useState } from 'react';
import Filter from "./Filter.jsx";
import SliderComponent from './SliderComponent.jsx';
import { slider } from '@material-tailwind/react';

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sliderValue, setSliderValue] = useState(2000); //max value a property can have

  function handleChange(data) {
    // Update the state when input value changes
    setInputValue(data);
  };

  function handleFilter(data) {
    setFilterValue(data);
  }

  function handleSlider(data) {
    setSliderValue(data);
  }

  function handleClick() {
    // Access the input value when the button is clicked
    alert('Input value is: ' + inputValue + '\nFilter value is:' + filterValue + '\nSlider value is: ' + sliderValue);
  };



  return <>
    <div>
      <div className="space-y-10">
        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="bg-gray-100 outline-none" onChange={handleChange} type="text" placeholder="Property/University Name" />
          </div>
          <Filter handleFilter={handleFilter} handleSlider={handleSlider} sliderValue={sliderValue}/>
          <div onClick={handleClick} className="bg-red-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <div>Search</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SearchBar;
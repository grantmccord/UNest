import React, { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import email from "../Assets/email.png";
import Properties from "./Properties.jsx";
import bird from "../Assets/bird.png";
import {
    useNavigate,
  } from "react-router-dom";

  

const Header = () => {
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
    const navigate = useNavigate();

    const navigateToMessages = () => {
      navigate('/messages', {replace: true});
    };

    const navigateToPostPage = () => {
        navigate('/post', {replace: true});
      };

      // React.useEffect(() => {
      //   document.body.style.overflow = "hidden";
      //   return () => {
      //     document.body.style.overflow = "scroll";
      //   };
      // }, []);

    return ( <div>
        <div className="sticky top-0 z-20 bg-white">
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <img src={bird} width={100} height={100} alt="" />
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar handleFilter={handleFilter} handleSlider={handleSlider} handleChange={handleChange} handleClick={handleClick} sliderValue={sliderValue}/>
                    <div className="flex space-x-5">
                        <button onClick={navigateToMessages} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <img src={email} width={25} height={25} alt="" />
                            <div>Messages</div>
                        </button>
                        <button onClick={navigateToPostPage} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <div>Create Post</div>
                        </button>
                    </div>
                </nav>
            </header>
            
        </div>
        <Properties inputValue={inputValue} filterValue={filterValue} sliderValue={sliderValue} />
        </div>
    );
}
export default Header;
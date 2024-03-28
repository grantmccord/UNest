import SearchBar from "./SearchBar.jsx";
import HeaderSlider from './HeaderSlider.jsx';
import React from 'react';
// import email from "../Assets/email.png";
// import bird from "../Assets/bird.jpg";
import {
    useNavigate,
  } from "react-router-dom";

  

const Header = () => {

    const [value, setValue] = React.useState([20, 80]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="sticky top-0">
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar />
                    <HeaderSlider />
                    <input type="range" min="0" max="100" value="20" class="range w-40" />
                </nav>
            </header>
        </div>
    );
}
export default Header;
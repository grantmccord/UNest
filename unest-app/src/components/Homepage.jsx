import React, { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import email from "../Assets/email.png";
import Properties from "./Properties.jsx";
import bird from "../Assets/bird.png";
import profileImg from "../Assets/pic_of_me3.jpeg";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import { useNavigate } from "react-router-dom";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sliderValue, setSliderValue] = useState(2000); // max value a property can have

  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor element
  const isMenuOpen = Boolean(anchorEl); // Determine if the menu is open

  const handleChange = (data) => {
    // Update the state when input value changes
    setInputValue(data);
  };

  const handleFilter = (data) => {
    setFilterValue(data);
  };

  const handleSlider = (data) => {
    setSliderValue(data);
  };

  const handleMenuClick = (event) => {
    // Open the menu
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    // Close the menu
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const navigateToMessages = () => {
    navigate('/messages', { replace: true });
  };

  const navigateToPostPage = () => {
    navigate('/myplaces', { replace: true });
  };

  return (
    <div>
      <div className="sticky top-0 z-20 bg-white">
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <img src={bird} width={100} height={100} alt="" />
            <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
            <SearchBar
              handleFilter={handleFilter}
              handleSlider={handleSlider}
              handleChange={handleChange}
              handleClick={() => alert(`Input value is: ${inputValue}\nFilter value is: ${filterValue}\nSlider value is: ${sliderValue}`)}
              sliderValue={sliderValue}
            />
            <div className="flex space-x-5">
              {/* Navigation Buttons */}
              {/* <button onClick={navigateToMessages} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <img src={email} width={25} height={25} alt="" />
                <div>Messages</div>
              </button>
              <button onClick={navigateToPostPage} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <div>Create Post</div>
              </button> */}

              {/* Avatar Menu */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleMenuClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={isMenuOpen ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isMenuOpen ? 'true' : undefined}
                >
                  <Avatar alt="Profile Image" src={profileImg} sx={{ width: 80, height: 80 }} />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={isMenuOpen}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleMenuClose}>
                  View My Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuClose}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </nav>
        </header>
      </div>
      <Properties inputValue={inputValue} filterValue={filterValue} sliderValue={sliderValue} />
    </div>
  );
};

export default Header;

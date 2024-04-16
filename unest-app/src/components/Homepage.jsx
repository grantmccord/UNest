import React, { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import email from "../Assets/email.png";
import Properties from "./Properties.jsx";
import bird from "../Assets/bird.png";
import profileImg from "../Assets/square_pic_of_me.png";
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import Divider from '@mui/material/Divider';

import { useNavigate } from "react-router-dom";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sliderValue, setSliderValue] = useState(2000); // max value a property can have

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

  const navigate = useNavigate();

  const navigateToMessages = () => {
    navigate('/messages', { replace: true });
  };

  const navigateToPostPage = () => {
    navigate('/myplaces', { replace: true });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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


              {/* <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-center space-x-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <img
                    //src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                    src={profileImg}
                    class="h-32 w-32 rounded-full"
                    alt="" />
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      View My Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div> */}

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className='h-0'>
                    <div class="mb-4">
                      <img
                        //src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                        src={profileImg}
                        class="h-32 w-32 rounded-full"
                        alt="" />
                    </div>

                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/profile" className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}> My Profile </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/messages" className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}> Message </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/myplaces/view" className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}> Post Listing </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/myplaces/view" className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}> View Map </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/login" className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}> Logout </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
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



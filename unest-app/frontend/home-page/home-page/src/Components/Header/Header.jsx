import './Header.css';
import React from 'react';
import MessagesButton from "../MessagesButton/MessagesButton";
import SearchBar from "../SearchBar/SearchBar"

const Header = () => {
    return(
      <div className='header'>
        <div className='buttonWidthElement'>
            <SearchBar/>
        </div>
        <h1 className='title'>
            UNest
        </h1>
        <div className='buttonWidthElement'>
            <MessagesButton/>
        </div>
      </div>
    );
}

export default Header;
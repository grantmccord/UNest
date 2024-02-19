import './Header.css';
import React from 'react';
import MessagesButton from "../MessagesButton/MessagesButton";

const Header = () => {
    return(
      <div className='header'>
        <div className='overlap'>
            <h1 className='title'>
                UNest
            </h1>
        </div>
        <div className='overlap msg'>
            <MessagesButton/>
        </div>
      </div>
    );
}

export default Header;
import React, {useState} from 'react';
import {
    useNavigate,
  } from "react-router-dom";
import './MessageOwner.css';
import back from '../Assets/back.png';
import profileIcon from '../Assets/Profile.png';
import send from '../Assets/send.png';

const MessageOwner = () => {
    const [inputMessage, setInputMessage] = useState('Message');

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleClick = () => {
        setInputMessage('');
    };

    const navigate = useNavigate();

    const navigateToMsg = () => {
        navigate('/messages', {replace: true})
    }

    const navigateToProfile = () => {
        navigate('/profile', {replace: true})
    }


    return (
        <div>
        <div className='back'>
        <img src={back} alt="" onClick={navigateToMsg} style={{width: "70px", height: "70px"}} />
        </div>
        <div className='prof'>
        <img src={profileIcon} alt="" onClick={navigateToProfile} style={{width: "70px", height: "70px"}} />
        </div>
        <div className="name" onClick={navigateToProfile}>
        <h1>Owner Name</h1>
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>username</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div className="mes1">
        <button style={{backgroundColor: "#EA5455", color: "black", width: "700px", height: "100px", textDecoration: "none"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Do you have any questions?</p>
        </button>
        </div>
        <div className="mes2">
        <button style={{backgroundColor: "#EA5455", color: "black", width: "700px", height: "100px", textDecoration: "none"}}>
        <p style={{position: "relative", top: "20px"}}>Yes, what is the surrounding like?</p>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", top: "-30px", left: "630px"}} />
        </button>
        </div>
        <div className="search">
        <input type="text" value={inputMessage} onChange={handleInputChange} onClick={handleClick} style={{width: "1200px", textAlign: "center", position: "relative", left:"-185px"}}/>
        <img src={send} alt="" style={{width: "50px", height: "50px", position: "relative", top: "12px", left: "-237px"}} /> 
        </div>
        </div>
    );
};

export default MessageOwner;
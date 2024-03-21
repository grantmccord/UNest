import React, {useState} from 'react';
import {
    useNavigate,
  } from "react-router-dom";
import './MessageTenant.css';
import back from '../Assets/back.png';
import profileIcon from '../Assets/Profile.png';
import send from '../Assets/send.png';

const MessageTenant = () => {
    const [inputMessage, setInputMessage] = useState('Message');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleBlur = () => {
        if (!inputMessage.trim() && !isFocused) {
            setInputMessage('Message');
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (inputMessage === 'Message') {
            setInputMessage('');
        }
    };

    const handleUnFocus = () => {
        setIsFocused(false);
    };

    const navigate = useNavigate();

    const navigateToMsg = () => {
        navigate('/messages', {replace: true})
    };

    const navigateToTProfile = () => {
        navigate('/tenantprofile', {replace: true})
    };

    return (
        <div>
        <div className='back'>
        <img src={back} alt="" onClick={navigateToMsg} style={{width: "70px", height: "70px"}} />
        </div>
        <div className='prof'>
        <img src={profileIcon} alt="" onClick={navigateToTProfile} style={{width: "70px", height: "70px"}} />
        </div>
        <div className="name" onClick={navigateToTProfile}>
        <h1>Tenant Name</h1>
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>username</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div className="mess1">
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Hi! Are you interested in this property?</p>
        </button>
        </div>
        <div className="mess2">
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
        <p style={{position: "relative", top: "20px"}}>Yes, I am interested!</p>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", top: "-30px", left: "630px"}} />
        </button>
        </div>
        <div className="search">
        <input type="text" value={inputMessage} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} style={{width: "1200px", textAlign: "center", position: "relative", left:"-185px"}}/>
        <img src={send} alt="" style={{width: "50px", height: "50px", position: "relative", top: "12px", left: "-237px"}} /> 
        </div>
        </div>
    );
};


export default MessageTenant;
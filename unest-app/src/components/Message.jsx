import React, {useRef, useState} from 'react';
import {
    useNavigate, useParams
  } from "react-router-dom";
import './Message.css';
import back from '../Assets/back.png';
import profileIcon from '../Assets/Profile.png';
import send from '../Assets/send.png';

const Message = () => {
    const [inputMessage, setInputMessage] = useState('Message');
    const [isFocused, setIsFocused] = useState(false);
    const [enteredValues, setEnteredValues] = useState([]);
    //const divRef = useRef(null);

    const {itemName} = useParams();
    const queryParams = new URLSearchParams(window.location.search);
    const encodedData = queryParams.get('data');
    const decodedData = JSON.parse(decodeURIComponent(encodedData));

    const addEnteredValue = () => {
        setEnteredValues([...enteredValues, inputMessage]);
        setInputMessage(''); 
        //divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    };

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            addEnteredValue();
        }
    };

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
        <h1>{itemName}</h1>
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>{decodedData.a2}</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div>
        {enteredValues.map((value, index) => (
            <div className="type" key={index}>
            <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
            <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", left: "630px"}} />
            <p style={{position: "relative", top: "-40px"}}>{value}</p>
            </button>
            </div>
        ))} 
        </div>
        <div>
        <div className="search1">
        <input type="text" value={inputMessage} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} onKeyDown={keyPress} style={{width: "1200px", textAlign: "center", position: "relative", left:"-185px"}}/>
        <img src={send} alt="" onClick={addEnteredValue} style={{width: "50px", height: "50px", position: "relative", top: "12px", left: "-237px"}} /> 
        </div>
        </div>
        </div>
        );
};

export default Message;
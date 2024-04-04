import React, {useRef, useEffect, useState, useParams} from 'react';
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
    const [enteredValues, setEnteredValues] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [buttonIndex, setButtonIndex] = useState(null);
    //const divRef = useRef(null);

    useEffect(() => {
        const savedEnteredValues = localStorage.getItem('enteredValues');
        if (savedEnteredValues) {
            setEnteredValues(JSON.parse(savedEnteredValues));
        }
    }, []);

    const deleteMessage = (index) => {
        setButtonIndex(index);
        setShowOptions(true);
    };

    const updateChat = () => {
        setEnteredValues((prev) => {
            const updateMsg = [...prev];
            updateMsg.splice(buttonIndex, 1);
            const newArr = JSON.parse(localStorage.getItem('enteredValues'));
            // if (Array.isArray(newArr) && newArr.length > 0) {
            //     newArr.pop();
            // }
            // localStorage.setItem('enteredValues', JSON.stringify(newArr));
            return updateMsg;
        });
        setShowOptions(false);
    };

    const addEnteredValue = (event) => {
        event.preventDefault();
        if (inputMessage.trim() !== '') {
            const newValues = [...enteredValues, inputMessage];
            localStorage.setItem('enteredValues', JSON.stringify(newValues)); 
            setEnteredValues(newValues);
            setInputMessage(''); 
            //divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            addEnteredValue(event);
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
        <h1>Tenant Name</h1>
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>username</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div className="mess1">
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", left: "630px"}} />
        <p style={{position: "relative", top: "-40px"}}>Hi! Are you interested in this property?</p>
        </button>
        </div>
        <div className="mess2">
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
        <p style={{position: "relative", top: "20px"}}>Yes, I am interested!</p>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", top: "-30px"}} />
        </button>
        </div>
        <div>
        {enteredValues.map((value, index) => (
            <div className="type" key={index}>
            <button onClick={() =>deleteMessage(index)} style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
            <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", left: "630px"}} />
            <p style={{position: "relative", top: "-40px"}}>{value}</p>
            </button>
            {showOptions && buttonIndex === index && (
                <div style={{ position: 'absolute', top: '100%', left: 0 }}>
                    <button onClick={updateChat} style={{position: "relative", top: "-30px", left: "600px"}}>
                        Delete
                    </button>
                </div>
            )}
            </div>
        ))} 
        </div>
        <div>
        <div className="search">
        <form onSubmit={(e) => addEnteredValue(e)}>
        <input type="text" value={inputMessage} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} onKeyDown={(e) => keyPress(e)} style={{width: "1200px", textAlign: "center", position: "relative", left:"-240px"}}/>
        <img src={send} alt="Enter" onClick={addEnteredValue} style={{width: "50px", height: "50px", position: "relative", top: "-62px", left: "908px", cursor: "pointer"}} /> 
        </form>
        </div>
        </div>
        </div>
    );
};


export default MessageTenant;
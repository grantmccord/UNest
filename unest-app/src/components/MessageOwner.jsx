import React, {useEffect, useState} from 'react';
import {
    useNavigate,
  } from "react-router-dom";
import './MessageOwner.css';
import axios from 'axios';
import back from '../Assets/back.png';
import profileIcon from '../Assets/Profile.png';
import send from '../Assets/send.png';

const MessageOwner = () => {
    const [inputMessage, setInputMessage] = useState('Message');
    const [isFocused, setIsFocused] = useState(false);
    const [enteredValues, setEnteredValues] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [buttonIndex, setButtonIndex] = useState(null);

    useEffect(() => {
        const savedEnteredValues = localStorage.getItem('enteredValues2');
        if (savedEnteredValues) {
            setEnteredValues(JSON.parse(savedEnteredValues));
        }
    }, []);

    const deleteMessage = (index) => {
        setButtonIndex(index);
        if (index === enteredValues.length - 1) {
            setShowOptions(true);
        }
    };

    const delMesg = async (id) => {
        try {
            await axios.delete(`/deleteMessage/${id}`);
            console.log("Id: ", id);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const updateChat = async () => {
        const delMsg = [...enteredValues];
        delMsg.pop();
        try {
            const senderUsername = 'raml10';
            const receiverUsername = 'owner123';
            const response = await axios.get(`/messages/${senderUsername}/${receiverUsername}`);
            const id = response.data.recMsg;
            console.log("Got id: ", id);
            delMesg(id);
        }
        catch(error) {
            console.error('Error fetching id', error);
        }
        localStorage.setItem('enteredValues2', JSON.stringify(delMsg));
        setEnteredValues(delMsg);
        setShowOptions(false);
    };

    const addEnteredValue = async (event) => {
        event.preventDefault();
        if (inputMessage.trim() !== '') {
            const newValues = [...enteredValues, inputMessage];
            try {
                const addMsg = {
                    text: inputMessage, 
                    time: new Date().toISOString(),
                    senderfn: "Ram",
                    senderln: "Laxminarayan",
                    senderUsername: "raml10",
                    receiverfn: "Owner",
                    receiverln: "Name",
                    receiverUsername: "owner123",
                };
                const response = await axios.post('/sendMessage', addMsg);
                console.log('Msg sent to db: ', response.data);
            } catch (error) {
                console.error("Message not put in db: ", error);
            }

            localStorage.setItem('enteredValues2', JSON.stringify(newValues)); 
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
    }

    const navigateToProfile = () => {
        navigate('/ownerprofile', {replace: true})
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
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>owner123</p>
        <p style={{position: "relative", top: "15px", left: "-120px", fontSize: "30px"}}>Property Name</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div className="mes1">
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Do you have any questions?</p>
        </button>
        </div>
        <div className="mes2">
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
        <p style={{position: "relative", top: "20px"}}>Yes, what is the surrounding like?</p>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", top: "-30px", left: "630px"}} />
        </button>
        </div>
        <div>
        {enteredValues.map((value, index) => (
            <div className="type1" key={index}>
            <button onClick={() =>deleteMessage(index)} style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
            <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", left: "630px"}} />
            <p style={{position: "relative", top: "-40px"}}>{value}</p>
            </button>
            {showOptions && buttonIndex === index && index === enteredValues.length - 1 && (
                <div style={{ position: 'absolute', top: '100%', left: 0 }}>
                    <button onClick={updateChat} style={{color: "black", backgroundColor: "white", border: "2px solid black", position: "relative", top: "-30px", left: "600px"}}>
                        Delete
                    </button>
                </div>
            )}
            </div>
        ))} 
        </div>
        <div className="search">
         {/* <form onSubmit={(e) => addEnteredValue(e)}> */}
         <input type="text" value={inputMessage} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} onKeyDown={(e) => keyPress(e)} style={{width: "1200px", textAlign: "center", position: "relative", left:"-240px"}}/>
        <img src={send} alt="Enter" onClick={addEnteredValue} style={{width: "50px", height: "50px", position: "relative", top: "12px", left: "-292px", cursor: "pointer", zIndex: 2}} /> 
        {/* </form> */}
        </div>
        </div>
    );
};

export default MessageOwner;
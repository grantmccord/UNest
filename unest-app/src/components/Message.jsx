import React, {useRef, useEffect, useState} from 'react';
import {
    useNavigate, useParams
  } from "react-router-dom";
import './Message.css';
import axios from 'axios';
import back from '../Assets/back.png';
import profileIcon from '../Assets/Profile.png';
import send from '../Assets/send.png';


const Message = () => {
    const [inputMessage, setInputMessage] = useState('Message');
    const [isFocused, setIsFocused] = useState(false);
    const [enteredValues, setEnteredValues] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [buttonIndex, setButtonIndex] = useState(null);
    const [firstname, setFirstName] = useState('Ram');
    const [lastname, setLastName] = useState('Laxminarayan');
    const [username, setUsername] = useState('raml10');
    const [messages, setMessages] = useState([]);
    //const divRef = useRef(null);

    const {itemName} = useParams();
    const queryParams = new URLSearchParams(window.location.search);
    const encodedData = queryParams.get('data');
    const decodedData = JSON.parse(decodeURIComponent(encodedData));

    useEffect(() => {
        fetchProfile(); 
    }, []);

    useEffect(() => {
        const savedEnteredValues = localStorage.getItem(`enteredValues-${username}-${decodedData.a3}`);
        console.log("save: ", savedEnteredValues);
        console.log("user: ", username);
        if (savedEnteredValues) {
            setEnteredValues(JSON.parse(savedEnteredValues));
        }
        console.log("Enter: ", enteredValues);
        const saveLastMsg = localStorage.getItem(`lastMessage-${username}-${decodedData.a3}`);
    }, [itemName, username, decodedData.a3]);

    useEffect(() => {
        fetchMessages();
        console.log("Msgs: ", messages);
    }, [username, decodedData.a3]);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('/profile');
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setUsername(response.data.username);
            console.log("Username: ", response.data.username);
        }
        catch (error) {
            console.error("Error fetching msgs", error);
        }
    };

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`/msg/${username}/${decodedData.a3}`);
            console.log("username: ", username);
            console.log("decoded data", decodedData.a3);
            setMessages(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

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
            const senderUsername = username;
            const receiverUsername = decodedData?.a3;
            const response = await axios.get(`/messages/${senderUsername}/${receiverUsername}`);
            const id = response.data.recMsg;
            console.log("Got id: ", id);
            delMesg(id);
        }
        catch(error) {
            console.error('Error fetching id', error);
        }
        localStorage.setItem(`enteredValues-${username}-${decodedData.a3}`, JSON.stringify(delMsg));
        if (delMsg.length > 0) {
            localStorage.setItem(`lastMessage-${username}-${decodedData.a3}`, delMsg[delMsg.length - 1]);
        }
        else {
            localStorage.setItem(`lastMessage-${username}-${decodedData.a3}`, ''); 
        }
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
                    senderfn: firstname,
                    senderln: lastname,
                    senderUsername: username,
                    receiverfn: itemName,
                    receiverln: decodedData?.a2,
                    receiverUsername: decodedData?.a3,
                };
                const response = await axios.post('/sendMessage', addMsg);
                console.log('Msg sent to db: ', response.data);
                fetchMessages();
            } catch (error) {
                console.error("Message not put in db: ", error);
            }
            localStorage.setItem(`enteredValues-${username}-${decodedData.a3}`, JSON.stringify(newValues)); 
            setEnteredValues(newValues);
            localStorage.setItem(`lastMessage-${username}-${decodedData.a3}`, inputMessage);
            console.log("Last msg: ", `lastMessage-${username}-${decodedData.a3}`);
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
        <h1>{itemName} {decodedData?.a2}</h1>
        {decodedData?.a3 && (
        <p style={{display: "flex", position: "relative", top: "30px", left: "-130px", fontSize: "30px"}}>{decodedData.a3}</p>
        )}
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div>
        {messages.map((message, index) => (
            <div style={{display: "flex", position: "relative", top: '-120px', left: username === message.senderUsername ? '720px' : '0px'}} key={index}>
             <button onClick={() =>deleteMessage(index)} style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
            <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", left: "630px"}} />
            <p style={{position: "relative", top: "-40px"}}>{message.text}</p>
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
        <div>
        {/* {enteredValues.map((value, index) => (
            <div className="type" key={index}>
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
        ))}  */}
        </div>
        <div>
        <div className="search1">
        {/* <form onSubmit={(e) => addEnteredValue(e)}> */}
        <input type="text" value={inputMessage} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} onKeyDown={(e) => keyPress(e)} style={{width: "1200px", textAlign: "center", position: "relative", left:"-240px"}}/>
        <img src={send} alt="Enter" onClick={addEnteredValue} style={{width: "50px", height: "50px", position: "relative", top: "12px", left: "-292px", cursor: "pointer", zIndex: 2}} /> 
        {/* </form> */}
        </div>
        </div>
        </div>
        );
};

//export {savedEnteredValues};
export default Message;
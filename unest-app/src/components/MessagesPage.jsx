import React, {useEffect, useState} from 'react';
import {
    useNavigate, useParams, Link
  } from "react-router-dom";
import axios from 'axios';
import './MessagesPage.css';
import Logo from '../Assets/Logo.png';
import House from '../Assets/house.png';
import profileIcon from '../Assets/Profile.png';
import { savedEnteredValues } from './Message';

function MessagesPage() {
    const [inputSearch, setInputSearch] = useState('Search');
    const [isFocused, setIsFocused] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [display, setDisplay] = useState(true);
    const [user, setUser] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [msg, setmsg] = useState('');
    const [ownerMsg, setOwnerMsg] = useState('');
    const [rmMsg, setRmMsg] = useState('');
    const [chatStr, setChatStr] = useState([]);
    const [lastMsg, setLastMsg] = useState({});
    const {itemName} = useParams();

    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('enteredValues')) || [];
        const ownMessages = JSON.parse(localStorage.getItem('enteredValues2')) || [];
        if (messages) {
            const lastMessage = messages[messages.length - 1];
            setmsg(lastMessage);
        }
        else {
            setmsg('Yes, I am interested!');
        }
        if (ownMessages) {
            const lstMessage = ownMessages[ownMessages.length - 1];
            setOwnerMsg(lstMessage);
        }
        else {
            setOwnerMsg('Yes, what is the surrounding like?');
        }
        const buttonClicked = localStorage.getItem('isButtonClicked1');
        if (buttonClicked) {
            setIsClicked(true);
        }

        const rm = JSON.parse(localStorage.getItem('enteredValues3')) || [];
        setChatStr(rm);
        if (rm) {
          const lstRm = rm[rm.length - 1];
          setRmMsg(lstRm);
        }
        const allName = ['john-jones', 'walker-smith', 'pete-day', 'jose-stricker'];
        const msg = {};
        allName.forEach((name) => {
            const lst = localStorage.getItem(`lastMessage-${name}`);
            console.log("Name: ", name);
            if (lst) {
              msg[name] = lst;
            }
        });
        console.log("Msg: ", msg);
        setLastMsg(msg);
        const hi = localStorage.getItem(`lastMessage-sud`); 
        console.log("LM: ", hi);
        getInfo();
        /*
        getInfo().then((d) => {
            console.log(d);
             setUser(d);})
             .catch(error => {console.error('Error fetching', error);});
             */
    }, [itemName]);

    
        const getInfo = async () => {
          //setShowOptions(true);
          try {
            const response = await axios.get('/api/users');
            console.log("Connects");
            console.log("Response.data: ", response.data);
            setUser(response.data);
            return response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    

    const toggle = () => {
        setDisplay(!display);
    };

    const handleInputChange = (event) => {
        setInputSearch(event.target.value);
    };

    const handleBlur = () => {
        if (!inputSearch.trim() && !isFocused) {
            setInputSearch('Search');
        }

    };

    const handleFocus = () => {
        setIsFocused(true);
        if (inputSearch === 'Search') {
            setInputSearch('');
        }
        setShowOptions(true);
    };

    const click = () => {
        setShowOptions(true);
    };

    const fetchUsers = async () => {
        return getInfo().then((d) => {
            console.log(d);
             setUser(d);})
             .catch(error => {console.error('Error fetching', error);});
        //return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((d) => setSearchResults(d))
    };

    const handleUnFocus = () => {
      setIsFocused(false);
    };

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/homepage', {replace: true})
    }

    const navigateToProfile = () => {
        navigate('/profile', {replace: true})
    }

    const navigateToOwner = () => {
        navigate('/messageOwner', {replace: true})
    }

    const navigateToRM = () => {
      navigate('/messagerm', {replace: true})
  }

    const navigateToOther = () => {
        setIsClicked(true);
        localStorage.setItem('isButtonClicked1', true);
        navigate('/message', {replace: true});
    } 

    return (
        <div>
        <div>
            <img src={Logo} alt="" style={{width: "100px", height: "100px"}} />
        </div>
        <div>
            <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium" style={{position: "relative", top: "-70px", left :"550px", backgroundColor: "#EA5455", color: "white", width: "300px"}}>Chat Messages</h1>
        </div>
        <div className="house">
        <img src={House} alt="" onClick={navigateToHome} style={{width: "50px", height: "50px"}} />
        </div>
        <div className="profile">
        <img src={profileIcon} alt="" onClick={navigateToProfile} style={{width: "50px", height: "50px"}} />
        </div>
        <div className="search">
        <input type="text" value={inputSearch} onClick={fetchUsers} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} style={{width: "800px", textAlign: "center", position: "relative", top: "-315px"}}/>
        </div>
        <div className="opt">
        {showOptions && (
        <ul>
          {user && user.filter(item => {
            if (!item || !inputSearch) {
                return true;
            }
            const firstName = item.first_name ? item.first_name.toLowerCase() : '';
            const lastName = item.last_name ? item.last_name.toLowerCase() : ''; 
            return ((inputSearch.toLowerCase() === '' ? item : firstName.includes(inputSearch)) || (inputSearch.toLowerCase() === '' ? item : lastName.includes(inputSearch)));
          }).map((item) => (
            <li className="listItem" key={item._id} onClick={handleUnFocus}>
              <a href={`/message/${encodeURIComponent(item.first_name)}?data=${encodeURIComponent(JSON.stringify({a1: item.first_name, a2: item.last_name, a3: item.username}))}`}>{item.first_name} {item.last_name}</a>
            </li>
          ))}
         {/* {user.map((item) => (
            <li className="listItem" key={item._id} onClick={handleUnFocus}>
              <a href={`/message/${encodeURIComponent(item.first_name)}?data=${encodeURIComponent(JSON.stringify({a1: item.first_name, a2: item.last_name}))}`}>{item.first_name} {item.last_name}</a>
            </li>
          ))} */}
           
        </ul>
      )}
        </div>
        {display ? (
        <div>
        <div className="my">
            <h2 style={{backgroundColor: "#ccc", color: "black", fontSize:"30px", position: "relative", top: "25px", left: "-40px"}}>
                My Properties
            </h2>
        </div>
        <div className="other">
            <button onClick={toggle} style={{backgroundColor: "white", color: "black", fontWeight: "bold", fontSize:"30px", width: "300px"}}>
                Other Properties
            </button>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-190px", color: "gray"}}/>
        <div className="vl"></div>
        <div className="first">
        <button onClick={navigateToOther} style={{backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: isClicked ? "normal" : "bold"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Tenant Name</p>
        <div class={isClicked ? '' : 'circle'}>
        </div>
        <p style={{position: "relative", top: "-40px"}}>{msg}</p>
      </button>
      </div>
      <div className="first">
        <button onClick={navigateToOther} style={{position: "relative", top: "-35px", backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "bold"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Joe Thomas</p>
        <div class={'circle'}>
        </div>
        <p style={{position: "relative", top: "-40px"}}>I have a question.</p>
      </button>
      </div>
      <div className="first">
        <button onClick={navigateToOther} style={{position: "relative", top: "-70px", backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "bold"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Pete Maravich</p>
        <div class={'circle'}>
        </div>
        <p style={{position: "relative", top: "-40px"}}>Can you talk?</p>
      </button>
      </div>
      <div className="first">
        <button onClick={navigateToOther} style={{position: "relative", top: "-105px", backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "bold"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Sarah James</p>
        <div class={'circle'}>
        </div>
        <p style={{position: "relative", top: "-40px"}}>I like your property.</p>
      </button>
      </div>
      {chatStr.length > 0 && (
      <div className="first"> 
      <button onClick={navigateToRM} style={{position: "relative", top: "-140px",backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>RM Name</p>
      <p style={{position: "relative", top: "-40px"}}>{rmMsg}</p>
      </button>
      </div> 
       )}
      <div>
       {Object.entries(lastMsg).map(([name, message]) => (
          message && ( <div className="first" key={name}> 
          <Link to={`/message/${name.toLowerCase().replace(/\s+/g, '-')}`}>
           <button style={{position: "relative", top: "-140px",backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal", marginTop: "-20px"}}>
           <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
           <p style={{position: "relative", top: "-40px"}}>{name.replace(/-/g, ' ').slice(0).replace(/\b\w/g, (name) => name.toUpperCase())}</p>
           <p style={{position: "relative", top: "-40px"}}>{message}</p>
           </button>
           </Link>
           </div> 
       )))}
       </div>
       <div>
       {user.map((item) => (
        <div className="first" key={item._id}>
        {localStorage.getItem(`lastMessage-${item.first_name}`)?.length > 0 && (
        <Link to={`/message/${encodeURIComponent(item.first_name)}?data=${encodeURIComponent(JSON.stringify({a1: item.first_name, a2: item.last_name, a3: item.username}))}`}>
        <button style={{position: "relative", top: "-140px",backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal", marginTop: "-20px"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>{item.first_name} {item.last_name}</p>
        <p style={{position: "relative", top: "-40px"}}>{localStorage.getItem(`lastMessage-${item.first_name}`)}</p>
        </button>
        </Link>
        )}
        </div>
          ))}
       </div>
       {/*(
      <div className="first"> 
      <button onClick={navigateToRM} style={{position: "relative", top: "-140px",backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>{itemName}</p>
      <p style={{position: "relative", top: "-40px"}}>{diffChat}</p>
      </button>
      </div> 
       )*/}
        </div>
        
        
        ) : (
            <div>
            <div className="my">
            <button onClick={toggle} style={{backgroundColor: "white", color: "black", fontWeight: "bold", fontSize:"30px", width: "300px", position: "relative", left: "-93px"}}>
                My Properties
            </button>
        </div>
        <div className="other">
            <h2 style={{backgroundColor: "#ccc", color: "black", fontSize:"30px", position: "relative", top: "-25px", left: "34px"}}>
                Other Properties
            </h2>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-190px", color: "gray"}}/>
        <div className="vl"></div>
       
      <div className="first"> 
      <button onClick={navigateToOwner} style={{backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>Owner Name : Property Name</p>
      <p style={{position: "relative", top: "-40px"}}>{ownerMsg}</p>
      </button>
      </div>
      <div className="first"> 
      <button onClick={navigateToOwner} style={{position: "relative", top: "-35px", backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>John Dear : Aspire</p>
      <p style={{position: "relative", top: "-40px"}}>How big is the room?</p>
      </button>
      </div> 
      <div className="first"> 
      <button onClick={navigateToOwner} style={{position: "relative", top: "-70px",backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>Steve Smith : Granite</p>
      <p style={{position: "relative", top: "-40px"}}>What is the accommodations?</p>
      </button>
      </div> 
      <div className="first"> 
      <button onClick={navigateToOwner} style={{position: "relative", top: "-105px",backgroundColor: "white", color: "black", width: "1415px", height: "100px", border: "2px solid #EA5455", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>Meredith Johnson : Hub</p>
      <p style={{position: "relative", top: "-40px"}}>What does the room come with?</p>
      </button>
      </div>
      </div>
      )
        }
        </div>
    );
}

export default MessagesPage;
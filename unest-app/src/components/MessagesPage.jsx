import React, {useState} from 'react';
import {
    useNavigate,
  } from "react-router-dom";
import './MessagesPage.css';
import Logo from '../Assets/Logo.png';
import House from '../Assets/house.png';
import profileIcon from '../Assets/Profile.png';
function MessagesPage() {
    const [inputSearch, setInputSearch] = useState('Search');
    const [isFocused, setIsFocused] = useState(false);

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

    const navigateToOther = () => {
        navigate('/message', {replace: true})
    } 

    return (
        <div>
        <div>
            <img src={Logo} alt="" style={{width: "100px", height: "100px"}} />
        </div>
        <div>
            <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium" style={{position: "relative", top: "-70px"}}>Chat Messages</h1>
        </div>
        <div className="house">
        <img src={House} alt="" onClick={navigateToHome} style={{width: "50px", height: "50px"}} />
        </div>
        <div className="profile">
        <img src={profileIcon} alt="" onClick={navigateToProfile} style={{width: "50px", height: "50px"}} />
        </div>
        <div className="search">
        <input type="text" value={inputSearch} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} style={{width: "800px", textAlign: "center", position: "relative", top: "-315px"}}/>
        </div>
        <div className="my">
            <h2 style={{fontWeight: "bold", fontSize:"30px"}}>
                My Properties
            </h2>
        </div>
        <div className="other">
            <h2 style={{fontWeight: "bold", fontSize:"30px"}}>
                Other Properties
            </h2>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-190px", color: "gray"}}/>
        <div className="vl"></div>
        <div className="first">
        <button onClick={navigateToOther} style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid black"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Tenant Name</p>
        <div class="circle">
        </div>
        <p style={{position: "relative", top: "-40px"}}>Yes, I am interested!</p>
      </button>
      </div>
      <div className="second"> 
      <button onClick={navigateToOwner} style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid black", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>Owner Name</p>
       <p style={{position: "relative", top: "-40px"}}>Yes, what is the surrounding like?</p>
      </button>
        </div>
        </div>
    );
}

export default MessagesPage;
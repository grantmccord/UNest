import './propertyListings.css'
import {
  useNavigate,
} from "react-router-dom";
import {useEffect, useState} from "react";
import apartmentIcon from '../Assets/Apartment.png';
import profileIcon from '../Assets/Profile.png';
import messageIcon from '../Assets/Message.png';
import Logo from '../Assets/Logo.png';
import Heart from 'react-heart';


export const PropertyListings = () => {
  const [liked, setLiked] = useState(() => {
    return JSON.parse(window.localStorage.getItem('liked')) || false;
  });

  useEffect(() => {
    window.localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  const toggleLiked = () => {
    setLiked(prevLiked => !prevLiked);
  };

  const navigate = useNavigate();

  const navigateToMessages = () => {
    navigate('/messages', {replace: true});
  };

  const navigateToOwner = () => {
    navigate('/messageOwner', {replace: true});
  };

  const navigateToTour = () => {
    navigate('/tour', {replace: true});
  };

  const navigateToListing = () => {
    navigate('/listing', {replace: true})
  };

  const navigateToHome = () => {
    navigate('/home', {replace: true})
  }

  const navigateToProfile = () => {
    navigate('/profile', {replace: true})
  }

  const navigateToExplore = () => {
    navigate('/explore', {replace: true})
  }

  const navigateToRoommate = () => {
    navigate('/message', {replace: true})
  }

  const navigateToRoommateProfile = () => {
    navigate('/roommateprofile', {replace: true})
  }

  const navigateToMap = () => {
    navigate('/property', {replace: true})
  }

    return (
        <div>
          <div>
        <h1 style={{color: "white", position: "relative", top: "-40px"}}>
      UNEST Logo
    </h1><button onClick={navigateToHome} style={{position: "relative", top: "-115px", left: "100px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Properties
    </button>
    <button onClick={() => window.scrollTo({top: 1100, behavior: "smooth"})} style={{position: "relative", top: "-115px", left: "130px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
    <button onClick={navigateToListing} style={{position: "relative", top: "-117px", left: "800px", borderRadius: "10px"}}>
      Add Listing
      </button>
      <button style={{position: "relative", top: "-55px", left: "30px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      About
    </button>
    <button onClick={() => window.scrollTo({top: 700, behavior: "smooth"})} style={{position: "relative", top: "-55px", left: "70px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Amenities
    </button>
    <button onClick={() => window.scrollTo({top: 1100, behavior: "smooth"})} style={{position: "relative", top: "-55px", left: "120px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
      <h3 style={{ color: "black", position: "relative", top: "-60px", left: "550px"}}>
      Property Name
    </h3>
    <p style={{ color: "black", position: "relative", top: "-70px", left: "555px"}}>
      Property Address
    </p>
    <p style={{ color: "black", position: "relative", top: "-100px", left: "550px"}}>
      West Lafayette, IN 47906
    </p>
    <h3 style={{ color: "black", position: "relative", top: "50px", left: "550px"}}>
      $500 Monthly Unit Rent
    </h3>
      <button testId="message" onClick={navigateToOwner} style={{position: "relative", top: "-275px", left: "540px", borderRadius: "20px", width: "200px", heigtht: "400px"}}>
      Message Lister
      </button><button onClick={navigateToTour} style={{position: "relative", top: "-275px", left: "560px", borderRadius: "20px"}}>
      Schedule Tour Appointment
      </button>
      <div className="rectangle">
    <h1 style={{ color: "black", position: "relative", top: "130px", left: "50px"}}>
      Insert Property Image Here
    </h1>
    <h3 style={{ color: "black", position: "relative", top: "90px", left: "900px"}}>
      1 Room
    </h3> 
    <h3 style={{ color: "black", position: "relative", top: "70px", left: "900px"}}>
      1 Bath
    </h3>
    <input type="text" value="Search" style={{position: "relative", top: "-460px", left: "410px", width: "570px", textAlign: "center"}}/>
    <img src={messageIcon} alt="" onClick={navigateToMessages} style={{position: "relative", top: "-499px", left: "1220px"}}/>
    <img src={profileIcon} alt ="" onClick={navigateToProfile} style={{position: "relative", top: "-500px", left: "1260px"}} />
      </div>
      <h3 style={{position: "relative", top: "-280px", left: "180px"}}>
        Amenities
      </h3>
      <ul>
        <li>
          In-Unit Laundry
        </li>
        <li>
          Garage Parking
        </li>
        <li>
          Gym
        </li>
        <li>
          Bicycle Storage
        </li>
        <li>
          Maintenance on site
        </li>
        <li>
          Game Room
        </li>
      </ul>
      <ul style={{position: "relative", top: "-605px", left: "500px"}}>
        <li>
          Keyed Access
        </li>
        <li>
          Pool
        </li>
        <li>
          EV Charging
        </li>
        <li>
          Outdoor Grill
        </li>
        <li>
          Balcony
        </li>
        <li>
          In-Unit Laundry
        </li>
      </ul>
      <h2 style={{position: "relative", top: "-580px", left: "160px"}}>Users Looking for Roommates Who Viewed this Property</h2>
      <div className='roommate1' style={{position: "relative", top: "-500px", left: "50px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px", left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>John Jones</h6> 
       <p style={{textAlign: "center"}}>Undergraduate Senior majoring in Computer Science.</p>
      </div>
      <div className='roommate2' style={{position: "relative", top: "-500px", left: "80px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px",  left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>Walker Smith</h6>
       <p style={{textAlign: "center"}}>First Year Masters Student studying Mathmatics.</p>
      </div>
      <div className='roommate3' style={{position: "relative", top: "-500px", left: "110px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px",  left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>Pete Day</h6>
       <p style={{textAlign: "center"}}>Undergraduate Junior majoring in Communications.</p>
      </div>
      <div className='roommate4' style={{position: "relative", top: "-500px", left: "140px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px",  left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>Jose Stricker</h6>
       <p style={{textAlign: "center"}}>Second year Master's Student studying Data Science.</p>
      </div>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-500px", left: "50px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-500px", left: "90px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-500px", left: "120px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-500px", left: "160px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToExplore} style={{backgroundColor: "white", color: "black", position: "relative", top: "-450px", left: "230px", width: "1000px", height: "100px"}}>
      Explore Others Who Viewed this Property
      </button>
      </div>
      <img src={apartmentIcon} data-testid="apartment-image" onClick={navigateToMap} style={{position: "relative", top: "-2078px", left: "33px", width: "500px", height: "500px"}} alt=""/>
      <Heart data-testid='heart' isActive={liked} onClick={toggleLiked} style={{position: "relative", top: "-2530px", left: "-20px", width: "40px", height: "40px"}}></Heart>
      <img src={Logo} alt="" style={{position: "relative", top: "-2640px", left: "-540px", width: "100px", height: "100px"}} />
      </div>
      );
};

export default PropertyListings;
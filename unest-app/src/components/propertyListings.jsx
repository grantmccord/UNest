import './propertyListings.css'
import {
  useNavigate, Link, useParams
} from "react-router-dom";
import {useEffect, useState} from "react";
import apartmentIcon from '../Assets/Apartment.png';
import profileIcon from '../Assets/Profile.png';
import messageIcon from '../Assets/Message.png';
import Logo from '../Assets/Logo.png';
import Heart from 'react-heart';
import axios from 'axios';


export const PropertyListings = () => {
  const [inputSearch, setInputSearch] = useState('Search');
  const [isFocused, setIsFocused] = useState(false);
  const {id} = useParams();
  const [property, setProperty] = useState(null);

  const roommateData = [
    { name: 'John Jones', description: 'Undergraduate Senior majoring in Computer Science' },
    { name: 'Walker Smith', description: 'First Year Masters Student studying Mathematics' },
    { name: 'Pete Day', description: 'Undergraduate Junior majoring in Communications' },
    { name: 'Jose Stricker', description: "Second year Master's Student studying Data Science" }
];

useEffect(() => {
  viewProperty();
  console.log("Id: ", id);
}, [id]);

const viewProperty = async () => {
  try {
      console.log("Id: ", id);
      const response = await axios.get(`/api/property/${id}`);
      const property = response.data;
      console.log("name: ", property.name);
      console.log("address: ", property.address); 
      setProperty(property);
      console.log("Success listing click");
  }
  catch (error) {
      console.error("Error fetching listing", error);
  }

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
  };

  const handleUnFocus = () => {
      setIsFocused(false);
  };

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
    navigate('/messagerm', {replace: true})
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
         <div className='logo'>   
        <img src={Logo} alt="" style={{width: "100px", height: "100px"}} />
      </div>
      <div className='properties'>
    <button onClick={navigateToHome} style={{backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Properties
    </button>
    <button className = 'rm' onClick={() => window.scrollTo({top: 1500, behavior: "smooth"})} style={{position: "relative", top: "2px", left: "-270px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
    </div>
    <div classname='s'>
    <input type="text" value={inputSearch} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} style={{position: "relative", top: "-180px", left: "425px", width: "600px", textAlign: "center"}}/>
    </div>
    <div className='al'>
    <button onClick={navigateToListing} style={{position: "relative", borderRadius: "10px"}}>
      Add Listing
      </button>
      <img src={messageIcon} alt="" onClick={navigateToMessages} style={{position: "relative", width: "50px", height: "50px", top: "15px", left: "50px"}}/>
      <img src={profileIcon} alt ="" onClick={navigateToProfile} style={{position: "relative", width: "50px", height: "50px", top: "14px", left: "90px"}} />
      </div>
      <div className='aar'>
      <button style={{position: "relative", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      About
    </button>
    <button onClick={() => window.scrollTo({top: 700, behavior: "smooth"})} style={{position: "relative", left: "-160px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Amenities
    </button>
    <button onClick={() => window.scrollTo({top: 1300, behavior: "smooth"})} style={{position: "relative", top: "2px", left: "-300px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
    </div>
    <div className='rectangle'>
    <h1 style={{ color: "black", position: "relative", top: "130px", left: "50px"}}>
      Insert Property Image Here
    </h1> 
    <Link to={`/property/${id}`}>
    <img src={apartmentIcon} data-testid="apartment-image" style={{position: "relative", top: "-54px", width: "499px", height: "499px"}} alt=""/>
    </Link>
    <Heart data-testid='heart' isActive={liked} onClick={toggleLiked} style={{position: "relative", top: "-550px", left: "450px", width: "40px", height: "40px"}}></Heart>
    </div>
    <div>
    {property ? (
      <div>
    <div className='info'>
      <h3 style={{ color: "black", position: "relative", fontSize: "40px", fontWeight: "bold"}}>
      {property.name}
    </h3>
    </div>
    <div>
    <p style={{ color: "black", position: "relative", top: "-550px", left: "600px", fontSize: "30px"}}>
      {property.address}
    </p> 
    </div>
    </div>
) : (
  <p>Loading</p>
)}
</div>
    <div>
    <h3 style={{ color: "black", position: "relative", top: "-450px", left: "590px", fontSize: "30px"}}>
      $500 Monthly Unit Rent
    </h3>
    </div>
    <div className='bath'>
    <h3 style={{ color: "black", position: "relative", top: "50px", fontSize: "30px"}}>
      1 Room
    </h3> 
    <h3 style={{ color: "black", position: "relative", top: "80px", left: "-90px", fontSize: "30px"}}>
      1 Bath
    </h3>
    </div>
    <div className='sta'>
      <button testId="message" onClick={navigateToOwner} style={{position: "relative", borderRadius: "20px", width: "200px", height: "70px"}}>
      Message Lister
      </button>
      <button onClick={navigateToTour} style={{position: "relative", left: "180px", borderRadius: "20px", width: "200px", height: "70px"}}>
      Schedule Tour Appointment
      </button>
      </div>
      <div>
      <h3 style={{position: "relative", top: "-400px", left: "140px", fontWeight: "bold", fontSize: "30px"}}>
        Amenities
      </h3>
      </div>
      <div style={{position: "relative", top: "70px"}}>
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
      </div>
      <div className='list'>
      <ul style={{position: "relative"}}>
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
      </div>
      <h2 style={{position: "relative", top: "-400px", left: "100px", fontSize: "30px", fontWeight: "bold"}}>Users Looking for Roommates Who Viewed this Property</h2>
      <div style={{position: "relative", top: "70px"}}>
            {roommateData.map((roommate, index) => (
                <div className={`roommate${index + 1}`} style={{ position: "relative", top: "-470px", left: `${50 + (30 * index)}px` }} key={index}>
                <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{ position: "relative", top: "40px", left: "100px", width: "100px", height: "100px" }} />
                <h6 onClick={navigateToRoommateProfile} style={{ textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline" }}>{roommate.name}</h6>
                <p style={{ textAlign: "center", position: "relative", top: "30px" }}>{roommate.description}</p>
                <Link to={`/message/${roommate.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <button style={{position: "relative", top: "112px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
                  Message
                  </button> 
                </Link>
                </div>
            ))}
        </div>
      {/*
      <div className='roommate1' style={{position: "relative", top: "-470px", left: "50px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px", left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>John Jones</h6> 
       <p style={{textAlign: "center", position: "relative", top: "30px"}}>Undergraduate Senior majoring in Computer Science.</p>
      </div>
      <div className='roommate2' style={{position: "relative", top: "-470px", left: "80px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px",  left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>Walker Smith</h6>
       <p style={{textAlign: "center", position: "relative", top: "30px"}}>First Year Masters Student studying Mathmatics.</p>
      </div>
      <div className='roommate3' style={{position: "relative", top: "-470px", left: "110px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px",  left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>Pete Day</h6>
       <p style={{textAlign: "center", position: "relative", top: "30px"}}>Undergraduate Junior majoring in Communications.</p>
      </div>
      <div className='roommate4' style={{position: "relative", top: "-470px", left: "140px"}}>
      <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{position: "relative", top: "40px",  left: "100px", width: "100px", height: "100px"}} />
       <h6 onClick={navigateToRoommateProfile} style={{textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline"}}>Jose Stricker</h6>
       <p style={{textAlign: "center", position: "relative", top: "30px"}}>Second year Master's Student studying Data Science.</p>
      </div>
    */}
    {/*
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-485px", left: "50px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-485px", left: "85px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-485px", left: "115px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToRoommate} style={{position: "relative", top: "-485px", left: "145px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button onClick={navigateToExplore} style={{backgroundColor: "white", color: "black", position: "relative", top: "-450px", left: "230px", width: "1000px", height: "100px", border: "2px solid black"}}>
      Explore Others Who Viewed this Property
      </button>
  */}
      </div>
      <img src={Logo} alt="" style={{position: "relative", top: "-2640px", left: "-540px", width: "100px", height: "100px"}} />
      </div>
      );
};

export default PropertyListings;
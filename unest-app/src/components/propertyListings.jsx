import './propertyListings.css'
import {
  useNavigate, Link, useParams
} from "react-router-dom";
import {useEffect, useState} from "react";
import apartmentIcon from '../Assets/Apartment.png';
import profileIcon from '../Assets/Profile.png';
import messageIcon from '../Assets/Message.png';
import houseIcon from '../Assets/house.png';
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
      console.log("photo", property.photos[0]); 
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
    return JSON.parse(window.localStorage.getItem(`liked-${id}`)) || false;
  });

  useEffect(() => {
    window.localStorage.setItem(`liked-${id}`, JSON.stringify(liked));
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
    navigate('/myplaces/new', {replace: true})
  };

  const navigateToHome = () => {
    navigate('/homepage', {replace: true})
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
    <button className = 'rm' onClick={() => window.scrollTo({top: 1450, behavior: "smooth"})} style={{position: "relative", top: "2px", left: "-270px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
    </div>
    <div className='s'>
    <input type="text" value={inputSearch} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} style={{position: "relative", top: "-180px", left: "425px", width: "600px", textAlign: "center"}}/>
    </div>
    <div className='al'>
    <button onClick={navigateToListing} style={{position: "relative", left: "25px", borderRadius: "10px", backgroundColor: "#EA5455"}}>
      Add Listing
      </button>
      <img src={messageIcon} alt="" onClick={navigateToMessages} style={{position: "relative", width: "50px", height: "50px", top: "15px", left: "55px"}}/>
      <img src={profileIcon} alt ="" onClick={navigateToProfile} style={{position: "relative", width: "50px", height: "50px", top: "14px", left: "78px"}} />
      <img src={houseIcon} alt="" onClick={navigateToHome} style={{position: "relative", width: "50px", height: "50px", top: "14px", left: "98px"}}/>
      </div>
      <div className='aar'>
      <button style={{position: "relative", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      About
    </button>
    <button onClick={() => window.scrollTo({top: 700, behavior: "smooth"})} style={{position: "relative", left: "-160px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Amenities
    </button>
    <button onClick={() => window.scrollTo({top: 900, behavior: "smooth"})} style={{position: "relative", top: "2px", left: "-300px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
    </div>
    {property ? (
    <div className='rectangle'>
    <Link to={`/property/${id}`}>
    <img src={'http://localhost:4000/uploads/' + property.photos[0]} alt="" data-testid="apartment-image" style={{position: "relative", width: "450px", height: "450px"}}/>
    </Link>
    <Heart data-testid='heart' isActive={liked} onClick={toggleLiked} style={{position: "relative", top: "-450px", left: "400px", width: "40px", height: "40px"}}></Heart>
    </div>
    ) : (
      <p>Loading</p>
    )
}
    <div>
    {property ? (
      <div>
      <div>
    <div className='info'>
      <h3 style={{ color: "black", position: "relative", top: "60px", fontSize: "40px", fontWeight: "bold"}}>
      {property.name}
    </h3>
    </div>
    <div>
      <p style={{ color: "black", position: "relative", top: "-540px", left: "100px", textAlign: "center", fontSize: "30px", fontWeight: "bold", margin: 0}}>Address</p>
    <p style={{color: "black", textAlign: "center", position: "relative", top: "-540px", left: "100px", fontSize: "30px", margin: 0, padding: "20px 0"}}>
      {property.address}
    </p> 
    </div>
    </div>
    <div>
    <h3 style={{ color: "black", position: "relative", top: "-450px", left: "590px", fontSize: "30px"}}>
      ${property.price} Monthly Unit Rent
    </h3>
    </div>
    <div className='bath'>
    <h3 style={{ color: "black", position: "relative", top: "30px", fontSize: "30px"}}>
      {property.num_rooms || property.total_rooms} Room
    </h3> 
    <h3 style={{ color: "black", position: "relative", top: "60px", left: "-90px", fontSize: "30px"}}>
      {property.num_baths || property.total_baths} Bath
    </h3>
    </div>
    <div className='sta'>
      <button testId="message" onClick={navigateToOwner} style={{position: "relative", borderRadius: "20px", width: "200px", height: "70px", backgroundColor: "#EA5455"}}>
      Message Lister
      </button>
      <button onClick={navigateToTour} style={{position: "relative", left: "180px", borderRadius: "20px", width: "200px", height: "70px", backgroundColor: "#EA5455"}}>
      Schedule Tour Appointment
      </button>
      </div>
      <div>
      <h3 className={"py-8"} style={{position: "relative", top: "-400px", left: "140px", fontWeight: "bold", fontSize: "30px"}}>
        Amenities
      </h3>
      </div>
      <div style={{position: "relative", top: "70px"}}>
      <ul>
      {property.perks.map((amenity, index) => (
        <li className={"py: 5"} style={{ fontSize: '30px', marginBottom: '15px', listStyleType: 'disc' }} key={index}>{amenity}</li>
      ))}
    </ul>
      </div>
      </div>
    ) : (
      <p>Loading</p>
    )}
    </div>
      <h2 style={{position: "relative", top: "-400px", left: "100px", fontSize: "30px", fontWeight: "bold"}}>Users Looking for Roommates Who Viewed this Property</h2>
      <div style={{position: "relative", top: "70px"}}>
            {roommateData.map((roommate, index) => (
                <div className={`roommate${index + 1}`} style={{ position: "relative", top: "-470px", left: `${50 + (30 * index)}px` }} key={index}>
                <img onClick={navigateToRoommateProfile} src={profileIcon} alt="" style={{ position: "relative", top: "40px", left: "100px", width: "100px", height: "100px" }} />
                <h6 onClick={navigateToRoommateProfile} style={{ textAlign: "center", position: "relative", top: "30px", textDecorationLine: "underline" }}>{roommate.name}</h6>
                <p style={{ textAlign: "center", position: "relative", top: "30px" }}>{roommate.description}</p>
                <Link to={`/message/${roommate.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <button style={{position: "relative", top: "112px", borderRadius: "20px", width: "300px", heigtht: "600px", backgroundColor: "#EA5455"}}>
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
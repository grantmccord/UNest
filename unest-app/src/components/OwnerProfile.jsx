import {
   useNavigate,
  } from "react-router-dom";

const OwnerProfile = () => {
     const navigate = useNavigate();
    const navigateToOwner = () => {
         navigate('/messageOwner', {replace: true})
    }
    const navigateToProp = () => {
        navigate('/propertyListing', {replace: true})
   }  
     return (
        <div>
        <div>
        <h1>Owner Profile</h1>
        </div>
        <div>
        <button onClick={navigateToOwner} style={{position: "relative", top: "-65px", left: "1100px", width: "150px", height: "50px"}}>Message</button>
        <button onClick={navigateToProp} style={{position: "relative", top: "-65px", left: "1110px", width: "150px", height: "50px"}}>View Property</button>
        </div>
        </div>

     );
 };

export default OwnerProfile;

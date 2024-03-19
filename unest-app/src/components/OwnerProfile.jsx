import {
    useNavigate,
  } from "react-router-dom";

const OwnerProfile = () => {
    const navigate = useNavigate();
    const navigateToOwner = () => {
        navigate('/messageOwner', {replace: true})
    } 
    return (
        <div>
        <div>
        <h1>Owner Profile</h1>
        </div>
        <div>
            <button onClick={navigateToOwner} style={{position: "relative", top: "-65px", left: "1100px", width: "100px", height: "50px"}}>Message</button>
        </div>
        </div>

    );
};

export default OwnerProfile;
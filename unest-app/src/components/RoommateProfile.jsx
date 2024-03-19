import {
    useNavigate,
  } from "react-router-dom";

const RoommateProfile = () => {
    const navigate = useNavigate();
    const navigateToRoommate = () => {
        navigate('/messagerm', {replace: true})
    } 
    return (
        <div>
        <div>
        <h1>Roommate Profile</h1>
        </div>
        <div>
            <button onClick={navigateToRoommate} style={{position: "relative", top: "-65px", left: "1100px", width: "100px", height: "50px"}}>Message</button>
        </div>
        </div>

    );
};

export default RoommateProfile;
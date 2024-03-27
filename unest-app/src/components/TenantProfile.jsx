import {
    useNavigate,
  } from "react-router-dom";

const TenantProfile = () => {
    const navigate = useNavigate();
    const navigateToTenant = () => {
        navigate('/message', {replace: true})
    } 

    return (
        <div>
        <div>
        <h1>Tenant Profile</h1>
        </div>
        <div>
            <button onClick={navigateToTenant} style={{position: "relative", top: "-65px", left: "1100px", width: "100px", height: "50px"}}>Message</button>
        </div>
        </div>

    );
};

export default TenantProfile;
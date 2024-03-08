import './MessagesPage.css';
import Logo from '../Assets/Logo.png';
import House from '../Assets/house.png';
import profileIcon from '../Assets/Profile.png';
function MessagesPage() {
    return (
        <div>
        <div>
            <img src={Logo} alt="" style={{width: "100px", height: "100px"}} />
        </div>
        <div>
            <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium" style={{position: "relative", top: "-70px"}}>Chat Messages</h1>
        </div>
        <div className="house">
        <img src={House} alt="" style={{width: "50px", height: "50px"}} />
        </div>
        <div className="profile">
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        </div>
        <div className="search">
        <input type="text" value="Search" style={{width: "800px", textAlign: "center"}}/>
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
        <hr style={{display: "flex", position: "relative", top: "-190px"}}/>
        </div>
    );
}

export default MessagesPage;
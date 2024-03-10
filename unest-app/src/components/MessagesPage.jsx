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
        <input type="text" value="Search" style={{width: "800px", textAlign: "center", position: "relative", top: "-315px"}}/>
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
        <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid black"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>John Dear</p>
        <div class="circle">
        </div>
        <p style={{position: "relative", top: "-40px"}}>Hi! I am interested in your property.</p>
      </button>
      </div>
      <div className="second"> 
      <button style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid black", fontWeight: "normal"}}>
      <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
      <p style={{position: "relative", top: "-40px"}}>Joe Smith</p>
       <p style={{position: "relative", top: "-40px"}}>Do you have any questions?</p>
      </button>
        </div>
        </div>
    );
}

export default MessagesPage;
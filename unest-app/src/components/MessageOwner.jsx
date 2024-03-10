import './MessageOwner.css'
import back from '../Assets/back.png'
import profileIcon from '../Assets/Profile.png';

const MessageOwner = () => {
    return (
        <div>
        <div className='back'>
        <img src={back} alt="" style={{width: "70px", height: "70px"}} />
        </div>
        <div className='prof'>
        <img src={profileIcon} alt="" style={{width: "70px", height: "70px"}} />
        </div>
        <div className="name">
        <h1>Owner Name</h1>
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>username</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div className="mes1">
        <button style={{backgroundColor: "#EA5455", color: "black", width: "700px", height: "100px", textDecoration: "none"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Owner Name</p>
        <p style={{position: "relative", top: "-40px"}}>Do you have any questions?</p>
        </button>
        </div>
        </div>
    );
};

export default MessageOwner;
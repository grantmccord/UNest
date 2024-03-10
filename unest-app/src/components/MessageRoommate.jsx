import './MessageRoommate.css'
import back from '../Assets/back.png'
import profileIcon from '../Assets/Profile.png';

const MessageRoommate = () => {
    return (
        <div>
        <div className='back'>
        <img src={back} alt="" style={{width: "70px", height: "70px"}} />
        </div>
        <div className='prof'>
        <img src={profileIcon} alt="" style={{width: "70px", height: "70px"}} />
        </div>
        <div className="name">
        <h1>Roommate Name</h1>
        <p style={{position: "relative", top: "30px", left: "-165px", fontSize: "30px"}}>username</p>
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div className="mes1">
        <button style={{backgroundColor: "#EA5455", color: "black", width: "700px", height: "100px", textDecoration: "none"}}>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px"}} />
        <p style={{position: "relative", top: "-40px"}}>Do you have any questions?</p>
        </button>
        </div>
        <div className="mes2">
        <button style={{backgroundColor: "#EA5455", color: "black", width: "700px", height: "100px", textDecoration: "none"}}>
        <p style={{position: "relative", top: "20px"}}>Yes, what is the surrounding like?</p>
        <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", top: "-30px", left: "630px"}} />
        </button>
        </div>
        <div className="search">
        <input type="text" value="Message" style={{width: "1200px", textAlign: "center", position: "relative", left:"-185px"}}/>
        </div>
        </div>
    );
};


export default MessageRoommate;
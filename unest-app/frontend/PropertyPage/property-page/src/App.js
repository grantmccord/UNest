import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import PropertyListings from './Components/propertyListings';
import Messages from './Components/Messages';
import MessageOwner from './Components/MessageOwner'; 
import Tour from './Components/Tour';
import ListingForm from './Components/ListingForm';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import Explore from './Components/Explore';
import MessageRoommate from './Components/MessageRoommate';
import RoommateProfile from './Components/RoommateProfile';

function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<PropertyListings/>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messageOwner" element={<MessageOwner />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/listing" element={<ListingForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/explore" element={<Explore />} /> 
        <Route path="/message" element={<MessageRoommate />} /> 
        <Route path="/roommateprofile" element={<RoommateProfile/>} /> 
      </Routes>
    </div>
  );
}

export default App;

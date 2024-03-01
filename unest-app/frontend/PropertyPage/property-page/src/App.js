import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import PropertyListing from '../../../../src/components/propertyListing';
import Messages from '../../../../src/components/Messages';
import MessageOwner from '../../../../src/components/MessageOwner'; 
import Tour from '../../../../src/components/Tour';
import ListingForm from '../../../../src/components/ListingForm';
import HomePage from '../../../../src/components/HomePages';
import ProfilePage from '../../../../src/components/ProfilePage';
import Explore from '../../../../src/components/Explore';
import MessageRoommate from '../../../../src/components/MessageRoommate';
import RoommateProfile from '../../../../src/components/RoommateProfile';
import MapComp from '../../../../src/components/Map'

function App() {

  return (
    <div>
       <Routes>
        <Route path="/propertylisting" element={<PropertyListing/>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messageOwner" element={<MessageOwner />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/listing" element={<ListingForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/explore" element={<Explore />} /> 
        <Route path="/message" element={<MessageRoommate />} /> 
        <Route path="/roommateprofile" element={<RoommateProfile/>} /> 
        <Route path="/property" element={<MapComp/>} />
      </Routes>
    </div>
  );
}

export default App;

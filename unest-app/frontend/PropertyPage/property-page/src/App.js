import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import PropertyListings from './Components/propertyListings'
import Messages from './Components/Messages'
import MessageOwner from './Components/MessageOwner' 
import Tour from './Components/Tour'
import ListingForm from './Components/ListingForm'

function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<PropertyListings/>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messageOwner" element={<MessageOwner />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/listing" element={<ListingForm />} />
      </Routes>
    </div>
  );
}

export default App;

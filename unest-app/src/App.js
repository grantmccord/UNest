import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Homepage from "./components/Homepage";
import PropertyListing from './components/propertyListing';
import Messages from './components/Messages';
import MessageOwner from './components/MessageOwner'; 
import Tour from './components/Tour';
import ListingForm from './components/ListingForm';
import HomePage from './components/HomePages';
import ProfilePage from './components/ProfilePage';
import Explore from './components/Explore';
import MessageRoommate from './components/MessageRoommate';
import RoommateProfile from './components/RoommateProfile';
import MapComp from './components/Map'
import LoginPage from "./components/LoginPage"

import RegistrationInput from "./components/RegistrationInput";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<SignUpPage />} />
                <Route path="/homepage" element={<Homepage/>} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
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
        </BrowserRouter>
    )
}

export default App;
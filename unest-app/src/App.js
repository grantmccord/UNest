import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Homepage from "./components/Homepage";
import MessagesPage from "./components/MessagesPage";
import PostPage from "./components/PostPage";
import PropertyListing from './components/propertyListing';
import MessageOwner from './components/MessageOwner'; 
import Tour from './components/Tour';
import ListingForm from './components/ListingForm';
import HomePage from './components/HomePages';
import ProfilePage from './components/ProfilePage';
import Explore from './components/Explore';
import MessageTenant from './components/MessageTenant';
import MessageRoommate from './components/MessageRoommate';
import RoommateProfile from './components/RoommateProfile';
import TenantProfile from './components/TenantProfile';
import OwnerProfile from './components/OwnerProfile';
import MapComp from './components/Map';
import LoginPage from "./components/LoginPage";
import Message from './components/Message';
import HomeMap from './components/HomeMap';

import RegistrationInput from "./components/RegistrationInput";
import axios from "axios";
import {UserContextProvider} from "./UserContext";
import PlacesPage from "./components/PlacesPage";

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;


function App(){
    return(
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/homepage" element={<Homepage/>} />
                    <Route path="/register" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/messages" element={<MessagesPage />} />
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/myplaces" element={<PlacesPage/>} />
                    <Route path="/myplaces/:action" element={<PlacesPage/>} />
                    <Route path="/propertylisting" element={<PropertyListing/>} />
                    <Route path="/messageOwner" element={<MessageOwner />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/listing" element={<ListingForm />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/message" element={<MessageTenant />} />
                    <Route path="/messagerm" element={<MessageRoommate />} />
                    <Route path="/roommateprofile" element={<RoommateProfile/>} />
                    <Route path="/tenantprofile" element={<TenantProfile/>} />
                    <Route path="/ownerprofile" element={<OwnerProfile/>} />
                    <Route path="/property" element={<MapComp/>} />
                    <Route path="/message/:itemName" element={<Message/>} />
                    <Route path="/homemap" element={<HomeMap/>} />
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    )
}

export default App;
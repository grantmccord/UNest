import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Homepage from "./components/Homepage";
import MessagesPage from "./components/MessagesPage";

import LoginPage from "./components/LoginPage"

import RegistrationInput from "./components/RegistrationInput";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/homepage" element={<Homepage/>} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/messages" element={<MessagesPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage"
import RegistrationInput from "./components/RegistrationInput";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<SignUpPage />} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
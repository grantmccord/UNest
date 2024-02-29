import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Homepage from "./components/Homepage";
import RegistrationInput from "./components/RegistrationInput";



function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<SignUpPage />} />
                <Route path="/homepage" element={<Homepage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
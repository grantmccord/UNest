// import './App.css';
import Header from "./Header"
import Properties from "./Properties"
import React, {useContext} from "react";
import {UserContext} from "../UserContext";

function Homepage() {
    const {user} = useContext(UserContext);
    return (
        <div>
            {!!user && (
                <div>
                    {user.first_name}
                </div>
            )}
            <Header />
            <Properties />
        </div>
    );
}

export default Homepage;
import React from 'react';
import facade from "../utils/loginFacade.js";
import "../styles/header.css";

function ShowUserName({setLoggedIn}) {
    return (
        <div className="show-username-container">
            <button>{facade.getUserName()}</button>
        </div>
    );
}

export default ShowUserName;
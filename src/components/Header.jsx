import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import RegisterUserBtn from "./RegisterUserBtn.jsx";


function Header({setErrorMessage, loggedIn, setLoggedIn, facade}) {


    return (
        <nav className="topnav">

            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>

            {facade.hasUserAccess('admin',loggedIn) && (<NavLink to="admin"><i className="fa fa-lock"></i> Admin </NavLink>)}

            {facade.hasUserAccess('user', loggedIn) && (<NavLink to="/jokes"><i className="fa fa-smile-o"></i> Jokes</NavLink>)}

            {loggedIn ? (<NavLink className="profileIcon" to="profile"><i className="fa fa-user"></i> {facade.getUserName()}</NavLink>) : <></>}

            {!loggedIn ? (<RegisterUserBtn/>) : (<></>)}

            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMessage}  />) : (<div><LoggedIn setLoggedIn={setLoggedIn}/></div>)}

        </nav>
    );
}

export default Header;
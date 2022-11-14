import React from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import RegisterUserBtn from "./RegisterUserBtn.jsx";


function Header({setErrorMessage, loggedIn, setLoggedIn, userfacade}) {


    return (
        <nav className="topnav">

            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>

            {userfacade.hasUserAccess('admin',loggedIn) && (<NavLink to="admin"><i className="fa fa-lock"></i> Admin </NavLink>)}

            {userfacade.hasUserAccess('user', loggedIn) && (<NavLink to="/jokes"><i className="fa fa-smile-o"></i> Jokes</NavLink>)}

            {loggedIn ? (<NavLink className="profileIcon" to="profile"><i className="fa fa-user"></i> {userfacade.getUserName()}</NavLink>) : <></>}

            {!loggedIn ? (<RegisterUserBtn/>) : (<></>)}

            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMessage}  />) : (<div><LoggedIn setLoggedIn={setLoggedIn}/></div>)}

        </nav>
    );
}

export default Header;
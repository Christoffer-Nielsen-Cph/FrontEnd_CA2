import React from "react";
import loginfacade from "../utils/loginFacade.js";

export default function LoggedIn({setLoggedIn}) {

    const logout = () => {
        loginfacade.logout()
        setLoggedIn(false)
    }

    return (
        <div className="login-container">
            <button  onClick={logout}>Logout</button>
        </div>
    )

}
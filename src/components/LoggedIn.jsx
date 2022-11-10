import React from "react";
import userFacade from "../utils/loginFacade.js";

export default function LoggedIn({setLoggedIn}) {

    const logout = () => {
        userFacade.logout()
        setLoggedIn(false)
    }

    return (
        <div className="login-container">
            <button  onClick={logout}>Logout</button>
        </div>
    )

}
import React from 'react';
import userFacade from "../utils/loginFacade.js";

function Profile(props) {
    return (
        <div>
            <h1>Profile page</h1>
            <p>Your username: {userFacade.getUserName()}</p>
            <p>Your role: {userFacade.getUserRoles()}</p>
        </div>
    );
}

export default Profile;
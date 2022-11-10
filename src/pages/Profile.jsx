import React from 'react';
import facade from "../utils/loginFacade.js";

function Profile(props) {
    return (
        <div>
            <h1>Profile page</h1>
            <p>Your username: {facade.getUserName()}</p>
            <p>Your role: {facade.getUserRoles()}</p>
        </div>
    );
}

export default Profile;
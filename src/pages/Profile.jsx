import React, {useState} from 'react';
import userfacade from "../utils/userFacade.js";
import RegisterUserBtn from "../components/RegisterUserBtn.jsx";

function Profile() {

    const [checked,setChecked] = useState(false);
    const init = {userName: ""};
    const [newUserName, setNewUserName] = useState(init);

    const performUpdateUser = (evt) => {
        evt.preventDefault();
        updateUser(newUserName.userName, userfacade.getUserId());
    }

    const updateUser = (user, pass) => {
        userfacade.updateUser(user,userfacade.getUserId())
    }

    const onChange = (evt) => {
        setNewUserName({...newUserName, [evt.target.id]: evt.target.value})
        console.log(newUserName)

    }

    const btnClick = () => {
        if(checked){
            setChecked(false)
        }
        if(!checked){
            setChecked(true)
        }
    }

    return (
        <div>
            <h1>Profile page</h1>
            <button onClick={btnClick}>Edit profile</button>
            <p>Your username: {userfacade.getUserName()}</p>

            {checked ?  <form onSubmit={performUpdateUser}>
                <input id="userName" type="text" placeholder="Type a new username" onChange={onChange}/>
                <input type="submit" value="Update"/>
                <br/>
                <br/>
            </form> : null }


            <p>Your role: {userfacade.getUserRoles()}</p>
        </div>
    );
}

export default Profile;
import React, {useState} from 'react';
import userFacade from "../utils/loginFacade.js";
import RegisterUserBtn from "../components/RegisterUserBtn.jsx";

function Profile() {

    const [checked,setChecked] = useState(false);
    const init = {userName: ""};
    const [newUserName, setNewUserName] = useState(init);

    const performUpdateUser = (evt) => {
        evt.preventDefault();
        updateUser(newUserName.userName, userFacade.getUserId());
    }

    const updateUser = (user, pass) => {
        userFacade.updateUser(user,userFacade.getUserId())
    }

    const onChange = (evt) => {
        setNewUserName({...newUserName, [evt.target.id]: evt.target.value})
        console.log(newUserName)
        console.log(userFacade.getUserId())
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
            <p>Your username: {userFacade.getUserName()}</p>

            {checked ?  <form onSubmit={performUpdateUser}>
                <input id="userName" type="text" placeholder="Type a new username" onChange={onChange}/>
                <input type="submit" value="Update"/>
                <br/>
                <br/>
            </form> : null }


            <p>Your role: {userFacade.getUserRoles()}</p>
        </div>
    );
}

export default Profile;
import React, {useState,useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import Profile from "./pages/Profile.jsx";
import Jokes from "./pages/Jokes.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import userfacade from "./utils/userFacade.js";
import loginfacade from "./utils/loginFacade.js";
import apifacade from "./utils/apiFacade.js";


function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('All is good ... so far');
    const [usersChanged, setUsersChanged] = useState(false);


    useEffect(() => {
        if (loginfacade.getToken()) setLoggedIn(true);
    }, []);


    return (
       <Container>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} userfacade={userfacade}/>
            <Routes>
                <Route path="/" element={<Home userfacade={userfacade}/>}/>
                <Route path="createUser" element={<RegisterUser/>}/>
                <Route path="admin" element={<AdminPanel/>}/>
                <Route path="profile" element={<Profile/>}/>

                <Route path="jokes" element={userfacade.hasUserAccess('user', loggedIn) &&
                    <Jokes apifacade={apifacade} setErrorMessage={setErrorMessage} />}/>

                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </Container>
    );
}

export default App;
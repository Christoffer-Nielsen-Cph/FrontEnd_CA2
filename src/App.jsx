import React, {useState,useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import Profile from "./pages/Profile.jsx";
import Jokes from "./pages/Jokes.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import facade from "./utils/apiFacade.js";
import userFacade from "./utils/loginFacade.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('All is good ... so far');


    useEffect(() => {
        if (userFacade.getToken()) setLoggedIn(true);
    }, []);


    return (
       <Container>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} facade={userFacade}/>
            <Routes>
                <Route path="/" element={<Home facade={userFacade}/>}/>
                <Route path="createUser" element={<RegisterUser/>}/>
                <Route path="admin" element={<AdminPanel/>}/>
                <Route path="profile" element={<Profile/>}/>

                <Route path="jokes" element={facade.hasUserAccess('user', loggedIn) &&
                    <Jokes facade={facade} setErrorMessage={setErrorMessage} />}/>

                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </Container>
    );
}

export default App;
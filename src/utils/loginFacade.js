import {API_URL} from "../../setting.js";
import apifacade from "./apiFacade.js";


function loginFacade() {

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        return getToken() != null;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const login = (user, password) => {
        const options = apifacade.makeOptions("POST", true, {username: user, password: password});
        return fetch(API_URL + "/api/login", options)
            .then(apifacade.handleHttpErrors)
            .then(res => {
                setToken(res.token)
            })
    }

    return {
        setToken,
        getToken,
        loggedIn,
        login,
        logout
    }
}

const loginfacade = loginFacade();
export default loginfacade;


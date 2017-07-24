import Axios from 'axios';
import { loadLocalStorage } from '../functions';

// set some default stuff

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.homadic.co/";
}

function getAuthHeader() {
    var auth = loadLocalStorage("auth");

    if (auth == null || auth.access_Token == null) {
        return null;
    }

    return {
        headers: {
            Authorization: auth.access_Token
        }
    }
}

Axios.defaults.baseURL = getApiUrl();

// login

export function apiPerformLogin(code) {
    return Axios.post("login", {
        code
    });
}

// profile

export function apiGetProfile() {
    return Axios.get("profile", getAuthHeader());
}
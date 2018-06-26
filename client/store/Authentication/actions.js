/* global Promise */
import { apiPerformLogin } from '../../api';
import { delay, saveLocalStorage, removeLocalStorage } from '../../functions';
import moment from 'moment';
import { setProfileStore } from '../Profile/actions';

// set login stataus
export function setLoggedInStatus(value) {
    return {
        type: 'SET_LOGGED_IN_STATUS',
        value
    }
}

// currently authenticating
export function setAuthenticatingStatus(value) {
    return {
        type: 'SET_AUTHENTICATING_STATUS',
        value
    }
}

// handle the login
export function handleLogout() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(setAuthenticatingStatus(true));

            removeLocalStorage('auth');
            delay(750).then(() => {
                dispatch(setLoggedInStatus(false));
                dispatch(setProfileStore({}));
                dispatch(setAuthenticatingStatus(false));
                resolve();
            }).catch(error => {
                dispatch(setAuthenticatingStatus(false));
                reject(error);
            });
        });
    }
}

// handle the login
export function handlePerformLogin(code) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiPerformLogin(code);
            dispatch(setAuthenticatingStatus(true));

            request.then(response => {
                saveLocalStorage('auth', { ...response.data, token_Expiry: moment(new Date()).add(59, 'days') });
                delay(750).then(() => {
                    dispatch(setLoggedInStatus(true));
                    dispatch(setAuthenticatingStatus(false));
                    resolve();
                });
            }).catch(error => {
                dispatch(setAuthenticatingStatus(false));
                reject(error);
            });
        });
    };
}
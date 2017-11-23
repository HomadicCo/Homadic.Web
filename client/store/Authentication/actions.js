/* global Promise */
import { apiPerformLogin } from '../../api';
import { delay, saveLocalStorage } from '../../functions';
import moment from 'moment';

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
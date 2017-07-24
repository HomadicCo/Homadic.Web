import { apiPerformLogin } from '../../api';
import { delay, saveLocalStorage } from '../../functions';

// currently authenticating
export function updateAuthenticatingStatus(value) {
    return {
        type: 'UPDATE_AUTHENTICATING_STATUS',
        value
    }
}

// handle the login
export function handlePerformLogin(code) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiPerformLogin(code);
            dispatch(updateAuthenticatingStatus(true));

            request.then(response => {
                saveLocalStorage("auth", response.data);
                delay(750).then(() => {
                    dispatch(updateAuthenticatingStatus(false));
                    resolve();
                });
            }).catch(error => {
                dispatch(updateAuthenticatingStatus(false));
                reject(error);
            });
        });
    };
}
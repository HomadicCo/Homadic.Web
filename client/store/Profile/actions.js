/* global Promise */
import { apiGetProfile } from '../../api';
import { setLoggedInStatus } from '../Authentication/actions';

// update the profile in the store
export function setProfileStore(data) {
    return {
        type: 'SET_PROFILE_STORE',
        data
    }
}

// profile is fetching status
export function updatingProfileStatus(value) {
    return {
        type: 'UPDATING_PROFILE_STATUS',
        value
    }
}

export function handleGetProfile() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updatingProfileStatus(true));
            const request = apiGetProfile();

            request.then(response => {
                dispatch(setProfileStore(response.data));
                dispatch(updatingProfileStatus(false));
                resolve(response.data);
            }).catch(error => {
                dispatch(updatingProfileStatus(false));
                dispatch(setLoggedInStatus(false));
                reject(error);
            });
        });
    };
}
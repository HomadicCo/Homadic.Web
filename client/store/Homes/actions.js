import { apiGetHomes } from '../../api';

// update the profile in the store
export function updateHomesStore(data) {
    return {
        type: 'UPDATE_HOMES_STORE',
        data
    }
}

// profile is fetching status
export function updateFetchingHomesStatus(value) {
    return {
        type: 'UPDATE_FETCHING_HOMES_STATUS',
        value
    }
}

export function handleGetHomes() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updatingFetchingHomesStatus(true));
            const request = apiGetProfile();

            request.then(response => {
                dispatch(updateHomesStore(response.data));
                dispatch(updatingFetchingHomesStatus(false));
                resolve(response.data);
            }).catch(error => {
                dispatch(updatingFetchingHomesStatus(false));
                console.log(error);
                reject(error);
            });
        });
    };
}
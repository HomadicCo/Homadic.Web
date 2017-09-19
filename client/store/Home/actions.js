import { apiGetHomes, apiGetHome } from '../../api';

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

// update the profile in the store
export function updateSelectedHome(home) {
    return {
        type: 'UPDATE_SELECTED_HOME',
        home
    }
}

export function handleGetHomes() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateFetchingHomesStatus(true));
            const request = apiGetHomes();

            request.then(response => {
                dispatch(updateHomesStore(response.data));
                dispatch(updateFetchingHomesStatus(false));
                resolve(response.data);
            }).catch(error => {
                dispatch(updateFetchingHomesStatus(false));
                console.log(error);
                reject(error);
            });
        });
    };
}

export function handleGetHome(homeSlug) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateFetchingHomesStatus(true));
            const request = apiGetHome(homeSlug);

            request.then(response => {
                dispatch(updateSelectedHome(response.data));
                dispatch(updateFetchingHomesStatus(false));
                resolve(response.data);
            }).catch(error => {
                dispatch(updateFetchingHomesStatus(false));
                console.log(error);
                reject(error);
            });
        });
    };
}
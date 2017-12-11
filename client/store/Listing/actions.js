/* global Promise */
import { apiGetListings } from '../../api';

// update the profile in the store
export function updateListingsStore(data) {
    return {
        type: 'UPDATE_LISTINGS_STORE',
        data
    }
}

// profile is fetching status
export function updateFetchingListingsStatus(value) {
    return {
        type: 'UPDATE_FETCHING_LISTINGS_STATUS',
        value
    }
}

export function handleGetListings(listingsQuery) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateFetchingListingsStatus(true));
            const request = apiGetListings(listingsQuery);

            request.then(response => {
                dispatch(updateListingsStore(response.data.data));
                dispatch(updateFetchingListingsStatus(false));
                resolve(response.data.data);
            }).catch(error => {
                dispatch(updateFetchingListingsStatus(false));
                console.error(error);
                reject(error);
            });
        });
    };
}
/* global Promise */
import { apiGetListings, apiGetListing } from '../../api';

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

// update the profile in the store
export function updateSelectedListing(listing) {
    return {
        type: 'UPDATE_SELECTED_LISTING',
        listing
    }
}

export function handleGetListings() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateFetchingListingsStatus(true));
            const request = apiGetListings();

            request.then(response => {
                dispatch(updateListingsStore(response.data));
                dispatch(updateFetchingListingsStatus(false));
                resolve(response.data);
            }).catch(error => {
                dispatch(updateFetchingListingsStatus(false));
                console.error(error);
                reject(error);
            });
        });
    };
}

export function handleGetListing(listingSlug) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiGetListing(listingSlug);

            request.then(response => {
                dispatch(updateSelectedListing(response.data));
                resolve(response.data);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    };
}
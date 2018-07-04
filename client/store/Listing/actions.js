/* global Promise */
import { apiGetListing, apiGetListings, apiGetReview, apiPostThumbsUp } from '../../api';

// update listing
export function updateSelectedListing(data) {
    return {
        type: 'UPDATE_SELECTED_LISTING',
        data
    }
}

// update listings
export function updateListingsStore(data) {
    return {
        type: 'UPDATE_LISTINGS_STORE',
        data
    }
}

// fetching listings
export function updateFetchingListingsStatus(value) {
    return {
        type: 'UPDATE_FETCHING_LISTINGS_STATUS',
        value
    }
}

// fetching listings
export function updateSelectedUserReview(data) {
    return {
        type: 'UPDATE_SELECTED_USER_REVIEW',
        data
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

export function handleGetListing(listingSlug) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateFetchingListingsStatus(true));
            const request = apiGetListing(listingSlug);

            request.then(response => {
                dispatch(updateSelectedListing(response.data));
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

export function handleGetUserReview(slug) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiGetReview(slug);

            request.then(response => {
                dispatch(updateSelectedUserReview(response.data));
                resolve(response.data.data);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    };
}

export function handleThumbsUp(slug, value) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiPostThumbsUp(slug, value);

            request.then(response => {
                dispatch(updateSelectedUserReview(response.data));
                resolve(response.data.data);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    };
}
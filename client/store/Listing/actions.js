/* global Promise */
import { apiGetListing, apiGetListings, apiGetReview, apiPostThumbsUp, apiPostUserReview } from '../../api';

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
export function setFetchingListingStatus(value) {
    return {
        type: 'UPDATE_FETCHING_LISTINGS_STATUS',
        value
    }
}

// fetching listings
export function addOrReplaceReview(data) {
    return {
        type: 'ADD_OR_REPLACE_REVIEW',
        data
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
            dispatch(setFetchingListingStatus(true));
            const request = apiGetListings(listingsQuery);

            request.then(response => {
                dispatch(updateListingsStore(response.data.data));
                dispatch(setFetchingListingStatus(false));
                resolve(response.data.data);
            }).catch(error => {
                dispatch(setFetchingListingStatus(false));
                console.error(error);
                reject(error);
            });
        });
    };
}

export function handleGetListing(slug) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(setFetchingListingStatus(true));
            const request = apiGetListing(slug);

            request.then(response => {
                dispatch(updateSelectedListing(response.data));
                dispatch(setFetchingListingStatus(false));
                resolve(response.data.data);
            }).catch(error => {
                dispatch(setFetchingListingStatus(false));
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

export function handleSubmitUserReview(slug, review) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiPostUserReview(slug, review);

            request.then(response => {
                dispatch(updateSelectedUserReview(response.data));
                dispatch(addOrReplaceReview(response.data));
                resolve(response.data.data);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    };
}
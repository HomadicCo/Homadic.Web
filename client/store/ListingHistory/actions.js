/* global Promise */
import { apiGetListingHistory, apiGetListingVersion } from '../../api';

// set listing history
export function setListingHistoryStore(data) {
    return {
        type: 'SET_LISTING_HISTORY_STORE',
        data
    }
}

// set selected listing version
export function setSelectedListingVersion(data) {
    return {
        type: 'SET_SELECTED_LISTING_VERSION',
        data
    }
}

// listing history loading status
export function setFetchingListingHistoryStatus(value) {
    return {
        type: 'SET_FETCHING_LISTING_HISTORY_STATUS',
        value
    }
}

export function handleGetListingHistory(slug) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(setFetchingListingHistoryStatus(true));
            const request = apiGetListingHistory(slug);

            request.then(response => {
                dispatch(setListingHistoryStore(response.data));
                dispatch(setFetchingListingHistoryStatus(false));
                resolve(response.data.data);
            }).catch(error => {
                dispatch(setFetchingListingHistoryStatus(false));
                console.error(error);
                reject(error);
            });
        });
    };
}

export function handleGetListingVersion(slug, versionId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(setFetchingListingHistoryStatus(true));
            const request = apiGetListingVersion(slug, versionId);

            request.then(response => {
                dispatch(setSelectedListingVersion(response.data));
                dispatch(setFetchingListingHistoryStatus(false));
                resolve(response.data.data);
            }).catch(error => {
                dispatch(setFetchingListingHistoryStatus(false));
                console.error(error);
                reject(error);
            });
        });
    };
}


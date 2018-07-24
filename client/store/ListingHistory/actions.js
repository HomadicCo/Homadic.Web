/* global Promise */
import { apiGetListingHistory } from '../../api';

// update listings
export function setListingHistoryStore(data) {
    return {
        type: 'SET_LISTING_HISTORY_STORE',
        data
    }
}

// fetching listings
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
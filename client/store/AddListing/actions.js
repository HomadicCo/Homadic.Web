import { apiNearbyResults } from '../../api';

// change status
export function setFetchingNearbyResultsStatus(value) {
    return {
        type: 'SET_FETCHING_NEARBY_RESULTS_STATUS',
        value
    }
}

// update nearby results
export function updateNearbyResults(data) {
    return {
        type: 'UPDATE_NEARBY_RESULTS',
        data
    }
}

// handle getting nearby results from google through our Api
export function handleGetNearbyResults(coordinates) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiNearbyResults(coordinates);
            dispatch(setFetchingNearbyResultsStatus(true));

            request.then(response => {
                dispatch(setFetchingNearbyResultsStatus(false));
                dispatch(updateNearbyResults(response.data.results));
                resolve();
            }).catch(error => {
                dispatch(setFetchingNearbyResultsStatus(false));
                reject(error);
            });
        });
    };
}
import { apiNearbyResults } from '../../api';
import { guid } from '../../functions';

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

export function updateInputProp(key, value) {
    return {
        type: 'UPDATE_INPUT_PROP',
        key,
        value
    }
}

export function addRoomToListing(room) {
    return {
        type: 'ADD_ROOM_TO_LISTING',
        id: guid(),
        room
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
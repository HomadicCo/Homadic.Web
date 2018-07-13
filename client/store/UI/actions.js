// set the loading screen
export function setLoadingStatus(value) {
    return {
        type: 'SET_LOADING_STATUS',
        value
    }
}

export function toggleMapView(value) {
    console.log(value);
    return {
        type: 'SET_MAP_VIEW',
        value
    }
}
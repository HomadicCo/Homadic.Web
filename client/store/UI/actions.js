// set the loading screen
export function setLoadingStatus(value) {
    return {
        type: 'SET_LOADING_STATUS',
        value
    }
}

export function toggleMapView(value) {
    return {
        type: 'SET_MAP_VIEW',
        value
    }
}

export function setReturnToMapView(value) {
    return {
        type: 'SET_RETURN_TO_MAPVIEW',
        value
    }
}
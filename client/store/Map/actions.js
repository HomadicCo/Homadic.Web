// the marker for adding a new place
export function setAddNewPlaceMarker(marker) {
    return {
        type: 'SET_ADD_NEW_PLACE_MARKER',
        marker
    }
}

// remove marker for adding a new place
export function removeAddNewPlaceMarker(marker) {
    return {
        type: 'REMOVE_ADD_NEW_PLACE_MARKER'
    }
}

// hover over places
export function setHoveredHome(home) {
    return {
        type: 'SET_HOVERED_HOME',
        home
    }
}

// toggle add new place mode
export function setAddNewPlaceMode(value) {
    return {
        type: 'SET_ADD_NEW_PLACE_MODE',
        value
    }
}

export function setAddNewPlaceCoordinates(coordinates) {
    return {
        type: 'SET_ADD_NEW_PLACE_COORDINATES',
        coordinates
    }
}
function addNewPlaceMarker(state, action) {
    // return state if no notes
    if (action.marker == null) return state;

    var newState = Object.assign({}, state);

    function doesNoteExist(marker) {
        return marker.key === "add-new-place";
    }

    // check if already exists
    var i = newState.markers.findIndex(doesNoteExist);

    if (i >= 0) {
        newState.markers.splice(i, 1)
    }

    newState.markers.push(action.marker);
    return newState;
}

function removeNewPlaceMarker(state) {
    var newState = Object.assign({}, state);

    function doesNoteExist(marker) {
        return marker.key === "add-new-place";
    }

    // check if already exists
    var i = newState.markers.findIndex(doesNoteExist);

    if (i >= 0) {
        newState.markers.splice(i, 1)
    }

    return newState;
}

function map(state = [], action) {
    switch (action.type) {
        case 'SET_ADD_NEW_PLACE_MARKER':
            return addNewPlaceMarker(state, action);
        case 'REMOVE_ADD_NEW_PLACE_MARKER':
            return removeNewPlaceMarker(state, action);
        case 'SET_ADD_NEW_PLACE_MODE':
            var newState = Object.assign({}, state);
            newState.addNewPlaceMode = action.value;
            return newState;
        case 'SET_ADD_NEW_PLACE_COORDINATES':
            var newState = Object.assign({}, state);
            newState.addNewPlaceCoordinates = action.coordinates;
            return newState;
    }
    return state;
}

export default map;

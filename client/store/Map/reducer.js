function map(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_HOVERED_HOME':
            newState.hoveredHome = action.home;
            return newState;
        case 'SET_ADD_NEW_PLACE_MODE':
            newState.addNewListingMode = action.value;
            return newState;
        case 'SET_ADD_NEW_PLACE_COORDINATES':
            newState.addNewListingCoordinates = action.coordinates;
            return newState;
    }
    return state;
}

export default map;

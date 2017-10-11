function map(state = [], action) {
    switch (action.type) {
        case 'SET_HOVERED_HOME':
            var newState = Object.assign({}, state);
            newState.hoveredHome = action.home;
            return newState;
        case 'SET_ADD_NEW_PLACE_MODE':
            var newState = Object.assign({}, state);
            newState.addNewListingMode = action.value;
            return newState;
        case 'SET_ADD_NEW_PLACE_COORDINATES':
            var newState = Object.assign({}, state);
            newState.addNewListingCoordinates = action.coordinates;
            return newState;
    }
    return state;
}

export default map;

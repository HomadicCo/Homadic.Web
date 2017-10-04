function map(state = [], action) {
    switch (action.type) {
        case 'SET_HOVERED_HOME':
            var newState = Object.assign({}, state);
            newState.hoveredHome = action.home;
            return newState;
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

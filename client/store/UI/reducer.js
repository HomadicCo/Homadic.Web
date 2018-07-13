function ui(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_LOADING_STATUS':
            newState.loading = action.value;
            return newState;
        case 'SET_MAP_VIEW':
            newState.mapView = action.value;
            return newState;
    }
    return state;
}

export default ui;

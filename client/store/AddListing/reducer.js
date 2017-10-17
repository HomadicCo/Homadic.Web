function AddListing(state = [], action) {
    switch (action.type) {
        case 'UPDATE_INPUT_PROP':
            var newState = Object.assign({}, state);
            newState[action.key] = action.value;
            return newState;
        case 'UPDATE_NEARBY_RESULTS':
            var newState = Object.assign({}, state);
            newState.nearbyResults = action.data;
            return newState;
        case 'SET_FETCHING_NEARBY_RESULTS_STATUS':
            var newState = Object.assign({}, state);
            newState.ui.fetchingNearbyResults = action.value;
            return newState;
    }
    return state;
}

export default AddListing;

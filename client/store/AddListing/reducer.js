function setNested(obj, key, value) {
    if (typeof key === "string") {
        var key = key.split('.');
    }

    if (key.length > 1) {
        var p = key.shift();
        if (obj[p] == null || typeof obj[p] !== 'object') {
            obj[p] = {};
        }
        setNested(obj[p], key, value);
    } else {
        obj[key[0]] = value;
    }
}

function AddListing(state = [], action) {
    switch (action.type) {
        case 'UPDATE_INPUT_PROP':
            var newState = Object.assign({}, state);
            setNested(newState['listing'], action.key, action.value);
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

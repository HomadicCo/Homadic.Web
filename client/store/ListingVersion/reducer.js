function listingVersion(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'DO_THIS':
            newState.data = action.data;
            return newState;
    }
    return state;
}

export default listingVersion;

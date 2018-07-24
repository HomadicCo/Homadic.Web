function listingHistory(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_LISTING_HISTORY_STORE':
            newState.data = action.data;
            return newState;
        case 'SET_SELECTED_LISTING_VERSION':
            newState.selected = action.data;
            return newState;
        case 'SET_FETCHING_LISTING_HISTORY_STATUS':
            newState.fetching = action.value;
            return newState;
    }
    return state;
}

export default listingHistory;

function listings(state = [], action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'UPDATE_LISTINGS_STORE':
            newState.data = action.data;
            return newState;
        case 'UPDATE_SELECTED_LISTING':
            newState.selected = action.listing;
            return newState;
        case 'UPDATE_FETCHING_LISTINGS_STATUS':
            newState.fetching = action.value;
            return newState;
    }
    return state;
}

export default listings;

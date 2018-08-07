function listings(state = [], action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'UPDATE_SELECTED_LISTING':
            newState.selected = action.data;
            return newState;
        case 'UPDATE_LISTINGS_STORE':
            newState.data = action.data;
            return newState;
        case 'UPDATE_FETCHING_LISTINGS_STATUS':
            newState.fetching = action.value;
            return newState;
        case 'SET_LISTING_NOT_FOUND':
            newState.notFound = action.value;
            return newState;
        case 'UPDATE_SELECTED_USER_REVIEW':
            newState.selectedUserReview = action.data;
            return newState;
        case 'ADD_OR_REPLACE_REVIEW': {
            const i = newState.selected.reviews.data.findIndex(r => r.user_id == action.data.user_id);
            if (i == -1) {
                newState.selected.reviews.data.unshift(action.data);
            }
            else {
                newState.selected.reviews.data.splice(i, 1);
                newState.selected.reviews.data.unshift(action.data);
            }
            return newState;
        }
    }
    return state;
}

export default listings;

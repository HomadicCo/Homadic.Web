function profile(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_PROFILE_STORE':
            newState.data = action.data;
            return newState;
        case 'SET_USER_LISTINGS':
            newState.userListings = action.data;
            return newState;
        case 'UPDATING_PROFILE_STATUS':
            newState.updating = action.value;
            return newState;
        case 'SET_LOADING_USER_LISTINGS_STATUS':
            newState.updatingUserListings = action.value;
            return newState;
    }
    return state;
}

export default profile;

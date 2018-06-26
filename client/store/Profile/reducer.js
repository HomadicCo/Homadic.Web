function profile(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_PROFILE_STORE':
            newState.data = action.data;
            return newState;
        case 'UPDATING_PROFILE_STATUS':
            newState.updating = action.value;
            return newState;
    }
    return state;
}

export default profile;

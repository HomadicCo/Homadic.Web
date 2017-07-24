function profile(state = [], action) {
    switch (action.type) {
        case 'UPDATE_PROFILE_STORE':
            var newState = Object.assign({}, state);
            newState.data = action.data;
            return newState;
        case 'UPDATING_PROFILE_STATUS':
            var newState = Object.assign({}, state);
            newState.updating = action.value;
            return newState;
    }
    return state;
}

export default profile;

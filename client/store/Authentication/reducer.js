function authentication(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_LOGGED_IN_STATUS':
            newState.isLoggedIn = action.value;
            return newState;
        case 'SET_AUTHENTICATING_STATUS':
            newState.authenticating = action.value;
            return newState;
    }
    return state;
}

export default authentication;

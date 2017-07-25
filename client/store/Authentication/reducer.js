function authentication(state = [], action) {
    switch (action.type) {
        case 'SET_LOGGED_IN_STATUS':
            var newState = Object.assign({}, state);
            newState.isLoggedIn = action.value;
            return newState;
        case 'SET_AUTHENTICATING_STATUS':
            var newState = Object.assign({}, state);
            newState.authenticating = action.value;
            return newState;
    }
    return state;
}

export default authentication;

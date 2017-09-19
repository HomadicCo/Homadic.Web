function homes(state = [], action) {
    switch (action.type) {
        case 'UPDATE_HOMES_STORE':
            var newState = Object.assign({}, state);
            newState.data = action.data;
            return newState;
        case 'UPDATE_SELECTED_HOME':
            var newState = Object.assign({}, state);
            newState.selected = action.home;
            return newState;
        case 'UPDATE_FETCHING_HOMES_STATUS':
            var newState = Object.assign({}, state);
            newState.fetching = action.value;
            return newState;
    }
    return state;
}

export default homes;

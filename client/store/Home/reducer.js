function homes(state = [], action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'UPDATE_HOMES_STORE':
            newState.data = action.data;
            return newState;
        case 'UPDATE_SELECTED_HOME':
            newState.selected = action.home;
            return newState;
        case 'UPDATE_FETCHING_HOMES_STATUS':
            newState.fetching = action.value;
            return newState;
    }
    return state;
}

export default homes;

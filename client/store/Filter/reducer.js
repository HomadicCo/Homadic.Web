function filter(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_FILTER':
            newState = action.value;
            return newState;
        case 'CLEAR_FILTER':
            newState = {};
            return newState;
    }
    return state;
}

export default filter;

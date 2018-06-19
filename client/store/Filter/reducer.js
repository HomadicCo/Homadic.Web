function setFilter(value, defaultFilter) {
    if (value.parameters == defaultFilter.parameters)
        return Object.assign({}, defaultFilter);

    value.empty == false;
    return value;
}

function filter(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_FILTER':
            newState = setFilter(action.value, action.defaultFilter);
            return newState;
        case 'CLEAR_FILTER':
            newState = action.defaultFilter;
            return newState;
    }
    return state;
}

export default filter;

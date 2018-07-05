function clearFilter() {
    return {
        empty: true,
        parameters: {
            min_rate: 0,
            max_rate: 0,
            types: [
                'coliving',
                'condo',
                'guesthouse',
                'hostel',
                'hotel',
                'house'
            ]
        }
    };
}

function setFilter(value) {
    const parameters = {
        min_rate: 0,
        max_rate: 0,
        types: [
            'coliving',
            'condo',
            'guesthouse',
            'hostel',
            'hotel',
            'house'
        ]
    };

    if (value.parameters == parameters)
        return clearFilter();

    value.empty == false;
    return value;
}

function filter(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_FILTER':
            newState = setFilter(action.value);
            return newState;
        case 'CLEAR_FILTER':
            newState = clearFilter();
            return newState;
    }
    return state;
}

export default filter;

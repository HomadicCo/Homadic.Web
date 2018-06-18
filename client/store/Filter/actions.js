// set the filter
export function setFilter(value) {
    return {
        type: 'SET_FILTER',
        value
    }
}

// clear the filter
export function clearFilter() {
    return {
        type: 'CLEAR_FILTER'
    }
}
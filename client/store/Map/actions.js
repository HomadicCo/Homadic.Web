// hover over listings
export function setHoveredListing(listing) {
    return {
        type: 'SET_HOVERED_LISTING',
        listing
    }
}

// toggle add new listing mode
export function setAddNewListingMode(value) {
    return {
        type: 'SET_ADD_NEW_PLACE_MODE',
        value
    }
}

// toggle the filter mode
export function setFilterMode(value) {
    return {
        type: 'SET_FILTER_MODE',
        value
    }
}

export function setAddNewListingCoordinates(coordinates) {
    return {
        type: 'SET_ADD_NEW_PLACE_COORDINATES',
        coordinates
    }
}
// hover over listings
export function setSelectedListing(listing) {
    return {
        type: 'SET_LISTING_PREVIEW',
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

// toggle add new listing mode
export function setMapNotFound(value) {
    return {
        type: 'SET_MAP_NOT_FOUND',
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
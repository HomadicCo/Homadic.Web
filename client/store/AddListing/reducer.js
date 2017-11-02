function setNested(obj, key, value) {
    if (typeof key === "string") {
        var key = key.split('.');
    }

    if (key.length > 1) {
        let p = key.shift();
        let keyIsArray = p.match(/\[(\d*)\]/g);
        let i = null;

        if (keyIsArray) {
            i = parseFloat(keyIsArray[0].match(/(\d+)/g));
            p = p.replace((/\[(\d*)\]/g), '');
        }

        if (obj[p] == null || typeof obj[p] !== 'object') {
            obj[p] = {};
        }

        i === null ? setNested(obj[p], key, value) : setNested(obj[p][i], key, value);
    } else {
        obj[key[0]] = value;
    }
}

function AddListing(state = [], action) {
    switch (action.type) {
        case 'CLEAR_NEW_LISTING':
            var newState = Object.assign({}, state);
            newState.listing = action.emptyListing;
            return newState;
        case 'SET_VALIDATION_VALUE':
            var newState = Object.assign({}, state);
            newState.valid[action.key] = action.value;
            return newState;
        case 'UPDATE_INPUT_PROP':
            var newState = Object.assign({}, state);
            setNested(newState.listing, action.key, action.value);
            return newState;
        case 'UPDATE_NEARBY_RESULTS':
            var newState = Object.assign({}, state);
            newState.nearbyResults = action.data;
            return newState;
        case 'SET_LISTING_FROM_GOOGLE_MAPS':
            let { googleMapsPlace } = action;
            var newState = Object.assign({}, state);

            newState.listing = {
                ...newState.listing,
                address: googleMapsPlace.formatted_address,
                location: {
                    type: "Point",
                    coordinates: [googleMapsPlace.geometry.location.lat, googleMapsPlace.geometry.location.lng]
                },
                name: googleMapsPlace.name,
                phone_number: googleMapsPlace.international_phone_number,
                google_maps_id: googleMapsPlace.place_id,
                rating: googleMapsPlace.rating,
                website: googleMapsPlace.website
            }

            return newState;
        case 'SET_EXPANDED_ROOM':
            var newState = Object.assign({}, state);
            newState.ui.expandedRoom = action.roomId;
            return newState;
        case 'REMOVE_ROOM':
            var newState = Object.assign({}, state);
            //only return if id is not noteId
            function dontRemove(roomId, room) {
                return roomId != room.id;
            }

            newState.listing.rooms = newState.listing.rooms.filter(dontRemove.bind(null, action.roomId));
            return newState;
        case 'SET_FETCHING_NEARBY_RESULTS_STATUS':
            var newState = Object.assign({}, state);
            newState.ui.fetchingNearbyResults = action.value;
            return newState;
        case 'ADD_ROOM_TO_LISTING':
            var newState = Object.assign({}, state);
            newState.ui.expandedRoom = action.id;
            newState.listing.rooms.push(Object.assign({}, action.room, { id: action.id }));
            return newState;
    }
    return state;
}

export default AddListing;

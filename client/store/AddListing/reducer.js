//only return if id is not noteId
function dontRemove(roomId, room) {
    return roomId !== room.id;
}

function setNested(obj, key, value) {
    if (typeof key === 'string') {
        key = key.split('.');
    }

    if (key.length > 1) {
        let p = key.shift();
        let keyIsArray = p.match(/\[(\d*)\]/g);
        let i = null;

        if (keyIsArray) {
            i = parseFloat(keyIsArray[0].match(/(\d+)/g));
            p = p.replace(/\[(\d*)\]/g, '');
        }

        if (obj[p] === null || typeof obj[p] !== 'object') {
            obj[p] = {};
        }

        i === null ? setNested(obj[p], key, value) : setNested(obj[p][i], key, value);
    } else {
        obj[key[0]] = value;
    }
}

function AddListing(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'CLEAR_NEW_LISTING':
            newState.listing = action.emptyListing;
            return newState;
        case 'SET_VALIDATION_VALUE':
            newState.valid[action.key] = action.value;
            return newState;
        case 'SET_GMID':
            newState.ui.gmid = action.gmid;
            return newState;
        case 'UPDATE_INPUT_PROP':
            setNested(newState.listing, action.key, action.value);
            return newState;
        case 'UPDATE_NEARBY_RESULTS':
            newState.nearbyResults = action.data;
            return newState;
        case 'SET_LISTING_FROM_GOOGLE_MAPS':
            newState.listing = {
                ...newState.listing,
                address: action.googleMapsPlace.formatted_address,
                contact_details: {
                    email: '',
                    phone_number: action.googleMapsPlace.international_phone_number,
                },
                location: {
                    type: 'Point',
                    coordinates: [action.googleMapsPlace.geometry.location.lat, action.googleMapsPlace.geometry.location.lng]
                },
                name: action.googleMapsPlace.name,
                google_place_id: action.googleMapsPlace.place_id,
                rating: action.googleMapsPlace.rating,
                website: action.googleMapsPlace.website
            };

            return newState;
        case 'SET_EXPANDED_ROOM':
            newState.ui.expandedRoom = action.roomId;
            return newState;
        case 'REMOVE_ROOM':
            newState.listing.rooms = newState.listing.rooms.filter(dontRemove.bind(null, action.roomId));
            return newState;
        case 'SET_FETCHING_NEARBY_RESULTS_STATUS':
            newState.ui.fetchingNearbyResults = action.value;
            return newState;
        case 'ADD_ROOM_TO_LISTING':
            newState.ui.expandedRoom = action.id;
            newState.listing.rooms.push(Object.assign({}, action.room, { id: action.id }));
            return newState;
    }
    return state;
}

export default AddListing;

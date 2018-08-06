import { guid, setNestedKey } from '../../functions';

//only return if id is not noteId
function dontRemove(roomId, room) {
    return roomId !== room.id;
}

function AddListing(state = [], action) {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'CLEAR_NEW_LISTING':
            newState.listing = action.emptyListing;
            return newState;
        case 'SET_NEW_LISTING':
            action.listing.rooms.forEach((room) => {
                room.id = guid();
            })
            newState.listing = action.listing;
            return newState;
        case 'SET_VALIDATION_VALUE':
            newState.valid[action.key] = action.value;
            return newState;
        case 'SET_GMID':
            newState.ui.gmid = action.gmid;
            return newState;
        case 'UPDATE_INPUT_PROP':
            setNestedKey(newState.listing, action.key, action.value);
            return newState;
        case 'SET_NEARBY_RESULTS':
            newState.nearbyResults = action.data;
            return newState;
        case 'CLEAR_NEARBY_RESULTS':
            newState.nearbyResults = []
            return newState;
        case 'SET_LISTING_FROM_GOOGLE_MAPS':
            newState.listing = {
                ...newState.listing,
                address: { address: action.googleMapsPlace.formatted_address },
                contact_details: {
                    email: '',
                    phone_number: action.googleMapsPlace.international_phone_number,
                    website: action.googleMapsPlace.website
                },
                location: {
                    type: 'Point',
                    coordinates: [action.googleMapsPlace.geometry.location.lat, action.googleMapsPlace.geometry.location.lng]
                },
                coordinates: {
                    lat: action.googleMapsPlace.geometry.location.lat,
                    lng: action.googleMapsPlace.geometry.location.lng
                },
                name: action.googleMapsPlace.name,
                google_place_id: action.googleMapsPlace.place_id,
                rating: action.googleMapsPlace.rating
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

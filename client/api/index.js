import Axios from 'axios';
import queryString from 'query-string';
import { loadLocalStorage } from '../functions';

// set some default stuff

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    return apiUrl ? apiUrl : 'https://homadic-functions.azurewebsites.net/api/';
}

function getAuthHeader(customHeaders = {}) {
    var auth = loadLocalStorage('auth');

    if (auth === null || auth === undefined || auth.access_token === null) {
        return null;
    }

    return {
        headers: {
            Authorization: auth.access_token,
            ...customHeaders
        }
    }
}

Axios.defaults.baseURL = getApiUrl();

// login

export function apiPerformLogin(code) {
    return Axios.post('token', { code });
}

// profile

export function apiGetProfile() {
    return Axios.get('profile', getAuthHeader());
}

export function apiGetUserListings() {
    return Axios.get('profile/listings', getAuthHeader());
}

// google maps

export function apiSearchAutocomplete(query) {
    return Axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + query + '&types=(cities)&key=AIzaSyCH7lJaKLHKo-uchWFd0WRMlLPx9Yuab18');
}

export function apiNearbyResults(coordinates) {
    return Axios.get('nearby?lat=' + coordinates.lat + '&lng=' + coordinates.lng, getAuthHeader());
}

export function apiGetGooglePlace(googlePlaceId) {
    return Axios.get('nearby/' + googlePlaceId, getAuthHeader());
}

// listings

export function apiGetListings(listingsQuery) {
    return Axios.get('listings?' + queryString.stringify(listingsQuery, { encode: false }), getAuthHeader());
}

export function apiGetListing(slug) {
    return Axios.get('listing/' + slug, getAuthHeader());
}

export function apiGetReview(slug) {
    return Axios.get('listing/' + slug + '/review', getAuthHeader());
}

export function apiGetReviews(slug) {
    return Axios.get('listing/' + slug + '/reviews', getAuthHeader());
}

export function apiPostUserReview(slug, review) {
    return Axios.post('listing/' + slug + '/review', review, getAuthHeader());
}

export function apiPostThumbsUp(slug, value) {
    return Axios.post('listing/' + slug + '/review/thumbsup?value=' + value, {}, getAuthHeader());
}

export function apiGetListingImages(slug) {
    return Axios.get('listing/' + slug + '/images', getAuthHeader());
}

export function apiPostListingImage(slug, formData) {
    return Axios.post('listing/' + slug + '/images', formData, getAuthHeader({ 'Content-Type': 'multipart/form-data' }))
}

export function apiPostListing(listing) {
    return Axios.post('listing', listing, getAuthHeader());
}

// listing editing
export function apiGetListingHistory(slug) {
    return Axios.get('listing/' + slug + '/history', getAuthHeader());
}

export function apiGetListingVersion(slug, versionId) {
    return Axios.get('listing/' + slug + '/history/' + versionId, getAuthHeader());
}

export function apiUpdateAmenities(slug, amenities) {
    return Axios.post('listing/' + slug + '/amenities', amenities, getAuthHeader());
}

export function apiUpdateBills(slug, bills) {
    return Axios.post('listing/' + slug + '/bills', bills, getAuthHeader());
}

export function apiUpdateContactDetails(slug, contactDetails) {
    return Axios.post('listing/' + slug + '/contactdetails', contactDetails, getAuthHeader());
}

export function apiUpdateNotes(slug, notes) {
    return Axios.post('listing/' + slug + '/notes', { notes }, getAuthHeader());
}

export function apiUpdateRooms(slug, rooms) {
    return Axios.post('listing/' + slug + '/rooms', rooms, getAuthHeader());
}

export function apiUpdateSocialDetails(slug, socialDetails) {
    return Axios.post('listing/' + slug + '/socialdetails', socialDetails, getAuthHeader());
}

export function apiUpdateType(slug, type) {
    return Axios.post('listing/' + slug + '/type', { type }, getAuthHeader());
}

export function apiUpdateWifi(slug, wifi) {
    return Axios.post('listing/' + slug + '/wifi', wifi, getAuthHeader());
}
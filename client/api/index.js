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
    return Axios.get('listings?' + queryString.stringify(listingsQuery), getAuthHeader());
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
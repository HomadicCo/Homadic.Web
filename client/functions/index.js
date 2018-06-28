/* global Promise */
import removeAccents from 'remove-accents';

export function setDocumentTitle(value) {
    document.title = (value === undefined ? 'Abstrack' : value + ' // Abstrack');
}

export function TitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function clearLocalStorage() {
    localStorage.clear();
}

// delay to use then/catch
export function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t)
    });
}


// generate a rando guid
export function guid() {
    function s4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (s4() + s4() + '-' + s4() + '-4' + s4().substr(0, 3) + '-' + s4() + '-' + s4() + s4() + s4()).toLowerCase();
}

export const loadLocalStorage = (key) => {
    try {
        const serialized = localStorage.getItem(key);
        if (serialized === null) {
            return undefined;
        }
        return JSON.parse(serialized);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export const saveLocalStorage = (key, value) => {
    try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
    } catch (err) {
        console.log(err);
    }
}

export const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log(err);
    }
}

export const generateRoomTitle = (room) => {
    let serviced = '';
    switch (room.serviced) {
        case false:
            serviced = '';
            break;
        case true:
            serviced = ', serviced';
            break;
    }

    let bedroom = '';
    switch (room.bedrooms) {
        case 0:
            bedroom = 'Studio';
            break;
        case 1:
            bedroom = '1 bedroom';
            break;
        case 2:
            bedroom = '2 bedroom';
            break;
        case 3:
            bedroom = '3 bedroom';
            break;
    }

    let bathroom = '';
    switch (room.bathrooms) {
        case 1:
            bathroom = '1 bathroom';
            break;
        case 2:
            bathroom = '2 bathroom';
            break;
        case 3:
            bathroom = '3 bathroom';
            break;
    }

    return bedroom + ', ' + bathroom + serviced;
}

// create a slug that can be used to search google maps
export function convertToSlug(text) {
    return removeAccents(text)
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}

export function extractYoutubeFromString(string) {
    // https://regex101.com/r/muukhG/1
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i
    return string.match(regex);
}

// generate the facebook redirect Url
export function getLoginUrl(state) {
    const port = window.location.port ? ':' + window.location.port : '';
    const redirectUri = window.location.protocol + '//' + window.location.hostname + port + '/signin-facebook';
    return 'https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&scope=email&redirect_uri=' + redirectUri + '&state=' + state;
}

export function getCoordinateDistance(point1, point2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (point2.lat - point1.lat) * Math.PI / 180;
    var dLon = (point2.lng - point1.lng) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d * 1000);
}

export function getListingBySlug(slug, listings) {
    const i = listings.findIndex((l) => l.slug == slug);
    return listings[i];
}
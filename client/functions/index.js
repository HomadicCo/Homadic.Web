import removeAccents from 'remove-accents';

export function setDocumentTitle(value) {
    document.title = (value === undefined ? "Abstrack" : value + " // Abstrack");
}

export function clearLocalStorage() {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        if ("nm." == localStorage.key(i).substring(0, 3)) {
            localStorage.removeItem(localStorage.key(i));
        }
    }
}

// delay to use then/catch
export function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t)
    });
}


// generate a rando guid
export function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
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
    let serviced = "";
    switch (room.serviced) {
        case false:
            serviced = "";
            break;
        case true:
            serviced = ", serviced";
            break;
    }

    let bedroom = "";
    switch (room.bedrooms) {
        case 0:
            bedroom = "Studio";
            break;
        case 1:
            bedroom = "1 bedroom";
            break;
        case 2:
            bedroom = "2 bedroom";
            break;
        case 3:
            bedroom = "3 bedroom";
            break;
    }

    let bathroom = "";
    switch (room.bathrooms) {
        case 1:
            bathroom = "1 bathroom";
            break;
        case 2:
            bathroom = "2 bathroom";
            break;
        case 3:
            bathroom = "3 bathroom";
            break;
    }

    return bedroom + ", " + bathroom + serviced;
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
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
    return string.match(regex);
}

// generate the facebook redirect Url
export function getLoginUrl(state) {
    const redirectUri = "http://localhost:9990/signin-facebook";
    return "https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&scope=email&redirect_uri=" + redirectUri + "&state=" + state;
}
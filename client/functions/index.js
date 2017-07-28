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

export function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t)
    });
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

export function convertToSlug(text) {
    return removeAccents(text)
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
        ;
}

export function getLoginUrl(state) {
    const redirectUri = "http://localhost:9990/signin-facebook";
    return "https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&scope=email&redirect_uri=" + redirectUri + "&state=" + state;
}
import Axios from 'axios';
import { loadLocalStorage } from '../functions';

// set some default stuff

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.homadic.co/api/";
}

function getAuthHeader() {
    var auth = loadLocalStorage("auth");

    if (auth == null || auth.token == null) {
        return null;
    }

    return {
        headers: {
            Authorization: "bearer " + auth.token
        }
    }
}

Axios.defaults.baseURL = getApiUrl();

// login

export function apiGetToken(payload) {
    return Axios.post("auth/token", payload);
}

export function apiGetTokenFromRefreshToken(token) {
    return Axios.post("auth/token", {}, {
        headers: {
            refreshtoken: token,
            'Content-Type': 'application/json'
        }
    });
}

export function apiForgotPassword(email) {
    return Axios.post("auth/forgot-password", {
        email
    });
}

// registration

export function apiRegister(payload) {
    return Axios.post("register", payload);
}

// account

export function apiGetAccount() {
    return Axios.get("account", getAuthHeader());
}

export function apiUpdateProfileDetails(updatedDetails) {
    return Axios.put("account/profile-details", updatedDetails, getAuthHeader());
}

export function apiUpdatePassword(currentPassword, newPassword) {
    return Axios.post("account/password", {
        currentPassword,
        newPassword
    }, getAuthHeader());
}

// notes

export function apiGetNote(noteId) {
    return Axios.get("notes/" + noteId, getAuthHeader());
}

export function apiAddNote(newNoteDTO) {
    return Axios.post("notes", newNoteDTO, getAuthHeader());
}

export function apiGetInbox() {
    return Axios.get("inbox", getAuthHeader());
}

export function apiGetPinned() {
    return Axios.get("pinned", getAuthHeader());
}

export function apiGetNotes(query) {
    return Axios.post("notes/search", query, getAuthHeader());
}

export function apiPinNote(noteId, value) {
    if (value) {
        return Axios.post("pinned/" + noteId, null, getAuthHeader());
    } else {
        return Axios.delete("pinned/" + noteId, getAuthHeader());
    }
}

export function apiArchiveNote(noteId, value) {
    if (value) {
        return Axios.post("inbox/" + noteId, null, getAuthHeader());
    } else {
        return Axios.delete("inbox/" + noteId, getAuthHeader());
    }
}

// drafts

export function apiGetDrafts() {
    return Axios.get("drafts", getAuthHeader());
}

export function apiGetDraft(draftId) {
    return Axios.get("drafts/" + draftId, getAuthHeader());
}

export function apiAddDraft(draft) {
    return Axios.post("drafts", draft, getAuthHeader());
}

export function apiUpdateDraft(draftId, draft) {
    return Axios.put("drafts/" + draftId, draft, getAuthHeader());
}

export function apiDeleteDraft(draftId) {
    return Axios.delete("drafts/" + draftId, getAuthHeader());
}

// tracks

export function apiGetTracks() {
    return Axios.get("tracks", getAuthHeader());
}

export function apiGetTrack(trackId) {
    return Axios.get("tracks/" + trackId, getAuthHeader());
}

export function apiAddTrack(track) {
    return Axios.post("tracks", track, getAuthHeader());
}

export function apiUpdateTrack(trackId, track) {
    return Axios.put("tracks/" + trackId, track, getAuthHeader());
}

export function apiDeleteTrack(trackId) {
    return Axios.delete("tracks/" + trackId, { ...getAuthHeader(), data: {} });
}

// lazy search
export function apiGetLazySearchResults(q) {
    return Axios.get("search?q=" + encodeURIComponent(q), getAuthHeader());
}

// hashtags
export function apiGetHashtags() {
    return Axios.get("hashtags", getAuthHeader());
}
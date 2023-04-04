export const postLevelBody = {
    user_id: "642161d67a4a6ac23c5b0fe5",
    stage: 1,
    start: "Wed Mar 29 2023 13:10:09 GMT+0200 (Mitteleuropäische Sommerzeit)",
}
export const updateLevelBody = {
    user_id: "642161d67a4a6ac23c5b0fe5",
    default_code: "long line of code",
    default_world: {},
    stage: 1,
    code: "long line of code",
    done: "",
    start: "Wed Mar 29 2023 13:10:09 GMT+0200 (Mitteleuropäische Sommerzeit)",
    inactive: 5
}
export const postAttemptBody = {
    timestamp: "Wed Mar 29 2023 13:10:09 GMT+0200 (Mitteleuropäische Sommerzeit)",
}
export const findLevelBody = {
    user_id: "642161d67a4a6ac23c5b0fe5",
    stage: 1
}
export const updateUserBody = {
    id: "642161d67a4a6ac23c5b0fe5",
    lastStage: 1
}
export const getLevelBody = {
    id: "642161d67a4a6ac23c5b0fe5"
}

//Checks if keys and types are the same
export function hasSameKeys(a, b) {
    return Object.keys(a).length === Object.keys(b).length
        && Object.keys(a).every(k => b.hasOwnProperty(k)
            && Object.keys(a).every(k => typeof b[k] == typeof a[k]))
}
//Checks if b has all keys that are in a, as well as the correct types
export function hasKeys(a, b) {
    return Object.keys(a).every(k => b.hasOwnProperty(k)
        && Object.keys(a).every(k => typeof b[k] == typeof a[k]))
}
//Process the request body to an object
export function setBodyObject(body) {
    let bodyObject = body;
    try {
        if (typeof body == "string") {
            bodyObject = JSON.parse(body);
        }
    } catch { }
    return bodyObject
}

export async function databaseError(res, e) {
    return res.status(500).json({ "error": "DATABASE ERROR: " + e.toString(), "status": 500 })
}

export async function userError(res, e) {
    return res.status(300).json({ "error": "INVALID INPUT: " + e, "status": 300 })
}

export async function returnError(res, e) {
    return res.status(500).json({ "error": "INTERNAL SERVER ERROR: " + e.toString(), "status": 500 })
}
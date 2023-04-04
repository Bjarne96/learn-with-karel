import { ObjectId } from 'mongodb';
import levels from "../data/levels"

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

export async function createLevel(user_id, stage, start, db) {
    if (levels[(stage - 1)] == null) return { insertedId: null }
    return await db.collection("level").insertOne({
        "user_id": user_id,
        "stage": stage,
        "default_code": levels[(stage - 1)].code,
        "default_world": levels[(stage - 1)].worlds[0],
        "code": levels[(stage - 1)].code,
        "start": start,
        "done": "",
        "inactive": 0
    });
}

//Finds the level, when given id or user_id and stage
export async function findLevel(bodyObject, db) {
    try {
        if (hasKeys(getLevelBody, bodyObject)) {
            return await db
                .collection("level")
                .findOne({
                    _id: new ObjectId(bodyObject["id"] as string)
                })
        } else if (hasKeys(findLevelBody, bodyObject)) {
            return await db
                .collection("level")
                .findOne({
                    user_id: bodyObject["user_id"],
                    stage: bodyObject["stage"]
                })
        } else {
            return null;
        }
    } catch (e) {
        console.log('e', e);
        return null;
    }
}

export async function getLevel(body, db) {
    try {
        const level = await findLevel(body, db)
        //Level does not exists
        if (level == null && body["id"]) return { status: 300, msg: "Could not find your Level." }
        //Level has to be created, when user_id exists
        if (level == null) {
            const user = await db
                .collection("user")
                .findOne({ _id: new ObjectId(body["user_id"] as string) })
            if (user == null) return { status: 300, msg: "You are not registered or you have not used your user specific link." }
            const response = await createLevel(body["user_id"], body["stage"], new Date().toString(), db)
            if (!response["insertedId"]) return { status: 500, msg: "Could not insert Level." }
            const newLevel = await findLevel({ id: response.insertedId.toString() }, db)
            return { status: 200, level: newLevel }
        }
        return { status: 200, level: level }
    } catch (e) {
        return { status: 500, msg: e.toString() }
    }
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
import { ObjectId } from 'mongodb';
import { updateLevelBody, findLevelBody, getLevelBody, postLevelBody, postAttemptBody } from '~/types/requests';
import clientPromise from '../../lib/mongodb'
import levels from "../../data/levels"
//Checks if keys and types are the same
function hasSameKeys(a, b) {
    return Object.keys(a).length === Object.keys(b).length
        && Object.keys(a).every(k => b.hasOwnProperty(k)
            && Object.keys(a).every(k => typeof b[k] == typeof a[k]))
}
//Checks if b has all keys that are in a, as well as the correct types
function hasKeys(a, b) {
    return Object.keys(a).every(k => b.hasOwnProperty(k)
        && Object.keys(a).every(k => typeof b[k] == typeof a[k]))
}
//Process the request body to an object
function setBodyObject(body) {
    let bodyObject = body;
    try {
        if (typeof body == "string") {
            bodyObject = JSON.parse(body);
        }
    } catch { }
    return bodyObject
}
//Finds the level, when given id or user_id and stage
async function findLevel(bodyObject, db) {
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

export default async function handler(req, res) {
    console.log('handler', req.body);
    let db;
    let client;
    try {
        client = await clientPromise;
        db = client.db("karel");
    } catch (e) {
        return databaseError(res, e)
    }
    if (req["method"] == "POST") {
        return handlePost(req, res, db)
    }
    if (req["method"] == "GET") {
        return handleGet(req, res, db)
    }
    if (req["method"] == "PUT") {
        return handlePut(req, res, db)
    }
}

async function handleGet(req, res, db) {
    const bodyObject = setBodyObject(req.body)
    try {
        const level = await findLevel(bodyObject, db)
        if (level == null) return userError(res, "Could not find your level.")
        return res.status(200).json(level)
    } catch (e) {
        return databaseError(res, e)
    }
}

async function handlePut(req, res, db) {
    const bodyObject = setBodyObject(req.body)
    try {
        const bodyLevel = bodyObject["level"]
        if (!hasKeys(bodyLevel, updateLevelBody)) return userError(res, "Your request does not meet the specifications.")
        const level = await findLevel(bodyLevel, db)
        if (level == null) return userError(res, "Could not find your level.")
        if (level["_id"]) {
            //Add attempt (if run code was pressed on frontend)
            if (bodyObject.hasOwnProperty('attempt') && hasKeys(bodyObject["attempt"], postAttemptBody) && bodyLevel["code"]) {
                //TODO: level_id is not saved as string
                const response = await db.collection("attempts").insertOne({
                    "level_id": level["_id"] as string,
                    "user_id": bodyLevel["user_id"],
                    "stage": bodyLevel["stage"],
                    "timestamp": bodyObject["attempt"]["timestamp"],
                    "code": bodyLevel["code"],
                });
                if (!response["insertedId"]) return databaseError(res, "Could not insert Attempt.")
            }
            //Update only necessary keys
            const updateObject = {}
            delete bodyLevel.stage
            delete bodyLevel.user_id
            Object.keys(bodyLevel).forEach(k => { updateObject[k] = bodyLevel[k] })
            //Save into the levellog, when finished the first time
            if (level["done"] == "" && bodyLevel["done"] != null && bodyLevel["done"] != "") {
                const response = await db.collection("levellog").insertOne({
                    "_id": new ObjectId(level["_id"] as string),
                    "user_id": level["user_id"],
                    "stage": level["stage"],
                    "default_code": level["default_code"],
                    "default_world": level["default_world"],
                    "start": level["start"],
                    "code": bodyLevel["code"],
                    "done": bodyLevel["done"],
                    "inactive": bodyLevel["inactive"]
                });
                if (!response["insertedId"]) return databaseError(res, "Could not insert Level.")
            }
            await db.collection("level").updateOne(
                {
                    _id: level["_id"],
                },
                {
                    $set: updateObject
                }
            );
            return res.status(200).json({ "id": level["_id"] as string, status: 200 })
        } else {
            return userError(res, "We could not find the level you want to update. user_id: " + bodyLevel["user_id"] + " stage: " + bodyLevel["stage"])
        }
    } catch (e) {
        returnError(res, e)
    }

}

async function handlePost(req, res, db) {
    const bodyObject = setBodyObject(req.body)
    try {
        if (!hasSameKeys(postLevelBody, bodyObject)) return userError(res, "You request does not meet the specifications.")
        const response = await db.collection("level").insertOne({
            "user_id": bodyObject["user_id"],
            "stage": bodyObject["stage"],
            "default_code": levels[(bodyObject["stage"] - 1)].code,
            "default_world": levels[(bodyObject["stage"] - 1)].worlds[0],
            "code": levels[(bodyObject["stage"] - 1)].code,
            "start": bodyObject["start"],
            "done": "",
            "inactive": 0
        });
        if (!response["insertedId"]) return databaseError(res, "Could not insert Level.")
        return res.status(200).json({ "id": response.insertedId, "status": 200 })
    } catch (e) {
        return databaseError(res, e)
    }
}

async function databaseError(res, e) {
    return res.status(500).json({ "error": "DATABASE ERROR: " + e.toString(), "status": 500 })
}

async function userError(res, e) {
    return res.status(300).json({ "error": "INVALID INPUT: " + e, "status": 300 })
}

async function returnError(res, e) {
    return res.status(500).json({ "error": "INTERNAL SERVER ERROR: " + e.toString(), "status": 500 })
}

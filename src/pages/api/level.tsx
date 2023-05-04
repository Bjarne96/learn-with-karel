import { ObjectId } from 'mongodb';
import {
    updateLevelBody,
    postLevelBody,
    postAttemptBody,
    hasSameKeys,
    setBodyObject,
    userError,
    databaseError,
    returnError,
    hasKeys,
    getLevel,
    findLevel,
    createLevel
} from '~/types/requests';
import clientPromise from '../../lib/mongodb'

//Sorts the requests by type
export default async function handler(req, res) {

    let db;
    let client;
    try {
        console.log('req["method"]', req["method"]);
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
// Returns a level for a user_id and stage
// The function creates a level if the user exists, but no level for that stage
async function handleGet(req, res, db) {
    const bodyObject = setBodyObject(req.query)
    const response = await getLevel(bodyObject, db)
    if (response["status"] == 200) {
        return res.status(200).json(response.level)
    }
    if (response["status"] == 300) {
        return userError(res, response["msg"])
    }
    if (response["status"] == 500) {
        return databaseError(res, response["msg"])
    }
    try {
        const level = await findLevel(bodyObject, db)
        //Level does not exists
        if (level == null && bodyObject["id"]) return userError(res, "Could not find your Level.")
        //Level has to be created, when user_id exists
        if (level == null) {
            const user = await db
                .collection("user")
                .findOne({ _id: new ObjectId(bodyObject["user_id"] as string) })
            if (user == null) return userError(res, "You are not registered or you have not used your user specific link.")
            const response = await createLevel(bodyObject["user_id"], bodyObject["stage"], new Date().toString(), db)
            if (!response["insertedId"]) return databaseError(res, "Could not insert Level.")
            const newLevel = await findLevel({ id: response.insertedId.toString() }, db)
            return res.status(200).json(newLevel)
        }
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
        const level = await findLevel(bodyObject, db)
        if (level == null) return userError(res, "Could not find your level.")
        if (level["id"]) {
            //Adds attempt, when attempt object is given 
            if (bodyObject.hasOwnProperty('attempt') && hasKeys(bodyObject["attempt"], postAttemptBody) && bodyLevel["code"]) {
                const response = await db.collection("attempts").insertOne({
                    "level_id": level["id"],
                    "user_id": bodyObject["user_id"],
                    "stage": bodyObject["stage"],
                    "timestamp": bodyObject["attempt"]["timestamp"],
                    "code": bodyLevel["code"],
                });
                if (!response["insertedId"]) return databaseError(res, "Could not insert Attempt.")
            }
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
                    "done": bodyLevel["done"]
                    // "inactive": bodyLevel["inactive"]
                });
                if (!response["insertedId"]) return databaseError(res, "Could not insert Level.")
            }
            const response = await db.collection("level").updateOne(
                {
                    _id: new ObjectId(level["id"]),
                },
                {
                    $set: bodyLevel
                }
            );
            if (response["matchedCount"] == 0) return databaseError(res, "Could not update the level.")
            return res.status(200).json({ "id": level["id"] as string, status: 200 })
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
        // Checks if the requests body meets the specifications
        if (!hasSameKeys(postLevelBody, bodyObject)) return userError(res, "You request does not meet the specifications.")
        // Check if the level already exists
        const level = await findLevel(bodyObject, db)
        if (level != null) return userError(res, "The level already exists.")
        // Check if the user is registered
        const user = await db.collection("user").findOne({ _id: new ObjectId(bodyObject["user_id"] as string) })
        if (user == null) return userError(res, "Your user_id does not exists.")
        // Creates the level
        const response = await createLevel(bodyObject["user_id"], bodyObject["stage"], bodyObject["start"], db)
        if (!response["insertedId"]) return databaseError(res, "Could not insert Level.")
        return res.status(200).json({ "id": response.insertedId, "status": 200 })
    } catch (e) {
        return databaseError(res, e)
    }
}

import { ObjectId } from 'mongodb';
import levels from "../data/levels"
import type { NextApiRequest, NextApiResponse } from "next"
import { unknown } from 'zod';

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
    if (levels[(stage)] == null) return { insertedId: null }
    return await db.collection("level").insertOne({
        "user_id": user_id,
        "stage": Number(stage),
        "default_code": levels[stage].code,
        "default_world": levels[stage].worlds[0],
        "code": levels[stage].code,
        "start": start,
        "done": "",
        "inactive": 0
    });
}

//Finds the level, when given id or user_id and stage
export async function findLevel(bodyObject, db) {
    try {
        if (bodyObject["stage"]) bodyObject["stage"] = Number(bodyObject["stage"])
        if (hasKeys(getLevelBody, bodyObject)) {
            return await db
                .collection("level")
                .findOne({
                    _id: new ObjectId(bodyObject["id"] as string)
                })
            //TODO: Filter fields -> This doesnt work -> , { default_world: 0, default_code: 0 })
        } else if (hasKeys(findLevelBody, bodyObject)) {
            const dbLevel = await db
                .collection("level")
                .findOne({
                    user_id: bodyObject["user_id"],
                    stage: Number(bodyObject["stage"])
                })
            const level = {};
            level["id"] = dbLevel._id.toString()
            level["user_id"] = dbLevel.user_id
            level["code"] = dbLevel.code
            level["done"] = dbLevel.done
            level["stage"] = dbLevel.stage
            level["start"] = dbLevel.start
            level["default_world"] = dbLevel.default_world
            level["default_code"] = dbLevel.default_code
            return level
        } else {
            return null;
        }
    } catch (e) {
        console.log('e2', e);
        return null;
    }
}

export async function getLevel(body, db) {
    try {
        let level = await findLevel(body, db)
        //Level does not exists
        if (level == null && body["id"]) return { status: 300, msg: "Could not find your Level." }
        //Level has to be created, when user_id exists
        if (level == null) {
            const user: IUser = await db
                .collection("user")
                .findOne({ _id: new ObjectId(body["user_id"] as string) })
            if (user == null) return { status: 300, msg: "You are not registered or you have not used your user specific link." }
            const response = await createLevel(body["user_id"], body["stage"], new Date().toString(), db)
            if (!response["insertedId"]) return { status: 500, msg: "Could not insert Level." }
            const levelRes = await findLevel({ id: response.insertedId.toString() }, db)
            level = levelRes
        }
        await db.collection("user").updateOne(
            {
                _id: new ObjectId(body["user_id"] as string)
            },
            {
                $set: {
                    "lastStage": Number(body["stage"])
                }
            }
        );
        return { status: 200, level: level }
    } catch (e) {
        return { status: 500, msg: e.toString() }
    }
}

//Checks if keys and types are the same
export function hasSameKeys(a: object, b: object) {
    return Object.keys(a).length === Object.keys(b).length
        && Object.keys(a).every(k => Object.prototype.hasOwnProperty.call(b, k)
            && Object.keys(a).every(k => typeof b[k as keyof object] == typeof a[k as keyof object]))
}
//Checks if b has all keys that are in a, as well as the correct types
export function hasKeys(a: object, b: object) {
    return Object.keys(a).every(k => Object.prototype.hasOwnProperty.call(b, k)
        && Object.keys(a).every(k => typeof b[k as keyof object] == typeof a[k as keyof object]))
}
//Process the request body to an object if not already happend
export function setBodyObject(body: string) {
    let bodyObject: unknown = body;
    try {
        if (typeof body == "string") bodyObject = JSON.parse(body);
    } catch {/* Prevent errors */ }
    return bodyObject
}

export function databaseError(res: NextApiResponse, e: string) {
    return res.status(500).json({ "error": "DATABASE ERROR: " + e.toString(), "status": 500 })
}

export function userError(res: NextApiResponse, e: string) {
    return res.status(300).json({ "error": "INVALID INPUT: " + e, "status": 300 })
}

export function returnError(res: NextApiResponse, e: string) {
    return res.status(500).json({ "error": "INTERNAL SERVER ERROR: " + e.toString(), "status": 500 })
}
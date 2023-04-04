import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb'
import { databaseError, hasSameKeys, setBodyObject, updateUserBody, userError } from '~/types/requests';
import levels from "../../data/levels"

export default async function handler(req, res) {
    console.log('handler', req.body);
    let db;
    let client;
    try {
        client = await clientPromise;
        db = client.db("karel");
    } catch (e) {
        return res.status(501).json({ "error": "Can not connect to Database.", "status": 501 })
    }
    if (req["method"] == "POST") {
        return handlePost(req, res, db)
    }
    if (req["method"] == "PUT") {
        return handlePut(req, res, db)
    }
    if (req["method"] == "GET") {
        return handleGet(req, res, db)
    }
}

async function handleGet(req, res, db) {
    try {
        const bodyObject = setBodyObject(req.body)
        const user = await db
            .collection("user")
            .findOne({ _id: new ObjectId(bodyObject["id"] as string) })
        return res.status(200).json(user)
    } catch (e) {
        return databaseError(res, e)
    }
}

async function handlePost(req, res, db) {
    try {
        const response = await db.collection("user").insertOne({
            lastStage: 1
        });
        req["body"] = { id: response.insertedId }
        return handleGet(req, res, db)
    } catch (e) {
        return databaseError(res, e)
    }
}

async function handlePut(req, res, db) {
    try {
        const bodyObject = setBodyObject(req.body)
        if (!hasSameKeys(updateUserBody, bodyObject)) return userError(res, "Your request does not meet the specifications.")
        if (levels[bodyObject["lastStage"] - 1] == null) return userError(res, "Your request stage is invalid.")
        const response = await db.collection("user").updateOne(
            {
                _id: new ObjectId(bodyObject["id"] as string)
            },
            {
                $set: {
                    "lastStage": bodyObject["lastStage"]
                }
            }
        );
        if (response["matchedCount"] == 0) return databaseError(res, "The user has not been updated")
        return res.status(200).json({ status: 200 })
    } catch (e) {
        return databaseError(res, e)
    }
}
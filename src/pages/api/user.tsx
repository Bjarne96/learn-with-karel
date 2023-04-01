import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb'

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
    if (req["method"] == "GET") {
        return handleGet(req, res, db)
    }
}

function setBodyObject(body) {
    let bodyObject = body;
    try {

        if (typeof body == "string") {
            bodyObject = JSON.parse(body);
        }
    } catch { }
    return bodyObject
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

async function databaseError(res, e) {
    return res.status(501).json({ "error": "DATABASE ERROR: " + e.toString(), "status": 501 })
}
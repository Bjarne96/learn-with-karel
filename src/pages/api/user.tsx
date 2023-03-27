import { ObjectId } from 'mongodb';
import updateUserBody from '~/types/requests';
import clientPromise from '../../lib/mongodb'

function hasSameKeys(a, b) {
    return Object.keys(a).length === Object.keys(b).length
        && Object.keys(a).every(k => b.hasOwnProperty(k))
}

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
    if (req["method"] == "PUT") {
        return handlePut(req, res, db)
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
    const bodyObject = setBodyObject(req.body)
    try {
        const user = await db
            .collection("users")
            .findOne({ id: (bodyObject["id"] as string) })
        return res.status(200).json(user)
    } catch (e) {
        return res.status(501).json({ "error": "Can not connect to Database.", "status": 501 })
    }
}

async function handlePut(req, res, db) {
    const bodyObject = setBodyObject(req.body)
    try {
        const test = hasSameKeys(updateUserBody, bodyObject);
        console.log('test', test);
        const value = "";
        const response = await db.collection("ticketcount").updateOne(
            {
                _id: new ObjectId(bodyObject["id"]),
            },
            {
                $set: {
                    key: value
                },
            }
        );
        console.log('response', response);
        return res.status(200).json({ "id": "response.insertedId", "status": 200 })
    } catch {

    }
}

async function handlePost(req, res, db) {
    try {
        const response = await db.collection("user").insertOne({});
        return res.status(200).json({ "id": response.insertedId, "status": 200 })
    } catch {

    }
}

import { type Db, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb'
import { databaseError, setBodyObject } from '~/types/requests';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { GetUserObject } from '~/types/karel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let db;
    let client;
    try {
        client = await clientPromise;
        db = client.db("karel");
    } catch (e) { return res.status(501).json({ "error": "Can not connect to Database.", "status": 501 }) }
    // if (req.method == "POST") return handlePost(req, res, db)
    // if (req.method == "PUT") return handlePut(req, res, db)
    if (req.method == "GET") return handleGet(req, res, db)
}

async function handleGet(req: NextApiRequest, res: NextApiResponse, db: Db) {
    try {
        const bodyObject: GetUserObject = setBodyObject(req.query)
        const user = await db.collection("user").findOne({ _id: new ObjectId(bodyObject.id) })
        return res.status(200).json(user)
    } catch (e) { return databaseError(res, e.toString()) }
}

// async function handlePost(req: NextApiRequest, res: NextApiResponse, db: Db) {
//     try {
//         const response = await db.collection("user").insertOne({
//             lastStage: 1
//         });
//         req["body"] = { id: response.insertedId }
//         return handleGet(req, res, db)
//     } catch (e) {
//         return databaseError(res, e)
//     }
// }

// async function handlePut(req: NextApiRequest, res: NextApiResponse, db: Db) {
//     try {
//         const bodyObject = setBodyObject(req.body)
//         if (!hasSameKeys(updateUserBody, bodyObject)) return userError(res, "Your request does not meet the specifications.")
//         if (levels[bodyObject["lastStage"] - 1] == null) return userError(res, "Your request stage is invalid.")
//         const response = await db.collection("user").updateOne(
//             {
//                 _id: new ObjectId(bodyObject["id"] as string)
//             },
//             {
//                 $set: {
//                     "lastStage": Number(bodyObject["lastStage"])
//                 }
//             }
//         );
//         if (response["matchedCount"] == 0) return databaseError(res, "The user has not been updated")
//         return res.status(200).json({ status: 200 })
//     } catch (e) {
//         return databaseError(res, e.toString())
//     }
// }
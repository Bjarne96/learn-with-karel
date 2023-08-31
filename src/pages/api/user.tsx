import { type Db, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb'
import { databaseError, setBodyObject } from '~/types/requests';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { GetUserObject } from '~/types/karel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let db;
    let client;

    const db_name = process.env.DB_NAME
    try {
        client = await clientPromise;
        db = client.db(db_name);
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
//         let survey_id = ""
//         let restrictedTasks = true
//         console.log('req.body', req.body);
//         if (req["body"]["hash"] == "7cb458") restrictedTasks = false
//         if (req["body"]["survey_id"] != "") survey_id = req.body.survey_id
//         const response = await db.collection("user").insertOne({
//             lastStage: 1,
//             survey_id: survey_id,
//             restrictedTask: restrictedTasks
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
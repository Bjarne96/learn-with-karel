import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("karel");
    const bodyObject = JSON.parse(req.body);
    if (req["method"] == "POST") {
        const response = await db.collection("user").insertOne({});
        console.log('response', response);
        return res.status(200).json({ "id": response.insertedId, "status": 200 })
    } else if (req["method"] == "PUT") {
        const value = ""
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
        // return res.status(200).json({ "id": response.insertedId, "status": 200 })
    }
    else if (req["method"] == "GET") {
        await db
            .collection("users")
            .findOne({ id: (bodyObject["id"] as string) })
    }
}

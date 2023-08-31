import { type NextPage } from "next";
import Head from "next/head";
import Dashboard from "~/components/dashboard";
import clientPromise from '../lib/mongodb'
import { ObjectId } from "mongodb"
import type { DashboardProps, GetUserDbResponse, levelData, levelDataResponse } from "~/types/karel";
import { getLevel } from "~/types/requests";
import React from 'react';

const db_name = process.env.DB_NAME

const Home: NextPage<DashboardProps> = ({ id: id, stage: stage, code: code, user_id: user_id, tasks: tasks, restrictedTasks: restrictedTasks }) => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn how to code with Karel." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard id={id} stage={stage} code={code} user_id={user_id} tasks={tasks} restrictedTasks={restrictedTasks} />
        </>
    );
};
interface query {
    query: {
        id?: string
        survey_id?: string
        type?: string
    }
}

export async function getServerSideProps(context: query) {
    let id = context.query.id
    let user: GetUserDbResponse | null = null
    let restrictedTasks = true
    const survey_id = context.query.survey_id
    const type = context.query.type
    try {
        const client = await clientPromise;
        const db = client.db(db_name);
        if (survey_id != "" && type != "") {
            if (type == "7cb458") restrictedTasks = false
            // Find user when necessary
            const dbUser: GetUserDbResponse = await db.collection("user").findOne({ survey_id: survey_id }) as GetUserDbResponse
            if (dbUser == null) {
                // Create User when the URL is access the first time

                const userRes = await db.collection("user").insertOne({
                    lastStage: 0,
                    survey_id: survey_id,
                    restrictedTask: restrictedTasks
                })
                id = userRes.insertedId.toString()
            } else {
                id = dbUser._id.toString()
                user = dbUser
            }
        }
        if (id == "" || id == null) return { props: { id: "" } }
        if (user == null) user = await db.collection("user").findOne({ _id: new ObjectId(id) }) as GetUserDbResponse
        if (user == null) return { props: { id: "" } }
        const response: levelDataResponse = await getLevel({ user_id: id, stage: Number(user.lastStage) }, db) as levelDataResponse
        if (response.level == undefined) return { props: { id: "" } }
        const level: levelData = response.level
        if (response.status == 200) {
            return {
                props: {
                    id: id,
                    stage: Number(level.stage),
                    code: level.code,
                    user_id: level.user_id,
                    tasks: level.tasks,
                    restrictedTasks: restrictedTasks
                }
            }
        } else {
            return { props: { id: "" } }
        }

    } catch (e) {
        console.log('e1', e);
        return { props: { id: "" } }
    }
}

export default Home;

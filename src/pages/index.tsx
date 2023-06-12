import { type NextPage } from "next";
import Head from "next/head";
import Dashboard from "~/components/dashboard";
import clientPromise from '../lib/mongodb'
import { ObjectId } from "mongodb"
import type { DashboardProps, GetUserDbResponse, levelData, levelDataResponse } from "~/types/karel";
import { getLevel } from "~/types/requests";
import React from 'react';

const Home: NextPage<DashboardProps> = ({ id: id, stage: stage, code: code, done: done, user_id: user_id }) => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn how to code with Karel." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard id={id} stage={stage} code={code} done={done} user_id={user_id} />
        </>
    );
};
interface query {
    query: {
        id: string
    }
}

export async function getServerSideProps(context: query) {
    const id = context.query.id
    if (id == "" || id == null) return { props: { id: "" } }
    try {
        const client = await clientPromise;
        const db = client.db("karel");
        const user: GetUserDbResponse = await db
            .collection("user")
            .findOne({ _id: new ObjectId(id) }) as GetUserDbResponse
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
                    done: level.done,
                    user_id: level.user_id
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

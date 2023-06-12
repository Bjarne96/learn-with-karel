import { type NextPage } from "next";
import Head from "next/head";
import Dashboard from "~/components/dashboard";
import clientPromise from '../lib/mongodb'
import { ObjectId } from "mongodb"
import type { DashboardProps } from "~/types/karel";
import { getLevel } from "~/types/requests";
import React from 'react';

const Home: NextPage = ({ id: id, stage: stage, code: code, done: done, user_id: user_id }: DashboardProps) => {
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

export async function getServerSideProps({ query: { id } }) {
    if (id == "" || id == null) return { props: { id: "" } }
    try {
        const client = await clientPromise;
        const db = client.db("karel");
        const user = await db
            .collection("user")
            .findOne({ _id: new ObjectId(id as string) })
        if (user == null) return { props: { id: "" } }
        const response = await getLevel({ user_id: id, stage: user.lastStage }, db)
        if (response.level == undefined) return { props: { id: "" } }
        const level = response.level
        if (response["status"] == 200) {
            return {
                props: {
                    id: id,
                    stage: level.stage,
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

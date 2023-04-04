import { type NextPage } from "next";
import Head from "next/head";
import Dashboard from "~/components/dashboard";
import clientPromise from '../lib/mongodb'
import { ObjectId } from "mongodb"
import type { DashboardProps } from "~/types/karel";
import { getLevel } from "~/types/requests";

const Home: NextPage = ({ id: id, lastStage: lastStage, level: level }: DashboardProps) => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn how to code with Karel." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard id={id} lastStage={lastStage} level={level} />
        </>
    );
};

export async function getServerSideProps({ query: { id } }) {
    if (id == "") return { props: { id: "", lastStage: 1 } }
    try {
        const client = await clientPromise;
        const db = client.db("karel");
        const user = await db
            .collection("user")
            .findOne({ _id: new ObjectId(id as string) })
        if (user == null) return { props: { id: "", lastStage: 1 } }
        const response = await getLevel({ user_id: id, stage: user.lastStage }, db)
        const level = {};
        level["id"] = response.level._id.toString()
        level["user_id"] = response.level.user_id
        level["code"] = response.level.code
        level["default_world"] = response.level.default_world
        level["done"] = response.level.done
        if (response["status"] == 200) {
            return { props: { id: id, lastStage: response.level.stage, level } }
        } else {
            return { props: { id: "", lastStage: 1 } }
        }

    } catch (e) { return { props: { id: "", lastStage: 1 } } }
}

export default Home;

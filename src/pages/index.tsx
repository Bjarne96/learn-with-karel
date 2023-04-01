import { type NextPage } from "next";
import Head from "next/head";
import Dashboard from "~/components/dashboard";
import clientPromise from '../lib/mongodb'
import { ObjectId } from "mongodb"
import type { DashboardProps } from "~/types/karel";

const Home: NextPage = ({ id: id, lastStage: lastStage }: DashboardProps) => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn how to code with Karel." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard id={id} lastStage={lastStage} />
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
        if (user == null) return { props: {} }
        return { props: { id: id, lastStage: user.lastStage } }
    } catch (e) { return { props: { id: "", lastStage: 1 } } }
}

export default Home;

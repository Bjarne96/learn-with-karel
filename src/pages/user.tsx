import clientPromise from '../lib/mongodb'
import { ObjectId } from "mongodb"
import Head from 'next/head'
import Dashboard from '~/components/dashboard'

export default function User(props) {
    if (props.error) {
        return (
            <>
                <Head>
                    <title>Error</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="">
                    <div className="">
                        <h1 className="">
                            {props.error}
                        </h1>
                        <p className="">Kontrolliere, ob du auch die richtige URL aufgerufen hast.</p>
                    </div>
                </main>
            </>
        )
    }
    return (
        <>
            <Head>
                <title>Karel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard />
        </>
    )
}

export async function getServerSideProps({ query: { id } }) {
    try {
        const client = await clientPromise;
        const db = client.db("karel");
        let user;

        if (id == undefined) return errorProps("Du hast dich nicht registiert.")

        try {

            user = await db
                .collection("registrations")
                .findOne({ _id: new ObjectId(id as string) })

        } catch (e) { return errorProps(JSON.stringify(e)) }

        if (user == null) return errorProps("Du scheinst dich nicht angemeldet zu haben")

        const clientUser = JSON.parse(JSON.stringify(user))

        return { props: { "user": clientUser } }
    } catch (e) { return errorProps(JSON.stringify(e)) }
}

function errorProps(msg) { return { props: { "error": msg } } }
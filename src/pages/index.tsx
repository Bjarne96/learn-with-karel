import { type NextPage } from "next";
import Dashboard from "../components/dashboard";
import Head from "next/head";
import styles from "../styles/learnwithkarel.module.css";

const LearnWithKarel: NextPage = () => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn with Karel" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Dashboard />
            </main>
        </>
    );
};

export default LearnWithKarel;
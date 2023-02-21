import { type NextPage } from "next";
import LearnWithKarelComp from "../components/learnwithkarel";
import levels from "../data/levels"
import type { ILevel } from "../interfaces/Ilearnwithkarel";
import Head from "next/head";
import styles from "../styles/learnwithkarel.module.css";

const LearnWithKarel: NextPage = () => {
    const lvls: Array<ILevel> = levels;
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn with Karel" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <LearnWithKarelComp levels={lvls} />
            </main>
        </>
    );
};

export default LearnWithKarel;
import styles from "./../styles/index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn with Karel" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Learn with <span className={styles.pinkSpan}>Karel</span>
                    </h1>
                    <div className={styles.cardRow}>
                        <Link
                            className={styles.card}
                            href="https://github.com/jan-lukas-bichel/karel-web/blob/main/README.md"
                            target="_blank"
                        >
                            <h3 className={styles.cardTitle}>First Steps →</h3>
                            <div className={styles.cardText}>
                                Just the basics - Everything you need to know to about the Interface to start learning with Karel.
                            </div>
                        </Link>
                        <Link
                            className={styles.card}
                            href="/learnwithkarel"
                        >
                            <h3 className={styles.cardTitle}>Learn coding →</h3>
                            <div className={styles.cardText}>
                                Learn coding in different levels, that provide challenges and new concepts on each step of the way.
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

import { type NextPage } from "next";
import Head from "next/head";
import Dashboard from "~/components/dashboard";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Learn with Karel</title>
                <meta name="description" content="Learn how to code with Karel." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard />
        </>
    );
};

export default Home;

import styles from "../styles/learnwithkarel.module.css";
import Commands from "../components/commands";
import { type NextPage } from "next";
import Code from "../components/code";
import Game from "../components/game";

const LearnWithKarel: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.btns}>
                    <button className={styles.btn}>Run Code</button>
                    <button className={styles.btn}>See Goal</button>
                    <button className={styles.btn}>Reset Code</button>
                    <button className={styles.btn}>Level</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.components}>
                        <Commands></Commands>
                        <Code></Code>
                        <Game></Game>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LearnWithKarel;
import styles from "../styles/learnwithkarel.module.css";
import Commands from "../components/commands";
import { type NextPage } from "next";
import Code from "../components/code";
import Canvas from "../components/canvas";
import Karel from "../components/karel";

const world = {
    walls: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 9, 8, 12, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 3, 2, 6, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    beepers: [{ x: 4, y: 3, count: 1 }],
    solution: [{ x: 5, y: 3, count: 1 }],
    karel: { x: 4, y: 2, direction: 3, isSuper: false, beeperCount: 0 }
}

const level = {
    code: "move();\npickBeeper();\n//hier drunter weiteren Code einfügen. Ausgegrauter Code macht nichts,\n//Und kann gelöscht werden (muss aber nicht).",
    name: "Bring the trash outside - Basic commands",
    worlds: [
        world,
    ],
};

const solution: boolean = false;

var karel = new Karel(
    world.karel.x,
    world.karel.y,
    world.karel.direction,
    world.karel.isSuper,
    world.karel.beeperCount
);

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
                        <Commands karel={karel}></Commands>
                        <Code></Code>
                        <Canvas world={world}></Canvas>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LearnWithKarel;
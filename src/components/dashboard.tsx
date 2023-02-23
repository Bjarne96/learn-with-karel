import React from "react";
import styles from "../styles/learnwithkarel.module.css";
import Commands from "./commands";
import Code from "./code";
import Canvas from "./canvas";
import Karel from "./karel";
import World from "./world";
import type { DashboardState, ILevel } from "../interfaces/interfaces";
import levels from "../data/levels"


export default class Dashboard extends React.Component<object, DashboardState> {

    constructor(props) {
        super(props);
        const begin = 0;
        const karel = this.initKarel(begin)
        const world = this.initWorld(begin, karel)
        this.state = {
            currentLevel: begin,
            karel: karel,
            world: world,
            code: levels[begin].code,
            goal: false
        }
    }

    onCodeChange(code: string) {
        this.setState({
            code: code
        })
    }
    initKarel(level: number) {
        const karel: Karel = new Karel(
            levels[level].worlds[0].karel.x,
            levels[level].worlds[0].karel.y,
            levels[level].worlds[0].karel.direction,
            levels[level].worlds[0].karel.isSuper
        )
        return karel;
    }
    initWorld(level: number, karel: Karel) {
        const world = new World(
            karel,
            levels[level].worlds[0].beepers,
            levels[level].worlds[0].solutions,
            levels[level].worlds[0].walls,
        )
        return world;
    }

    setLevel(level?: number, code?: boolean, goal?: boolean) {
        if (level == undefined) level = this.state.currentLevel
        const karel: Karel = this.initKarel(level)
        const world = this.initWorld(level, karel)

        // deep copy (' ' + levels[level].code).slice(1)
        let codeString = this.state.code
        if (code) {
            codeString = (' ' + levels[level].code).slice(1)
        }
        this.setState({
            currentLevel: level,
            karel: karel,
            world: world,
            code: codeString,
            goal: goal
        })
    }

    toggleGoal() {
        this.setState({ goal: !this.state.goal })
    }

    render() {
        return <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div >
                        <div className={styles.components}>
                            <Commands code={this.state.code} onCodeChange={this.onCodeChange.bind(this)} karel={this.state.karel}></Commands>
                            <div>
                                <div className={styles.btnContainer}>
                                    {this.state.goal ?
                                        <button className={styles.btn} onClick={() => this.state.world.executeCode(this.state.code)}>Run Code</button>
                                        :
                                        <button className={styles.btn} onClick={() => this.setLevel()}>Reset Map</button>
                                    }
                                    <button className={styles.btn} onClick={() => this.toggleGoal()}>See Goal</button>
                                </div>
                                <Code code={this.state.code} onCodeChange={this.onCodeChange.bind(this)}></Code>
                            </div>
                            <div>
                                <div className={styles.btnContainer}>
                                    <button className={styles.btn} onClick={() => this.setLevel()}>Reset Map</button>
                                    <select
                                        value={this.state.currentLevel}
                                        className={styles.btn}
                                        onChange={(e) => this.setLevel(Number(e.target.value), true)}
                                    >
                                        {
                                            levels.map((level: ILevel, i: number) => {
                                                return <option value={i} key={i}>{level.name}</option>;
                                            })
                                        }
                                    </select>
                                </div>
                                <Canvas goal={this.state.goal ? 1 : 0} world={this.state.world}></Canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    }
}
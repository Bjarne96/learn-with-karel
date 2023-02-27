import React from "react";
import styles from "../styles/learnwithkarel.module.css";
import Commands from "./commands";
import Code from "./code";
import Karel from "./karel";
// import World from "./world"
import Canvas from "./canvasEffect"
import World from "./worldClass"
import type { DashboardState, ILevel } from "../interfaces/interfaces";
import levels from "../data/levels"


export default class Dashboard extends React.Component<object, DashboardState> {

    world;

    constructor(props) {
        super(props);
        const begin = 0;
        const karel = this.initKarel(begin)
        this.world = this.initWorld(begin, karel)
        // const world = this.initWorld(begin, karel)
        this.state = {
            currentLevel: begin,
            karel: karel,
            code: levels[begin].code,
            runningCode: false
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

    setLevel(level?: number, code?: boolean, runningCode?: boolean) {
        if (level == undefined) level = this.state.currentLevel
        const karel: Karel = this.initKarel(level)

        // deep copy (' ' + levels[level].code).slice(1)
        let codeString = this.state.code
        if (code) {
            codeString = (' ' + levels[level].code).slice(1)
        }
        this.setState({
            currentLevel: level,
            karel: karel,
            code: codeString,
            runningCode: runningCode
        })
    }

    setRunningCode(runningCode) {
        this.setState({ runningCode: runningCode })
    }

    render() {
        return <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.components}>
                            <Commands code={this.state.code} onCodeChange={this.onCodeChange.bind(this)} karel={this.state.karel}></Commands>
                            <div>
                                <div className={styles.btnContainer}>
                                    {this.state.runningCode != true ?
                                        <button className={styles.btn} onClick={() => console.log('execute')}>Run Code</button>
                                        :
                                        <button className={styles.btn} onClick={() => this.setLevel()}>Reset Karel</button>}
                                </div>
                                <Code code={this.state.code} onCodeChange={this.onCodeChange.bind(this)}></Code>
                            </div>
                            <div>
                                <div className={styles.btnContainer}>
                                    <span>Level:</span>
                                    <select
                                        value={this.state.currentLevel}
                                        className={styles.btn}
                                        onChange={(e) => this.setLevel(Number(e.target.value), true)}
                                    >{
                                            levels.map((level: ILevel, i: number) => {
                                                return <option value={i} key={i}>{level.name}</option>;
                                            })
                                        }</select>
                                </div>
                                <Canvas world={this.world} />
                                {/* <World runningCode={this.state.runningCode} karel={this.state.karel} level={levels[this.state.currentLevel]}></World> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    }
}
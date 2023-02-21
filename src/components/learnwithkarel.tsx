import React from "react";
import styles from "../styles/learnwithkarel.module.css";
import Commands from "../components/commands";
import Code from "../components/code";
import Canvas from "../components/canvas";
import Karel from "../components/karel";
import World from "../components/world";
import type { ILearnWithKarelProps, ILearnWithKarelState, ILevel } from "../interfaces/Ilearnwithkarel";


export default class LearnWithKarelComp extends React.Component<ILearnWithKarelProps, ILearnWithKarelState> {

    constructor(props) {
        super(props);
        const begin = 0;
        const karel = this.initKarel(begin)
        const world = this.initWorld(begin, karel)
        this.state = {
            currentLevel: begin,
            karel: karel,
            world: world,
            code: this.props.levels[begin].code,
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
            this.props.levels[level].worlds[0].karel.x,
            this.props.levels[level].worlds[0].karel.y,
            this.props.levels[level].worlds[0].karel.direction,
            this.props.levels[level].worlds[0].karel.isSuper
        )
        return karel;
    }
    initWorld(level: number, karel: Karel) {
        const world = new World(
            karel,
            this.props.levels[level].worlds[0].beepers,
            this.props.levels[level].worlds[0].solutions,
            this.props.levels[level].worlds[0].walls,
        )
        return world;
    }

    setLevel(level?: number, code?: boolean, goal?: boolean) {
        if (level == undefined) level = this.state.currentLevel
        const karel: Karel = this.initKarel(level)
        const world = this.initWorld(level, karel)

        // deep copy (' ' + this.props.levels[level].code).slice(1)
        let codeString = this.state.code
        if (code) {
            codeString = (' ' + this.props.levels[level].code).slice(1)
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
                                    <button className={styles.btn} onClick={() => this.state.world.executeCode(this.state.code)}>Run Code</button>
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
                                            this.props.levels.map((level: ILevel, i: number) => {
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
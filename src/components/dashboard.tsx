import React from "react";
import Commands from "./commands";
import Code from "./code";
import World from "./world"
//Interfaces
import type { DashboardState, ILevel, IKarel } from "../interfaces/interfaces";
//Styles
import levels from "../data/levels"
//Data
import styles from "../styles/learnwithkarel.module.css";



export default class Dashboard extends React.Component<object, DashboardState> {

    debounceRunningCode = false

    constructor(props) {
        super(props);
        const begin = 0;

        this.state = {
            currentLevel: begin,
            karel: levels[begin].worlds[0].karel,
            code: levels[begin].code,
            runningCode: false
        }
    }

    onCodeChange(code: string) {
        this.setState({
            code: code
        })
    }

    setLevel(level?: number, code?: boolean, runningCode?: boolean) {
        if (level == undefined) level = this.state.currentLevel
        const karel: IKarel = levels[level].worlds[0].karel
        // deep copy (' ' + levels[level].code).slice(1)
        let codeString = this.state.code
        if (code) codeString = (' ' + levels[level].code).slice(1)
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
                            <Commands code={this.state.code} onCodeChange={this.onCodeChange.bind(this)} isKarelSuper={this.state.karel.isSuper}></Commands>
                            <div>
                                <div className={styles.btnContainer}>
                                    {this.state.runningCode != true ?
                                        <button className={styles.btn} onClick={() => {
                                            if (this.debounceRunningCode) return
                                            this.debounceRunningCode = true;
                                            setTimeout(() => {
                                                this.debounceRunningCode = false
                                            }, 1000);
                                            this.setRunningCode(true)
                                        }}>Run Code</button>
                                        :
                                        <button className={styles.btn} onClick={() => this.setLevel(this.state.currentLevel, false, false)}>Reset Karel</button>}
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
                                <World code={this.state.code} runningCode={this.state.runningCode} karel={this.state.karel} level={levels[this.state.currentLevel]}></World>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    }
}
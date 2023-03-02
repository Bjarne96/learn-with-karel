import React from "react";
// Components
import Commands from "./commands";
import Code from "./code";
import World from "./world"
import SelectLevel from "./select_level";
//Interfaces
import type { DashboardState, IKarel } from "../interfaces/interfaces";
//Styles
import styles from "../styles/learnwithkarel.module.css";
//Data
import levels from "../data/levels"



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

    setLevel(level: number) {
        const karel: IKarel = JSON.parse(JSON.stringify(levels[level].worlds[0].karel)) //Deep Copy
        const code: string = (' ' + levels[level].code).slice(1) //Deep Copy
        this.setState({
            currentLevel: level,
            karel: karel,
            code: code
        })
    }

    resetLevel() {
        this.setLevel(this.state.currentLevel)
    }

    resetKarel() {
        const karel: IKarel = JSON.parse(JSON.stringify(levels[this.state.currentLevel].worlds[0].karel)) //Deep Copy
        this.setState({
            karel: karel
        })
    }

    setRunningCode(runningCode: boolean) {
        this.setState({ runningCode: runningCode })
    }

    handleRunningCode() {
        if (this.debounceRunningCode) return
        this.debounceRunningCode = true;
        setTimeout(() => {
            this.debounceRunningCode = false
        }, 1000);
        this.setRunningCode(true)
    }

    handleResetCode() {
        this.setRunningCode(false)
    }

    handleLevelChange(level: number) {
        if (this.state.runningCode) return
        this.setLevel(level)
    }

    render() {
        return <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.components}>
                            <Commands code={this.state.code} onCodeChange={this.onCodeChange.bind(this)} isKarelSuper={this.state.karel.isSuper}></Commands>
                            <div>
                                {/* TODO put into component */}
                                <div className={styles.btnContainer}>
                                    {this.state.runningCode != true ?
                                        <button className={styles.btn} onClick={() => this.handleRunningCode()}>Run Code</button>
                                        :
                                        <button className={styles.btn} onClick={() => this.handleResetCode()}>Reset Karel</button>}
                                </div>
                                <Code
                                    code={this.state.code}
                                    onCodeChange={this.onCodeChange.bind(this)}
                                />
                            </div>
                            <div>
                                <SelectLevel
                                    levels={levels}
                                    handleLevelChange={this.handleLevelChange.bind(this)}
                                    currentLevel={this.state.currentLevel}
                                />
                                <World
                                    currentLevel={this.state.currentLevel}
                                    code={this.state.code}
                                    runningCode={this.state.runningCode}
                                    karel={this.state.karel}
                                    level={levels[this.state.currentLevel]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    }
}
import React from "react";
// Components
import Commands from "./commands";
import Code from "./code";
import World from "./world"
//Interfaces
import type { DashboardState, IKarel } from "../interfaces/interfaces";
//Styles
import styles from "../styles/learnwithkarel.module.css";
//Data
import levels from "../data/levels"
import Topbar from "./topbar";
import LevelModal from "./modal";
import Log from "./log";



export default class Dashboard extends React.Component<object, DashboardState> {

    debounceRunningCode = false

    constructor(props: object) {
        super(props);
        const begin = 0;
        if (levels != undefined && levels[begin] != undefined && levels[begin].worlds[0] != undefined) {
            this.state = {
                currentLevel: begin,
                karel: levels[begin].worlds[0].karel,
                code: levels[begin].code,
                runningCode: false,
                isLevelCompleted: false,
                log: ""
            }
        }

    }

    onCodeChange(code: string) {
        this.setState({
            code: code
        })
    }

    setLevel(level: number) {
        const karel: IKarel = JSON.parse(JSON.stringify(levels[level]?.worlds[0]?.karel)) as IKarel //Deep Copy
        const code: string = (' ' + (levels[level]?.code as string)).slice(1) //Deep Copy
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
        const karel: IKarel = JSON.parse(JSON.stringify(levels[this.state.currentLevel]?.worlds[0]?.karel)) as IKarel//Deep Copy
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
        this.setState({
            log: ""
        });
        this.setRunningCode(false)
    }

    handleLevelChange(level: number) {
        if (this.state.runningCode) return
        this.setLevel(level)
    }

    setLevelCompleted(completed: boolean) {
        console.log('completed level ', this.state.currentLevel);
        this.setState({
            isLevelCompleted: completed
        })
    }

    writeInLog(entry: string) {
        this.setState({
            log: this.state.log + entry + "\n"
        })
    }

    render() {
        return <>
            <main className="flex justify-center content-center min-h-[100vh] bg-gradient-to-t from-custom-darkblue to-custom-blue">
                <div className="flex flex-col justify-center content-center">
                    <Topbar
                        currentLevel={this.state.currentLevel}
                        runningCode={this.state.runningCode}
                        handleLevelChange={this.handleLevelChange.bind(this)}
                        handleRunningCode={this.handleRunningCode.bind(this)}
                        handleResetCode={this.handleResetCode.bind(this)}
                    />
                    <div className={styles.container}>
                        <div className="flex flex-row gap-4 mt-4">
                            {this.state.runningCode ?
                                <Log log={this.state.log} />
                                :
                                <Commands code={this.state.code} onCodeChange={this.onCodeChange.bind(this)} isKarelSuper={this.state.karel.isSuper} />
                            }
                            <div>
                                <Code
                                    code={this.state.code}
                                    onCodeChange={this.onCodeChange.bind(this)}
                                />
                            </div>
                            <div>
                                <World
                                    currentLevel={this.state.currentLevel}
                                    code={this.state.code}
                                    runningCode={this.state.runningCode}
                                    karel={this.state.karel}
                                    level={levels[this.state.currentLevel]}
                                    setLevelCompleted={this.setLevelCompleted.bind(this)}
                                    writeInLog={this.writeInLog.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {this.state.isLevelCompleted ? <LevelModal
                currentlevel={this.state.currentLevel}
                setLevel={this.setLevel.bind(this)}
                handleResetCode={this.handleResetCode.bind(this)}
                setLevelCompleted={this.setLevelCompleted.bind(this)}
            /> : <></>}
        </>
    }
}
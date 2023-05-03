import React from "react";
// Components
import Commands from "./commands";
import Code from "./code";
import World from "./world"
//Interfaces
import type { DashboardProps, DashboardState, IKarel } from "../types/karel";
//Data
import levels from "../data/levels"
import Topbar from "./topbar";
import LevelModal from "./modal";


export default class Dashboard extends React.Component<DashboardProps, DashboardState> {

    debounceRunningCode = false
    debounceSaveCode = false
    isLoggedIn = false
    userId = ""
    //Add Code + Level Map

    constructor(props: DashboardProps) {
        super(props);
        let lastStage = 0
        let karel = levels[lastStage].worlds[0].karel
        let code = levels[lastStage].code
        let world = levels[lastStage].worlds[0]

        if (props.id && props.id.length) {
            this.userId = props.id
            this.isLoggedIn = true
            lastStage = props.stage
            code = props.code
            world = levels[lastStage].worlds[0]
            karel = levels[lastStage].worlds[0].karel
        }

        if (levels != undefined && levels[lastStage] != undefined && levels[lastStage].worlds[0] != undefined) {
            this.state = {
                currentLevel: lastStage,
                world: world,
                karel: karel,
                code: code,
                runningCode: false,
                showLevelCompletedModal: false,
                log: ""
            }
        }
    }

    onCodeChange(code: string) {
        this.setState({
            code: code
        })
    }

    async setLevel(level: number) {
        const karel: IKarel = JSON.parse(JSON.stringify(levels[level]?.worlds[0]?.karel)) as IKarel //Deep Copy
        let code: string = (' ' + (levels[level]?.code as string)).slice(1) //Deep Copy
        if (this.userId) {
            const res = await this.getLevel(level)
            if (res["code"]) code = res["code"]
        }
        this.setState({
            currentLevel: level,
            karel: karel,
            code: code
        })
    }

    async getLevel(level: number) {
        const body = {
            level: {
                stage: level,
                user_id: this.userId
            }
        }
        const res = await this.requestLevel(body, "GET")
        return res;
    }
    objectToParams(obj) {
        const keys = Object.keys(obj)
        let params = ""
        for (let i = 0; i < keys.length; i++) {
            const element = keys[i];
            if (i != 0) {
                params = params + "&"
            }
            params = params + element.toString() + "=" + obj[keys[i]].toString();
        }
        return params;
    }

    async requestLevel(body, method) {
        return new Promise((resolve, reject) => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let url = "/api/level"
            const requestOptions = {
                method: method,
                headers: myHeaders
            };
            try {
                if (method == "GET") {
                    const params = this.objectToParams(body.level)
                    url = url + "?" + params;
                } else {
                    requestOptions["body"] = JSON.stringify(JSON.stringify(body))
                }
                fetch(url, requestOptions)
                    .then(response => response.text())
                    .then(result => resolve(JSON.parse(result)))
                    .catch(error => reject(error));
            } catch (e) {
                reject(e)
            }
        });
    }

    async handleSaveLevel(level) {
        console.log('level', level);
        if (this.debounceSaveCode) return
        this.debounceSaveCode = true
        const body = {
            user_id: this.userId,
            stage: this.state.currentLevel,
            level: level

        }
        const res = await this.requestLevel(body, "PUT")
        if (res) this.debounceSaveCode = false
    }

    async handleSaveCode() {
        this.handleSaveLevel({ code: this.state.code })
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
        if (this.state.runningCode) this.handleResetCode()
        this.setLevel(level)
    }

    toggleLevelCompletedModal(completed: boolean) {
        console.log('completed', completed);
        if (completed) {
            this.handleSaveLevel({
                done: new Date().toString(),
                code: this.state.code
            })
        }
        this.setState({
            showLevelCompletedModal: completed
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
                        isLoggedIn={this.isLoggedIn}
                        currentLevel={this.state.currentLevel}
                        runningCode={this.state.runningCode}
                        handleLevelChange={this.handleLevelChange.bind(this)}
                        handleRunningCode={this.handleRunningCode.bind(this)}
                        handleResetCode={this.handleResetCode.bind(this)}
                        handleSaveCode={this.handleSaveCode.bind(this)}
                    />
                    <div>
                        <div className="flex flex-row gap-4 mt-4">
                            <Commands
                                log={this.state.log}
                                runningCode={this.state.runningCode}
                                code={this.state.code}
                                onCodeChange={this.onCodeChange.bind(this)}
                                isKarelSuper={this.state.karel.isSuper}
                            />
                            <Code
                                code={this.state.code}
                                onCodeChange={this.onCodeChange.bind(this)}
                            />
                            <World
                                currentLevel={this.state.currentLevel}
                                code={this.state.code}
                                runningCode={this.state.runningCode}
                                karel={this.state.karel}
                                level={levels[this.state.currentLevel]}
                                toggleLevelCompletedModal={this.toggleLevelCompletedModal.bind(this)}
                                writeInLog={this.writeInLog.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </main>
            {this.state.showLevelCompletedModal ? <LevelModal
                currentlevel={this.state.currentLevel}
                setLevel={this.setLevel.bind(this)}
                handleResetCode={this.handleResetCode.bind(this)}
                toggleLevelCompletedModal={this.toggleLevelCompletedModal.bind(this)}
            /> : <></>}
        </>
    }
}
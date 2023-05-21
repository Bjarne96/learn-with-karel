import React from "react";
// Components
import Commands from "./commands";
import Code from "./code";
import World from "./world"
//Interfaces
import type { DashboardProps, DashboardState, IKarel } from "../types/karel";
//Data
import levels from "../data/commandLevels"
import Topbar from "./topbar";
import LevelModal from "./modal";


export default class Dashboard extends React.Component<DashboardProps, DashboardState> {

    debounceRunningCode = false
    debounceSaveCode = false
    isLoggedIn = false
    userId = ""
    worldCompletedCounter = 0

    constructor(props: DashboardProps) {
        super(props);
        let lastStage = 0
        let done = ""
        let code = levels[lastStage].code
        if (props.id && props.id.length) {
            this.userId = props.id
            this.isLoggedIn = true
            done = props.done
            lastStage = props.stage
            code = props.code
        }
        if (levels != undefined && levels[lastStage] != undefined && levels[lastStage].worlds[0] != undefined) {
            this.state = {
                currentLevel: lastStage,
                worldCounter: levels[lastStage].worlds.length,
                karel: levels[lastStage].worlds[0].karel,
                commands: levels[lastStage].commands,
                code: code,
                runningCode: false,
                showLevelCompletedModal: false,
                firstLog: "",
                secondLog: "",
                done: done
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
        let done = ""
        const worldCounter = levels[level].worlds.length
        if (this.userId) {
            const res = await this.getLevel(level)
            if (res["code"]) code = res["code"]
            if (res["done"]) done = res["done"]
        }
        this.setState({
            currentLevel: level,
            commands: levels[level].commands,
            karel: karel,
            code: code,
            done: done,
            worldCounter: worldCounter,
            firstLog: "",
            secondLog: ""
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

    async handleSaveLevel(level, attempt?) {
        if (this.debounceSaveCode) return
        this.debounceSaveCode = true
        const body = {
            user_id: this.userId,
            stage: this.state.currentLevel,
            level: level
        }
        if (attempt) body["attempt"] = { "timestamp": new Date().toString() }
        const res = await this.requestLevel(body, "PUT")
        if (res) this.debounceSaveCode = false
    }

    async handleSaveCode() {
        this.handleSaveLevel({ code: this.state.code })
    }

    setRunningCode(runningCode: boolean) {
        this.setState({ runningCode: runningCode })
    }

    handleRunningCode() {
        if (this.debounceRunningCode) return
        this.debounceRunningCode = true;
        setTimeout(() => {
            this.debounceRunningCode = false
        }, 3000);
        if (this.state.done == "") {
            this.handleSaveLevel({ code: this.state.code }, true)
        }
        this.setRunningCode(true)
    }

    handleResetCode() {
        this.resetworldCompletedCounter();
        this.setState({
            firstLog: "",
            secondLog: ""
        });
        this.setRunningCode(false)
    }

    handleResetToDefaulftCode() {
        this.setState({
            code: levels[this.state.currentLevel].code
        })
    }

    handleLevelChange(level: number) {
        if (this.state.runningCode) this.handleResetCode()
        this.setLevel(level)
    }

    resetworldCompletedCounter() {
        this.worldCompletedCounter = 0
    }

    completedLevel(completed: boolean) {
        if (this.state.done != "") return
        let done = ""
        //Check if all worlds have completed
        if (this.state.worldCounter > 1) {
            this.worldCompletedCounter++
            if (this.state.worldCounter == this.worldCompletedCounter) {
                this.resetworldCompletedCounter()
            } else {
                completed = false
            }
        }
        //Handle Completed
        if (completed) {
            done = new Date().toString()
            this.handleSaveLevel({
                done: done,
                code: this.state.code
            })
            this.setState({
                done: done,
                showLevelCompletedModal: true
            })
        }
    }

    toggleModal(toggle: boolean) {
        this.setState({ showLevelCompletedModal: toggle })
    }

    writeInLog(entry: string, worldNumber: number) {
        if (entry == undefined) return
        if (worldNumber == 1) {
            this.setState({
                firstLog: this.state.firstLog + entry + "\n"
            })
        }
        if (worldNumber == 2) {
            this.setState({
                secondLog: this.state.secondLog + entry + "\n"
            })
        }
    }

    render() {
        return <>
            <main className="flex justify-center content-center min-h-[100vh] bg-gradient-to-t from-custom-darkblue to-custom-blue">
                <div className="flex flex-col justify-center content-center">
                    <Topbar
                        isLoggedIn={this.isLoggedIn}
                        done={this.state.done}
                        currentLevel={this.state.currentLevel}
                        runningCode={this.state.runningCode}
                        handleLevelChange={this.handleLevelChange.bind(this)}
                        handleRunningCode={this.handleRunningCode.bind(this)}
                        handleResetCode={this.handleResetCode.bind(this)}
                        handleSaveCode={this.handleSaveCode.bind(this)}
                        handleResetToDefaulftCode={this.handleResetToDefaulftCode.bind(this)}
                    />
                    <div>
                        <div className="flex flex-row gap-4 mt-4">
                            <Commands
                                worldCounter={this.state.worldCounter}
                                firstLog={this.state.firstLog}
                                secondLog={this.state.secondLog}
                                runningCode={this.state.runningCode}
                                code={this.state.code}
                                onCodeChange={this.onCodeChange.bind(this)}
                                commands={this.state.commands}
                            />
                            <Code
                                code={this.state.code}
                                onCodeChange={this.onCodeChange.bind(this)}
                                worldCounter={this.state.worldCounter}
                                firstLog={this.state.firstLog}
                                secondLog={this.state.secondLog}
                                runningCode={this.state.runningCode}
                            />
                            <div className="block rounded bg-code-grey">
                                {levels[this.state.currentLevel].worlds.map((world, i) =>
                                    <World
                                        key={i}
                                        worldNumber={i + 1}
                                        currentLevel={this.state.currentLevel}
                                        code={this.state.code}
                                        runningCode={this.state.runningCode}
                                        karel={this.state.karel}
                                        world={world}
                                        commands={this.state.commands}
                                        completedLevel={this.completedLevel.bind(this)}
                                        writeInLog={this.writeInLog.bind(this)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {this.state.showLevelCompletedModal ? <LevelModal
                currentlevel={this.state.currentLevel}
                setLevel={this.setLevel.bind(this)}
                handleResetCode={this.handleResetCode.bind(this)}
                toggleModal={this.toggleModal.bind(this)}
            /> : <></>}
        </>
    }
}
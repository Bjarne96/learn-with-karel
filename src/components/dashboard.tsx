import React from "react";
// Components
import Commands from "./commands";
import Code from "./code";
import World from "./world"
//Interfaces
import type { DashboardProps, DashboardState, IKarel } from "../types/karel";
//Data
import levels from "../data/levels"
import WorldButtons from "./worldbuttons";
import LevelModal from "./modal";
import Sidebar from "./sidebar"
import Log from "./log";
import SelectLevel from "./levelselect";


export default class Dashboard extends React.Component<DashboardProps, DashboardState> {

    debounceRunningCode = false
    debounceSaveCode = false
    isLoggedIn = false
    userId = ""

    constructor(props: DashboardProps) {
        super(props);
        //Adapting props, when user data was given
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
        //Setting state
        if (levels != undefined && levels[lastStage] != undefined && levels[lastStage].worlds[0] != undefined) {
            this.state = {
                currentLevel: lastStage,
                karel: levels[lastStage].worlds[0].karel,
                commands: levels[lastStage].commands,
                code: code,
                runningCode: false,
                worldCompletedCounter: 0,
                worldCounter: levels[lastStage].worlds.length,
                executionCompleted: false,
                pauseCode: false,
                interval: 250,
                showLevelCompletedModal: false,
                firstLog: [],
                secondLog: [],
                activeLine: 0,
                activeTab: 5,
                done: done
            }
        }
    }

    onCodeChange(code: string) {
        if (this.state.runningCode) {
            //First reset, then update the code
            this.handleResetCode()
            setTimeout(() => { this.setState({ code: code }) }, 128);
            return
        }
        this.setState({ code: code })
    }

    handleIntervalPause(pause: boolean) { this.setState({ pauseCode: pause }) }

    async setLevel(level: number) {
        const karel: IKarel = JSON.parse(JSON.stringify(levels[level]?.worlds[0]?.karel)) as IKarel //Deep Copy
        let code: string = (' ' + (levels[level]?.code as string)).slice(1) //Deep Copy
        let done = ""
        try {
            await this.handleSaveCode()
            if (this.userId) {
                const res = await this.getLevel(level)
                if (res["code"]) code = res["code"]
                if (res["done"]) done = res["done"]
            }
        } catch (e) { console.log("request error", e) }
        this.setState({
            currentLevel: level,
            commands: levels[level].commands,
            karel: karel,
            code: code,
            done: done,
            firstLog: [],
            secondLog: [],
            pauseCode: false,
            runningCode: false,
            executionCompleted: false,
            activeLine: 0,
            activeTab: 1,
            worldCompletedCounter: 0,
            worldCounter: levels[level].worlds.length
        })
    }

    async getLevel(level: number) {
        const body = { level: { stage: level, user_id: this.userId } }
        const res = await this.requestLevel(body, "GET")
        return res;
    }

    objectToParams(obj) {
        const keys = Object.keys(obj)
        let params = ""
        for (let i = 0; i < keys.length; i++) {
            const element = keys[i];
            if (i != 0) params = params + "&"
            params = params + element.toString() + "=" + obj[keys[i]].toString();
        }
        return params;
    }

    async requestLevel(body, method) {
        return new Promise((resolve, reject) => {
            const myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")
            let url = "/api/level"
            const requestOptions = { method: method, headers: myHeaders }
            try {
                if (method == "GET") url = url + "?" + this.objectToParams(body.level);
                else requestOptions["body"] = JSON.stringify(JSON.stringify(body))
                fetch(url, requestOptions)
                    .then(response => response.text())
                    .then(result => resolve(JSON.parse(result)))
                    .catch(error => reject(error))
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

    async handleSaveCode() { this.handleSaveLevel({ code: this.state.code }) }

    async setActiveTab(tab: number) { this.setState({ activeTab: tab }) }

    setRunningCode(runningCode: boolean, interval: number) {
        if (this.debounceRunningCode) return
        this.debounceRunningCode = true
        setTimeout(() => this.debounceRunningCode = false, 300)
        if (this.state.done == "" && !this.state.pauseCode) this.handleSaveLevel({ code: this.state.code }, true)
        //Unpause when level is finished
        if (this.state.executionCompleted && runningCode) {
            //First reset, then run the code
            this.handleResetCode()
            setTimeout(() => { this.setState({ runningCode: true, interval: interval }) }, 128);
            return
        }
        if (this.state.pauseCode && runningCode) return this.setState({ pauseCode: false })
        this.setState({ runningCode: runningCode, interval: interval, activeTab: 1 })
    }

    handleResetCode() {
        this.setState({
            firstLog: [],
            secondLog: [],
            pauseCode: false,
            runningCode: false,
            executionCompleted: false,
            activeLine: 0,
            worldCompletedCounter: 0
        });
    }

    handleResetToDefaulftCode() { this.setState({ code: levels[this.state.currentLevel].code }) }

    handleLevelChange(level: number) { if (level >= 0 && level < levels.length) this.setLevel(level) }

    completedLevel(completed: boolean) {
        let worldCompletedCounter = this.state.worldCompletedCounter
        //Unpause when level is finished
        if (this.state.pauseCode) this.handleIntervalPause(false)
        //If the level was already completed at some point before,
        // there is only to the executionCompleted state has to be set
        if ((this.state.done != "" && this.state.worldCounter == 1)
            || (this.state.worldCounter == 2 && completed == false)) {
            return this.setState({ executionCompleted: true })
        }
        //Check if all worlds have completed
        if (this.state.worldCounter > 1 && completed) {
            //Counts up, because one world was completed
            worldCompletedCounter++
            //Resets when all where completed successfully
            if (this.state.worldCounter == worldCompletedCounter) worldCompletedCounter = (this.state.worldCounter - 1)
            else completed = false //Sets to false, when they didnt match the count
        }
        let done = new Date().toString()
        //Handle first time completed and saves the code and the done date to database
        if (completed && this.state.done == "") this.handleSaveLevel({ done: done, code: this.state.code })
        else done = this.state.done
        let showModal = false
        if (this.state.done == "" && completed) showModal = true
        this.setState({
            done: done,
            executionCompleted: completed,
            showLevelCompletedModal: showModal,
            worldCompletedCounter: worldCompletedCounter,
            activeTab: worldCompletedCounter + 1
        })
    }

    toggleModal(toggle: boolean) { this.setState({ showLevelCompletedModal: toggle }) }

    updateLogAndLine(entry: string, line: number, worldNumber: number) {
        //Work around to highlight the same line again
        if (this.state.activeLine == line) {
            const lineLater = line
            setTimeout(() => this.setState({ activeLine: lineLater }), 16)
            line = 0
        }
        //Update the necessary log
        if (entry == undefined) return
        let log = this.state.firstLog
        if (worldNumber == 2) log = this.state.secondLog
        log.push(entry + "\n")
        if (worldNumber == 1) this.setState({ firstLog: log, activeLine: line })
        if (worldNumber == 2) this.setState({ secondLog: log, activeLine: line })
    }

    render() {
        return <>
            <main className="flex justify-center content-center min-h-[100vh] bg-custom-darkblue">
                <div className="flex flex-row min-h-[100vh] w-full">
                    <div className="sidebar bg-custom-blue min-w-[75px] h-full">
                        <Sidebar
                            setActiveTab={this.setActiveTab.bind(this)}
                            worldCounter={this.state.worldCounter}
                            activeTab={this.state.activeTab}
                        />
                    </div>
                    <div className="min-w-[250px] h-full">
                        {
                            {
                                1: <Log log={this.state.firstLog} />,
                                2: <Log log={this.state.secondLog} />,
                                3: <Commands commands={this.state.commands} />,
                                4: <div className="text-white w-full">Custom Code</div>,
                                5: <div className="text-white w-full">Task</div>,
                            }[this.state.activeTab]
                        }
                    </div>
                    <div className="w-full h-full">
                        <Code
                            code={this.state.code}
                            onCodeChange={this.onCodeChange.bind(this)}
                            runningCode={this.state.runningCode}
                            activeLine={this.state.activeLine}
                        />
                    </div>
                    <div className="w-full h-full">
                        <SelectLevel
                            handleLevelChange={this.handleLevelChange.bind(this)}
                            currentLevel={this.state.currentLevel}
                        />
                        {levels[this.state.currentLevel].worlds.map((world, i) =>
                            <World
                                key={i}
                                worldNumber={i + 1}
                                worldCompletedCounter={this.state.worldCompletedCounter}
                                currentLevel={this.state.currentLevel}
                                code={this.state.code}
                                runningCode={this.state.runningCode}
                                pauseCode={this.state.pauseCode}
                                interval={this.state.interval}
                                karel={this.state.karel}
                                world={world}
                                commands={this.state.commands}
                                completedLevel={this.completedLevel.bind(this)}
                                updateLogAndLine={this.updateLogAndLine.bind(this)}
                            />
                        )}
                        <WorldButtons
                            isLoggedIn={this.isLoggedIn}
                            done={this.state.done}
                            currentLevel={this.state.currentLevel}
                            runningCode={this.state.runningCode}
                            interval={this.state.interval}
                            worldCounter={this.state.worldCounter}
                            handleLevelChange={this.handleLevelChange.bind(this)}
                            setRunningCode={this.setRunningCode.bind(this)}
                            handleResetCode={this.handleResetCode.bind(this)}
                            handleSaveCode={this.handleSaveCode.bind(this)}
                            handleResetToDefaulftCode={this.handleResetToDefaulftCode.bind(this)}
                            handleIntervalPause={this.handleIntervalPause.bind(this)}
                        />
                    </div>
                </div>
            </main>
            {this.state.showLevelCompletedModal &&
                <LevelModal
                    currentlevel={this.state.currentLevel}
                    handleLevelChange={this.handleLevelChange.bind(this)}
                    handleResetCode={this.handleResetCode.bind(this)}
                    toggleModal={this.toggleModal.bind(this)}
                />}
        </>
    }
}
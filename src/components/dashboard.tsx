import React from "react"
// Components
import Commands from "./commands"
import Code from "./code"
import World from "./world"
//Interfaces
import type {
    DashboardProps,
    DashboardState,
    IKarel,
    GetLevelApiResponse,
    RestRequest,
    PutRequestBodyObject,
    ResetStateObject,
    IUpdateLevelData,
    LogEntry,
    logType,
    taskData
} from "../types/karel"
//Data
import levels from "../data/idk_somelevels"
import LevelButtons from "./levelbuttons"
import LevelModal from "./modal"
import Sidebar from "./sidebar"
import Log from "./log"
import SelectLevel from "./levelselect"
import Explanation from "./explanation"
import Loading from "./loading"
import Savecode from "./savingcode"


export default class Dashboard extends React.Component<DashboardProps, DashboardState> {

    debounceRunningCode = false
    debounceSaveCode = false
    isLoggedIn = false
    userId = ""
    saveCode: ReturnType<typeof setTimeout> = null

    constructor(props: DashboardProps) {
        super(props)
        //Adapting props, when user data was given
        let lastStage = 0
        let done = ""
        let code = levels[lastStage].code
        let tasks: Array<taskData> = []
        let activeTask = 1
        if (props.id && props.id.length) {
            this.userId = props.id
            this.isLoggedIn = true
            tasks = props.tasks
            let lowestTask = Number.MAX_SAFE_INTEGER
            let foundOneItems = 0
            tasks.forEach((taskObject) => {
                if ((taskObject.start != "" && taskObject.done != "")) foundOneItems++
                if (taskObject.task < lowestTask && (taskObject.start == "" || taskObject.done == "")) {
                    lowestTask = taskObject.task
                    activeTask = taskObject.task
                }
            })
            if (foundOneItems == tasks.length) activeTask = tasks.length
            done = tasks[activeTask - 1].done
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
                worldSuccessfullyCompletedCounter: 0,
                worldCompletedCounter: 0,
                worldCounter: levels[lastStage].worlds.length,
                executionSuccessfullyCompleted: false,
                executionCompleted: false,
                pauseCode: false,
                interval: 0,
                showLevelCompletedModal: false,
                firstLog: [],
                secondLog: [],
                activeLine: 0,
                activeTab: 4,
                done: done,
                displayHelper: true,
                step: 0,
                loading: false,
                savedCode: 0,
                activeTask: activeTask,
                tasks: tasks
            }
        }
    }

    setActiveTask(task: number) {
        this.setState({
            activeTask: task,
            done: this.state.tasks[task - 1].done
        })
    }

    handleStep() {
        this.setState({
            step: this.state.step + 1,
            runningCode: true,
            pauseCode: true
        })
    }

    onCodeChange(code: string) {
        clearTimeout(this.saveCode)
        this.saveCode = setTimeout(() => void this.handleSaveLevel({ code: this.state.code }), 5000)
        if (this.state.runningCode) this.setState({ ...this.getResetRunningCodeObject(), ...{ code: code } })
        else this.setState({ code: code })
    }

    handleIntervalPause(pause: boolean) { this.setState({ pauseCode: pause }) }

    async setLevel(level: number) {
        this.setState({ loading: true })
        const karel: IKarel = JSON.parse(JSON.stringify(levels[level]?.worlds[0]?.karel)) as IKarel //Deep Copy
        let code: string = (' ' + (levels[level]?.code)).slice(1) //Deep Copy
        let done = ""
        await this.handleSaveLevel({ code: this.state.code })
        // await new Promise((res) => setTimeout(() => res("p1"), 3000)); // Testing loading screen
        const res: GetLevelApiResponse | string = await this.getLevel(level)
        if (typeof res != "string") {
            code = res.code
            done = res.done
        }
        this.setState({
            ...this.getResetRunningCodeObject(),
            ...{
                currentLevel: level,
                commands: levels[level].commands,
                karel: karel,
                code: code,
                done: done,
                activeTab: 4,
                worldCounter: levels[level].worlds.length,
                loading: false
            }
        })
    }

    async getLevel(level: number) {
        if (!this.userId) return "No user id."
        const url = "?" + this.objectToParams({ stage: level, user_id: this.userId })
        return await this.requestLevel("GET", url)
    }

    objectToParams(obj: object) {
        const keys: Array<string> = Object.keys(obj)
        let params = ""
        for (let i = 0; i < keys.length; i++) {
            if (i != 0) params = params + "&"
            params = `${params}${keys[i]}=${obj[keys[i] as keyof object] as string}`
        }
        return params
    }

    async requestLevel(method: "GET" | "PUT", url: string, body?: PutRequestBodyObject,): Promise<GetLevelApiResponse | string> {
        return new Promise((resolve, reject) => {
            const myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")
            url = "/api/level" + url
            const request: RestRequest = { method: method, headers: myHeaders }
            try {
                if (body != null && method == "PUT") request.body = JSON.stringify(JSON.stringify(body))
                fetch(url, request)
                    .then(response => response.text())
                    .then((result: string) => {
                        let parsed
                        try {
                            parsed = JSON.parse(result) as GetLevelApiResponse
                        } catch (e) {
                            reject(e as string)
                        } finally {
                            resolve(parsed)
                        }
                    })
                    .catch(error => reject(error as string))
            } catch (e) {
                reject(e as string)
            }
        })
    }

    async handleSaveLevel(updateLevel: IUpdateLevelData, attempt?: boolean): Promise<boolean> {
        if (!this.userId) return false
        if (this.debounceSaveCode) return false
        this.debounceSaveCode = true
        const body: PutRequestBodyObject = {
            user_id: this.userId,
            stage: this.state.currentLevel,
            level: updateLevel
        }
        if (attempt) body.attempt = { "timestamp": new Date().toString() }
        const res = await this.requestLevel("PUT", "", body)

        if (res && Object.prototype.hasOwnProperty.call(updateLevel, "code")) this.setState({ savedCode: (this.state.savedCode + 1) })
        if (res) this.debounceSaveCode = false
        return !this.debounceSaveCode
    }

    setActiveTab(tab: number) {
        if (this.state.activeTab == tab) this.setState({ displayHelper: !this.state.displayHelper })
        else this.setState({ activeTab: tab, displayHelper: true })
    }

    executeCode(interval: number) {
        //Debounce to prevent clicking too fast and breaking things
        if (this.debounceRunningCode) return
        this.debounceRunningCode = true
        setTimeout(() => this.debounceRunningCode = false, 300)
        // When the last execution is completed the state resets and is then set the to running
        if (this.state.executionCompleted) {
            return this.setState(this.getResetRunningCodeObject(), () =>
                this.setState({ interval: interval, runningCode: true })
            )
        }
        // The execution gets unpaused
        if (this.state.pauseCode) return this.setState({ pauseCode: false, interval: interval })
        // Execute the code
        this.setState({ runningCode: true, interval: interval })
    }

    getResetRunningCodeObject(): ResetStateObject {
        return {
            firstLog: [] as LogEntry[],
            secondLog: [] as LogEntry[],
            pauseCode: false,
            runningCode: false,
            executionSuccessfullyCompleted: false,
            executionCompleted: false,
            activeLine: 0,
            worldSuccessfullyCompletedCounter: 0,
            worldCompletedCounter: 0,
            step: 0
        }
    }

    handleResetExecution() { this.setState(this.getResetRunningCodeObject.bind(this)) }

    handleResetToDefaulftCode() { this.setState({ code: levels[this.state.currentLevel].code }) }

    handleLevelChange(level: number) {
        if (level >= 0 && level < levels.length) void this.setLevel(level)
    }

    completedLevel(completed: boolean) {
        let worldSuccessfullyCompletedCounter = this.state.worldSuccessfullyCompletedCounter
        let worldCompletedCounter = this.state.worldCompletedCounter
        let executionCompleted = false
        // If the level was already completed at some point, the execution is completed
        if ((this.state.done != "" && this.state.worldCounter == 1)) return this.setState({ executionSuccessfullyCompleted: completed, executionCompleted: true, })
        // Check if there are multiple worlds and count up if one of the is finished
        if (this.state.worldCounter > 1) worldCompletedCounter++
        // Check if all worlds have completed
        if (this.state.worldCounter > 1 && completed) {
            // Counts up, because one world was completed
            worldSuccessfullyCompletedCounter++
            // Resets when all where completed successfully
            if (this.state.worldCounter == worldSuccessfullyCompletedCounter) worldSuccessfullyCompletedCounter = (this.state.worldCounter - 1)
            else completed = false // Sets to false, when they didn't match the count
        }
        // Was the level executed till the end, then the execution is completed
        if (this.state.worldCounter == worldCompletedCounter) executionCompleted = true
        let done = this.state.done
        // Handle first time completed and saves the code and the done date to database
        if (completed && this.state.done == "") {
            done = new Date().toString()
            // void this.handleSaveLevel({ done: done, code: this.state.code }, true)
        }
        let showModal = false
        if (this.state.done == "" && completed) showModal = true
        this.setState({
            done: done,
            executionSuccessfullyCompleted: completed,
            executionCompleted: executionCompleted,
            showLevelCompletedModal: showModal,
            worldSuccessfullyCompletedCounter: worldSuccessfullyCompletedCounter,
            worldCompletedCounter: worldCompletedCounter,
            step: 0,
            activeLine: 0
        })
    }

    toggleModal(toggle: boolean) { this.setState({ showLevelCompletedModal: toggle }) }

    updateLogAndLine(entry: string, line: number, type: logType, worldNumber: number) {
        // Work around to highlight the same line again
        if (this.state.activeLine == line) {
            this.setState({ activeLine: 0 }, () => {
                setTimeout(() => {
                    // Update the necessary log
                    if (entry == undefined) return
                    let log = this.state.firstLog
                    if (worldNumber == 2) log = this.state.secondLog
                    log.push({ line: line, message: entry, type: type })
                    if (worldNumber == 1) this.setState({ firstLog: log, activeLine: line })
                    if (worldNumber == 2) this.setState({ secondLog: log, activeLine: line })
                }, (32));
            })
            return
        }
        // Update the necessary log
        if (entry == undefined) return
        let log = this.state.firstLog
        if (worldNumber == 2) log = this.state.secondLog
        log.push({ line: line, message: entry, type: type })
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
                            displayHelper={this.state.displayHelper}
                        />
                    </div>
                    {{
                        1: this.state.displayHelper && !this.state.loading && <Log log={this.state.firstLog} logNumber={1} worldCounter={this.state.worldCounter} />,
                        2: this.state.displayHelper && !this.state.loading && <Log log={this.state.secondLog} logNumber={2} worldCounter={this.state.worldCounter} />,
                        3: this.state.displayHelper && !this.state.loading && <Commands commands={this.state.commands} />,
                        4: this.state.displayHelper && !this.state.loading && <Explanation setActiveTask={this.setActiveTask.bind(this)} activeTask={this.state.activeTask} explanations={levels[this.state.currentLevel].explanations} />,
                    }[this.state.activeTab]}
                    {this.state.loading && <div className={"p-8 text-white tracking-wide w-full max-w-lg"}><Loading /></div>}
                    <div className="w-full h-full bg-code-grey max-w-2xl relative">
                        <Savecode savedCode={this.state.savedCode} />
                        {this.state.loading ?
                            <Loading />
                            :
                            <Code
                                code={this.state.code}
                                onCodeChange={this.onCodeChange.bind(this)}
                                runningCode={this.state.runningCode}
                                activeLineProp={this.state.activeLine}
                                executionCompleted={this.state.executionCompleted}
                            />
                        }
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
                                worldSuccessfullyCompletedCounter={this.state.worldSuccessfullyCompletedCounter}
                                worldCompletedCounter={this.state.worldCompletedCounter}
                                currentLevel={this.state.currentLevel}
                                code={this.state.code}
                                runningCode={this.state.runningCode}
                                pauseCode={this.state.pauseCode}
                                interval={this.state.interval}
                                karel={this.state.karel}
                                world={world}
                                activeTask={this.state.activeTask}
                                commands={this.state.commands}
                                activeTab={this.state.activeTab}
                                displayHelper={this.state.displayHelper}
                                completedLevel={this.completedLevel.bind(this)}
                                updateLogAndLine={this.updateLogAndLine.bind(this)}
                                step={this.state.step}
                                loading={this.state.loading}
                            />
                        )
                        }
                        <LevelButtons
                            isLoggedIn={this.isLoggedIn}
                            done={this.state.done}
                            currentLevel={this.state.currentLevel}
                            runningCode={this.state.runningCode}
                            interval={this.state.interval}
                            worldCounter={this.state.worldCounter}
                            handleLevelChange={this.handleLevelChange.bind(this)}
                            executeCode={this.executeCode.bind(this)}
                            handleResetExecution={this.handleResetExecution.bind(this)}
                            handleResetToDefaulftCode={this.handleResetToDefaulftCode.bind(this)}
                            handleIntervalPause={this.handleIntervalPause.bind(this)}
                            handleStep={this.handleStep.bind(this)}
                            pauseCode={this.state.pauseCode}
                        />
                    </div>
                </div>
            </main>
            {this.state.showLevelCompletedModal &&
                <LevelModal
                    currentlevel={this.state.currentLevel}
                    handleLevelChange={this.handleLevelChange.bind(this)}
                    handleResetExecution={this.handleResetExecution.bind(this)}
                    toggleModal={this.toggleModal.bind(this)}
                />}
        </>
    }
}
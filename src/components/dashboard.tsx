import React from "react"
// Components
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
import LevelModal from "./levelModal"
import TaskModal from "./taskModal"
import Log from "./log"
import SelectLevel from "./levelselect"
import Explanation from "./explanation"
import Loading from "./loading"
import Savecode from "./savingcode"


export default class Dashboard extends React.Component<DashboardProps, DashboardState> {

    debounceRunningCode = false
    debounceSaveCode = false
    isLoggedIn = false
    restrictedTasks = true
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
        let playmode = false
        if (props.id && props.id.length) {
            this.restrictedTasks = props.restrictedTasks
            this.userId = props.id
            this.isLoggedIn = true
            tasks = props.tasks
            let highestDoneTask = 0
            tasks.forEach((taskObject) => {
                if (taskObject.task > highestDoneTask && taskObject.done != "") highestDoneTask = taskObject.task
            })
            activeTask = highestDoneTask + 1
            if (highestDoneTask == tasks.length) activeTask = tasks.length
            done = tasks[activeTask - 1].done
            lastStage = props.stage
            code = props.code
        }
        if (levels[props.stage].playmode != undefined) playmode = levels[props.stage].playmode
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
                showTaskCompletedModal: false,
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
                tasks: tasks,
                doneLevels: props.doneLevels,
                playmode: playmode
            }
        }
    }

    getGivenTask(taskNumber: number): taskData {
        let returntask: taskData
        this.state.tasks.forEach((task) => { if (taskNumber == task.task) returntask = task })
        return { ...returntask }
    }

    setActiveTask(task: number) {
        const toUpdateTask = this.getGivenTask(task)
        let tasks = [...this.state.tasks]
        if (toUpdateTask.start == "" && toUpdateTask.done == "") {
            toUpdateTask.start = new Date().toString()
            tasks = this.updateGivenTasks(this.state.tasks, toUpdateTask, task)
            void this.handleSaveLevel({ tasks: tasks, code: this.state.code }, true)
        }
        this.setState({
            ...this.getResetRunningCodeObject(),
            ...{
                activeTask: task,
                tasks: tasks,
                done: this.state.tasks[task - 1].done
            }
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
        let tasks: Array<taskData> = []
        await this.handleSaveLevel({ code: this.state.code })
        // await new Promise((res) => setTimeout(() => res("p1"), 3000)); // Testing loading screen
        const res: GetLevelApiResponse | string = await this.getLevel(level)
        if (typeof res != "string") {
            code = res.code
            done = res.tasks[0].done
            tasks = res.tasks
        }
        let playmode = false
        if (levels[level].playmode != undefined) playmode = levels[level].playmode
        this.setState({
            ...this.getResetRunningCodeObject(),
            ...{
                currentLevel: level,
                commands: levels[level].commands,
                karel: karel,
                code: code,
                done: done,
                activeTab: 4,
                activeTask: 1,
                worldCounter: levels[level].worlds.length,
                playmode: playmode,
                loading: false,
                tasks: tasks
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

    updateGivenTasks(tasksArr: Array<taskData>, task: taskData, taskNumber: number) {
        const tasks = [...tasksArr]
        const newTask = this.getGivenTask(taskNumber)
        newTask.done = task.done
        newTask.start = task.start
        newTask.task = task.task

        let index = Number.MAX_SAFE_INTEGER
        this.state.tasks.forEach((task, i) => {
            if (taskNumber == task.task) index = i
        })
        tasks[index] = newTask
        return tasks
    }

    completedWorld(completed: boolean) {
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
        let tasks = [...this.state.tasks]
        // const activeTask = this.state.activeTask
        const resetObject = {}
        // Handle first time completed and saves the code and the done date to database
        if (completed && this.state.done == "") {
            // set new active task
            // if (this.state.activeTask < this.state.tasks.length) activeTask++
            // set new done value
            done = new Date().toString()
            // update tasks
            let newTask: taskData = {
                done: "",
                start: "",
                task: Number.MAX_SAFE_INTEGER
            }
            newTask = this.getGivenTask(this.state.activeTask)
            newTask.done = done
            if (newTask.task != Number.MAX_SAFE_INTEGER) {
                if (!this.restrictedTasks) {
                    // Check for lower tasks thats have to be "done" for unrestricted users
                    const currentTaskState = this.getGivenTask(newTask.task)
                    if (currentTaskState.done == "" && newTask.done != "") {
                        tasks.forEach((t) => {
                            if (newTask.task > t.task && t.done == "") {
                                t.done = newTask.task.toString()
                                tasks = this.updateGivenTasks(tasks, t, this.state.activeTask)
                            }
                        })
                    }
                }
                tasks = this.updateGivenTasks(tasks, newTask, this.state.activeTask)
            }
            void this.handleSaveLevel({ tasks: tasks, code: this.state.code }, true)
        }
        let showLevelCompletedModal = false
        let showTaskCompletedModal = false
        const doneLevels = [...this.state.doneLevels]

        if (tasks[tasks.length - 1].done != "" && completed) {
            doneLevels[this.state.currentLevel] = true
            showLevelCompletedModal = true
        }
        else if (completed) showTaskCompletedModal = true
        this.setState({
            ...resetObject,
            ...{
                done: done,
                executionSuccessfullyCompleted: completed,
                executionCompleted: executionCompleted,
                showLevelCompletedModal: showLevelCompletedModal,
                showTaskCompletedModal: showTaskCompletedModal,
                worldSuccessfullyCompletedCounter: worldSuccessfullyCompletedCounter,
                worldCompletedCounter: worldCompletedCounter,
                step: 0,
                activeLine: 0,
                tasks: tasks,
                doneLevels: doneLevels
            }
        })
    }

    togglLevelModal(toggle: boolean) { this.setState({ showLevelCompletedModal: toggle }) }

    togglTaskModal(toggle: boolean) { this.setState({ showTaskCompletedModal: toggle }) }

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
                    <Explanation
                        restrictedTasks={this.restrictedTasks}
                        tasks={this.state.tasks}
                        setActiveTask={this.setActiveTask.bind(this)}
                        activeTask={this.state.activeTask}
                        explanations={levels[this.state.currentLevel].explanations}
                        commands={this.state.commands}
                    />
                    {this.state.loading && <div className={"p-8 text-white tracking-wide w-full max-w-lg"}><Loading /></div>}
                    <div className="w-full h-full bg-code-grey max-w-2xl relative">
                        <Savecode savedCode={this.state.savedCode} />
                        <div className="h-[75vh]">
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
                        <div className="h-[25vh] flex flex-row ">
                            {<Log log={[...this.state.firstLog]} logNumber={1} worldCounter={this.state.worldCounter} />}
                            {this.state.worldCounter == 2 && <Log log={this.state.secondLog} logNumber={2} worldCounter={this.state.worldCounter} />}
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <SelectLevel
                            handleLevelChange={this.handleLevelChange.bind(this)}
                            currentLevel={this.state.currentLevel}
                            doneLevels={this.state.doneLevels}
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
                                completedWorld={this.completedWorld.bind(this)}
                                updateLogAndLine={this.updateLogAndLine.bind(this)}
                                step={this.state.step}
                                loading={this.state.loading}
                                playmode={this.state.playmode}
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
                    togglLevelModal={this.togglLevelModal.bind(this)}
                />}
            {this.state.showTaskCompletedModal &&
                <TaskModal
                    currentTask={this.state.activeTask}
                    togglTaskModal={this.togglTaskModal.bind(this)}
                />}
        </>
    }
}
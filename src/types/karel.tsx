import { type ObjectId } from "mongodb"
import { type NextApiRequest } from "next"

interface Coords {
    x: number
    y: number
}
export interface IKarel extends Coords {
    direction: number
    isSuper: boolean
    beeperCount?: number
}
export interface levelDataResponse extends levelData {
    status: 200 | 300 | 400 | 500
    level: levelData
}
export interface levelData {
    id: string
    user_id: string
    stage: number
    code: string
    tasks: Array<taskData>
}

export interface taskData {
    task: number,
    start: string
    done: string
}
export interface PageProps {
    id: string
}
export interface DashboardPropsObject {
    props: DashboardProps
}
export interface DashboardProps {
    id: string
    user_id: string
    stage: number
    code: string
    tasks: Array<taskData>
}
export interface DashboardState extends ResetStateObject {
    currentLevel: number
    code: string
    karel: IKarel
    interval: number
    showLevelCompletedModal: boolean
    done: string
    commands: Commands
    displayHelper: boolean
    loading: boolean
    savedCode: number
    worldCounter: number
    activeTab: number
    activeTask: number
    tasks: Array<taskData>
}

export interface ResetStateObject {
    firstLog: Log
    secondLog: Log
    pauseCode: boolean
    runningCode: boolean
    executionSuccessfullyCompleted: boolean
    executionCompleted: boolean
    activeLine: number
    worldSuccessfullyCompletedCounter: number
    worldCompletedCounter: number
    step: number
}

export type Log = Array<LogEntry>

export interface LogEntry {
    message: string
    line: number
    type: logType
}

export type logType = "success" | "error" | "returnedTrue" | "returnedFalse" | "normal" | "info"

export type Commands = Array<"move" | "turnLeft" | "putBeeper" | "pickBeeper" | "turnRight" | "turnAround" | "frontIsClear" | "frontIsBlocked" | "leftIsClear" | "leftIsBlocked" | "rightIsClear" | "rightIsBlocked" | "beeperIsPresent" | "noBeeperIsPresent" | "beepersInBag" | "noBeepersInBag" | "facingNorth" | "notFacingNorth" | "facingEast" | "notFacingEast" | "facingSouth" | "notFacingSouth" | "facingWest" | "notFacingWest" | "moveAmount" | "isWorld1" | "isWorld2" | "isWorld">

export interface ILevel {
    code: string
    explanation: string
    name: string
    worlds: Array<IWorld>
    commands: Commands
}
export interface INewLevel {
    code: string
    name: string
    worlds: Array<INewWorld>
    commands: Commands
    explanations: Array<IExplanation>
}
export interface IExplanation {
    title: string,
    explanation: string
}
export interface INewWorld {
    karel: IKarel
    walls: Walls
    tasks: Array<ITask>
}

export interface ITask {
    beepers: Beepers
    solutions: Beepers
}


export interface IWorld {
    beepers: Beepers
    karel: IKarel
    solutions: Beepers
    walls: Walls
}
export interface Beeper extends Coords {
    count: number
}
export type Beepers = Array<Beeper>
export type Walls = Array<Array<number>>

export interface ICodeProps {
    code: string
    onCodeChange(code: string): void
    runningCode: boolean
    executionCompleted: boolean
    activeLineProp: number
}
export interface ILogProps {
    log: Log
    worldCounter: number
    logNumber: number
}
export interface ICommandProps {
    commands: Commands
}
export interface ISelectLevelProps {
    currentLevel: number
    handleLevelChange(code: number): void
}

export interface IWorldState {
    karel: IKarel
    beepers: Beepers
    solutions: Beepers
    walls: Walls
    currentLevel: number
    updateCanvas: number
    activeTask: number
}

export interface ISnapshot {
    karel: IKarel
    beepers: Beepers
}
export type ISnapshots = Array<ISnapshot>

export interface IWorldProps {
    karel: IKarel
    world: INewWorld
    runningCode: boolean
    pauseCode: boolean
    code: string
    currentLevel: number
    worldCompletedCounter: number
    worldSuccessfullyCompletedCounter: number
    worldNumber: number
    commands: Commands
    interval: number
    activeTab: number
    displayHelper: boolean
    step: number
    loading: boolean
    activeTask: number
    completedLevel(completed: boolean): void
    updateLogAndLine(log: string, line: number, type: logType, worldNumber: number): void
}

export interface ICanvasProps {
    karel?: IKarel
    beepers?: Beepers
    solutions?: Beepers
    updateCanvas?: number
    walls: Walls
    activeTab: number
    displayHelper: boolean
}

export interface ILevelButtons {
    handleLevelChange(code: number): void
    executeCode(interval: number): void
    handleResetExecution(): void
    handleStep(): void
    handleResetToDefaulftCode(): void
    handleIntervalPause(pause: boolean): void
    worldCounter: number
    isLoggedIn: boolean
    done: string
    currentLevel: number
    runningCode: boolean
    interval: number
    pauseCode: boolean
}

export interface ISidebar {
    setActiveTab(code: number): void
    worldCounter: number
    activeTab: number
    displayHelper: boolean
}

// Requests
export interface GetLevelApiResponse {
    id: string
    user_id: string
    stage: number
    start: string
    default_world: IWorld
    code: string
    done: string
}

export interface RestRequest {
    headers: Headers
    method: "GET" | "PUT" | "POST" | "DELETE"
    body?: string
}

export interface GetLevelObject {
    id?: string
    stage?: number,
    user_id?: string
}
export interface GetUserObject {
    id?: string
}
export interface IUpdateLevelData {
    code?: string
    tasks?: Array<taskData>
}
export interface IUpdateLevelRequest extends IUpdateLevelData {
    user_id: string
    stage: number
}
export interface PutRequestBodyObject {
    user_id: string,
    stage: number,
    level: IUpdateLevelData,
    attempt?: IAttempt
}
export interface IAttempt {
    timestamp: string
}

export interface NextApiRequestBody extends NextApiRequest {
    body: string
}
// Mongo DB
export interface GetLevelDbResponse {
    _id: ObjectId
    user_id: string
    stage: number
    code: string
    tasks: Array<taskData>
}
export interface GetUserDbResponse {
    _id: ObjectId
    lastStage: number
}
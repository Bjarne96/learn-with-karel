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
    default_world: IWorld
    default_code: string
    done: string
    start: string
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
    done: string
}
export interface DashboardState {
    currentLevel: number
    code: string
    karel: IKarel
    runningCode: boolean
    pauseCode: boolean
    executionCompleted: boolean
    worldCompletedCounter: number
    worldCounter: number
    interval: number
    showLevelCompletedModal: boolean
    firstLog: Array<string>
    secondLog: Array<string>
    activeLine: number
    activeTab: number
    done: string
    step: number
    commands: Commands
    displayHelper: boolean
    loading: boolean
    savedCode: number
}

export type Commands = Array<"move" | "turnLeft" | "putBeeper" | "pickBeeper" | "turnRight" | "turnAround" | "frontIsClear" | "frontIsBlocked" | "leftIsClear" | "leftIsBlocked" | "rightIsClear" | "rightIsBlocked" | "beeperIsPresent" | "noBeeperIsPresent" | "beepersInBag" | "noBeepersInBag" | "facingNorth" | "notFacingNorth" | "facingEast" | "notFacingEast" | "facingSouth" | "notFacingSouth" | "facingWest" | "notFacingWest">
export interface ILevel {
    code: string
    explanation: string
    name: string
    worlds: Array<IWorld>
    commands: Commands
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
    activeLine: number
}
export interface ILogProps {
    log: Array<string>
}
export interface ICommandProps {
    // code: string
    // onCodeChange(code: string): void
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
}

export interface ISnapshot {
    karel: IKarel
    beepers: Beepers
}
export type ISnapshots = Array<ISnapshot>

export interface IWorldProps {
    karel: IKarel
    world: IWorld
    runningCode: boolean
    pauseCode: boolean
    code: string
    currentLevel: number
    worldCompletedCounter: number
    worldNumber: number
    commands: Commands
    interval: number
    activeTab: number
    displayHelper: boolean
    step: number
    loading: boolean
    completedLevel(completed: boolean): void
    updateLogAndLine(log: string, line: number, worldNumber: number): void
}

export interface ICanvasProps {
    karel?: IKarel
    beepers?: Beepers
    solutions?: Beepers
    walls: Walls
    activeTab: number
    displayHelper: boolean
}

export interface ILevelButtons {
    handleLevelChange(code: number): void
    executeCode(interval: number): void
    handleResetCode(): void
    handleStep(): void
    handleResetToDefaulftCode(): void
    handleIntervalPause(pause: boolean): void
    worldCounter: number
    isLoggedIn: boolean
    done: string
    currentLevel: number
    runningCode: boolean
    interval: number
}

export interface ISidebar {
    setActiveTab(code: number): void
    worldCounter: number
    activeTab: number
    displayHelper: boolean
}

// Request
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
    done?: string
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

export interface ResetStateObject {
    firstLog: Array<string>
    secondLog: Array<string>
    pauseCode: boolean
    runningCode: boolean
    executionCompleted: boolean
    activeLine: number
    worldCompletedCounter: number
    step: number
}
export interface NextApiRequestBody extends NextApiRequest {
    body: PutRequestBodyObject
}
// Mongo DB
export interface GetLevelDbResponse {
    _id: ObjectId
    user_id: string
    stage: number
    start: string
    default_world: IWorld
    default_code: string
    code: string
    done: string
    inactive: number
}
export interface GetUserDbResponse {
    _id: ObjectId
    lastStage: number
}
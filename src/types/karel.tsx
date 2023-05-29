interface Coords {
    x: number
    y: number
}
export interface IKarel extends Coords {
    direction: number
    isSuper: boolean
    beeperCount?: number
}
export interface levelData {
    id: string
    user_id: string
    stage: number
    code: string
    default_world: IWorld
    done: string
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
    interval: number
    showLevelCompletedModal: boolean
    firstLog: Array<string>
    secondLog: Array<string>
    activeLine: number
    activeLog: number
    done: string
    commands: Commands
}
type Commands = Array<"move" | "turnLeft" | "putBeeper" | "pickBeeper" | "turnRight" | "turnAround" | "frontIsClear" | "frontIsBlocked" | "leftIsClear" | "leftIsBlocked" | "rightIsClear" | "rightIsBlocked" | "beeperIsPresent" | "noBeeperIsPresent" | "beepersInBag" | "noBeepersInBag" | "facingNorth" | "notFacingNorth" | "facingEast" | "notFacingEast" | "facingSouth" | "notFacingSouth" | "facingWest" | "notFacingWest">
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
    walls: Array<Array<number>>
}
export interface Beeper extends Coords {
    count: number
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Beepers extends Array<Beeper> { }
export interface ICodeProps {
    code: string
    onCodeChange(code: string): void
    runningCode: boolean
    activeLine: number
}
export interface ICommandProps {
    code: string
    onCodeChange(code: string): void
    runningCode: boolean
    log: Array<string>
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
    walls: Array<Array<number>>
    currentLevel: number
}

export interface ISnapshot {
    karel: IKarel
    beepers: Beepers
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISnapshots extends Array<ISnapshot> { }

export interface IWorldProps {
    karel: IKarel
    world: IWorld
    runningCode: boolean
    pauseCode: boolean
    code: string
    currentLevel: number
    worldNumber: number
    commands: Commands
    interval: number
    completedLevel(completed: boolean): void
    updateLogAndLine(log: string, line: number, worldNumber: number): void
}

export interface ICanvasProps {
    karel: IKarel
    beepers: Beepers
    solutions: Beepers
    walls: Array<Array<number>>
}

export interface ITopbar {
    handleLevelChange(code: number): void
    handleRunningCode(): void
    handleResetCode(): void
    handleSaveCode(): void
    handleSaveCode(): void
    handleResetToDefaulftCode(): void
    handleIntervalChange(interval: number): void
    handleIntervalPause(pause: boolean): void
    setActiveLog(log: number): void
    activeLog: number
    worldCounter: number
    isLoggedIn: boolean
    done: string
    currentLevel: number
    runningCode: boolean
    interval: number
}
interface Coords {
    x: number;
    y: number;
}
export interface IKarel extends Coords {
    direction: number;
    isSuper: boolean;
    beeperCount?: number;
}
export interface DashboardState {
    currentLevel: number
    code: string
    karel: IKarel
    runningCode: boolean
    isLevelCompleted: boolean
    log: string
}
export interface ILevel {
    code: string,
    name: string,
    worlds: Array<IWorld>
}
export interface IWorld {
    beepers: Array<Beeper>,
    karel: IKarel,
    solutions: Array<Beeper>,
    walls: Array<Array<number>>,
}
export interface Beeper extends Coords {
    count: number
}
export interface ICode {
    code: string;
    onCodeChange(code: string): void;
}
export interface ICommandProps extends ICode {
    isKarelSuper: boolean,
}
export interface ISelectLevelProps {
    currentLevel: number
    handleLevelChange(code: number): void;
}

export interface IWorldState {
    karel: IKarel
    beepers: Array<Beeper>,
    solutions: Array<Beeper>,
    walls: Array<Array<number>>,
    currentLevel: number
}

export interface IWorldProps {
    karel: IKarel;
    level: ILevel;
    runningCode: boolean;
    code: string;
    currentLevel: number;
    setLevelCompleted(completed: boolean): void;
    writeInLog(log: string): void;
}

export interface ICanvasProps {
    karel: IKarel;
    beepers: Array<Beeper>;
    solutions: Array<Beeper>;
    walls: Array<Array<number>>;
}

export interface ITopbar {
    handleLevelChange(code: number): void;
    handleRunningCode(): void;
    handleResetCode(): void;
    currentLevel: number;
    runningCode: boolean;
}

export interface ILogProps {
    log: string
}
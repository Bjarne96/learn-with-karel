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
export interface IWorldState {
    karel: IKarel
    beepers: Array<Beeper>,
    solutions: Array<Beeper>,
    walls: Array<Array<number>>,
    currentLevel: number
}

export interface IWorldProps {
    karel: IKarel,
    level: ILevel,
    runningCode: boolean,
    code: string,
    currentLevel: number
}

export interface ICanvasProps {
    karel: IKarel,
    beepers: Array<Beeper>,
    solutions: Array<Beeper>,
    walls: Array<Array<number>>,
}
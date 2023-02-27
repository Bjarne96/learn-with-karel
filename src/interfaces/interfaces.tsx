import type Karel from "../components/karel";

interface Coords {
    x: number;
    y: number;
}
export default interface IKarel extends Coords {
    direction: number;
    isSuper: boolean;
    beeperCount?: number;
}
export interface DashboardState {
    currentLevel: number
    code: string
    karel: Karel
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
    karel: Karel,
}
export interface IWorldState {
    karel: IKarel
    runningCode: boolean,
    beepers: Array<Beeper>,
    solutions: Array<Beeper>
}
export interface IWorldProps {
    karel: Karel,
    level: ILevel,
    runningCode: boolean
}

export interface ICanvasProps {
    karel: IKarel,
    beepers: Array<Beeper>,
    solutions: Array<Beeper>,
    walls: Array<Array<number>>,
}
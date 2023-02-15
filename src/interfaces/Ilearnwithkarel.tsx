import Karel from "../components/karel";
import World from "../components/world";


export default interface IKarel {
    x: number;
    y: number;
    direction: number;
    isSuper: boolean;
    beeperCount: number;
}
export interface ILearnWithKarelState {
    currentLevel: number
    code: string
    karel: Karel
    world: World
    goal: boolean
}
export interface ILearnWithKarelProps {
    levels: Array<ILevel>
}
export interface ILevel {
    code: string,
    name: string,
    worlds: Array<IWorld>
}
export interface IWorld {
    beepers: Array<Beeper>,
    karel: KarelAttributes,
    solutions: Array<Solution>,
    walls: Array<Array<number>>,
}

export interface Beeper {
    x: number,
    y: number,
    count: number
}

export interface Solution {
    x: number,
    y: number,
    count: number
}

export interface KarelAttributes {
    x: number;
    y: number;
    direction: number;
    isSuper: boolean;
    beeperCount?: number;
}

export interface ICode {
    code: string;
    onCodeChange;
}
export interface ICommandProps {
    // world: any,
    karel: Karel,
    onCodeChange;
    code: string;
}
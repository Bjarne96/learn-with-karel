import React from "react";
import type { IWorldProps, IWorldState } from "../interfaces/interfaces";
import styles from "../styles/world.module.css";
import Canvas from "./canvas";

export default class World extends React.Component<IWorldProps, IWorldState> {

    constructor(props) {
        super(props);
        this.state = {
            karel: this.props.level.worlds[0].karel,
            runningCode: this.props.runningCode,
            beepers: this.props.level.worlds[0].beepers,
            solutions: this.props.level.worlds[0].solutions
        }
    }


    render() {
        return <Canvas
            karel={this.state.karel}
            walls={this.props.level.worlds[0].walls}
            beepers={this.state.beepers}
            solutions={this.state.solutions} />
            ;
    }
}
import React from "react";
import styles from "../styles/learnwithkarel.module.css";
import Commands from "../components/commands";
import Code from "../components/code";
import Canvas from "../components/canvas";
import Karel from "../components/karel";
import World from "../components/world";
import { ILearnWithKarelProps, ILearnWithKarelState } from "../interfaces/Ilearnwithkarel";


export default class LearnWithKarelComp extends React.Component<ILearnWithKarelProps, ILearnWithKarelState> {

    constructor(props) {
        super(props);
        var karel = new Karel(
            this.props.levels[0].worlds[0].karel.x,
            this.props.levels[0].worlds[0].karel.y,
            this.props.levels[0].worlds[0].karel.direction,
            this.props.levels[0].worlds[0].karel.isSuper
        )

        var world = new World(
            karel,
            this.props.levels[0].worlds[0].beepers,
            this.props.levels[0].worlds[0].solutions,
            this.props.levels[0].worlds[0].walls,
        )
        this.state = {
            currentLevel: 0,
            karel: karel,
            world: world,
            code: this.props.levels[0].code
        };

        this.onCodeChange = this.onCodeChange
    }

    onCodeChange(code) {
        this.setState({
            code: code
        })
    }



    render() {
        return <>
            <main className={styles.main}>
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={() => this.state.world.executeCode(this.state.code)}>Run Code</button>
                    <button className={styles.btn}>See Goal</button>
                    <button className={styles.btn}>Reset Code</button>
                    <button className={styles.btn}>Level</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.components}>
                        <Commands karel={this.state.karel}></Commands>
                        <Code code={this.state.code} onCodeChange={this.onCodeChange.bind(this)}></Code>
                        <Canvas world={this.state.world}></Canvas>
                    </div>
                </div>
            </main>
        </>
    }
}
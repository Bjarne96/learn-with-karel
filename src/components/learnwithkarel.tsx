import React from "react";
import styles from "../styles/learnwithkarel.module.css";
import Commands from "../components/commands";
import Code from "../components/code";
import Canvas from "../components/canvas";
import Karel from "../components/karel";
import World from "../components/world";
import { ILearnWithKarelProps, ILearnWithKarelState, ILevel } from "../interfaces/Ilearnwithkarel";


export default class LearnWithKarelComp extends React.Component<ILearnWithKarelProps, ILearnWithKarelState> {

    constructor(props) {
        super(props);
        const begin = 0;
        var karel = new Karel(
            this.props.levels[begin].worlds[0].karel.x,
            this.props.levels[begin].worlds[0].karel.y,
            this.props.levels[begin].worlds[0].karel.direction,
            this.props.levels[begin].worlds[0].karel.isSuper
        )
        var world = new World(
            karel,
            this.props.levels[begin].worlds[0].beepers,
            this.props.levels[begin].worlds[0].solutions,
            this.props.levels[begin].worlds[0].walls,
        )
        this.state = {
            currentLevel: begin,
            karel: karel,
            world: world,
            code: this.props.levels[begin].code,
            goal: false
        };

        this.onCodeChange = this.onCodeChange
    }

    onCodeChange(code) {
        this.setState({
            code: code
        })
    }

    setLevel(currentLevel?: number) {
        if (currentLevel == undefined) currentLevel = this.state.currentLevel
        console.log('currentLevel', currentLevel);
        let defaultKarel = new Karel(
            this.props.levels[currentLevel].worlds[0].karel.x,
            this.props.levels[currentLevel].worlds[0].karel.y,
            this.props.levels[currentLevel].worlds[0].karel.direction,
            this.props.levels[currentLevel].worlds[0].karel.isSuper
        )
        console.log('this.props.levels[currentLevel].worlds[0].walls', this.props.levels[currentLevel].worlds[0].walls);
        let defaultWorld = new World(
            defaultKarel,
            this.props.levels[currentLevel].worlds[0].beepers,
            this.props.levels[currentLevel].worlds[0].solutions,
            this.props.levels[currentLevel].worlds[0].walls,
        )
        this.setState({
            currentLevel: currentLevel,
            karel: defaultKarel,
            world: defaultWorld
        })
    }

    toggleGoal() {
        this.setState({ goal: !this.state.goal })
    }


    render() {
        return <>
            <main className={styles.main}>
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={() => this.state.world.executeCode(this.state.code)}>Run Code</button>
                    <button className={styles.btn} onClick={() => this.toggleGoal()}>See Goal</button>
                    <button className={styles.btn} onClick={() => this.setLevel()}>Reset Map</button>
                    <select
                        value={this.state.currentLevel}
                        className={styles.btn}
                        onChange={(e) => this.setLevel(Number(e.target.value))}
                    >
                        {
                            this.props.levels.map((level: ILevel, i: number) => {
                                return <option value={i} key={i}>{level.name}</option>;
                            })
                        }
                    </select>
                </div>
                <div className={styles.container}>
                    <div className={styles.components}>
                        <Commands code={this.state.code} onCodeChange={this.onCodeChange.bind(this)} karel={this.state.karel}></Commands>
                        <Code code={this.state.code} onCodeChange={this.onCodeChange.bind(this)}></Code>
                        <Canvas goal={this.state.goal ? 1 : 0} world={this.state.world}></Canvas>
                    </div>
                </div>
            </main>
        </>
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import type { Beeper, IWorldProps, IWorldState, IKarel } from "../interfaces/interfaces";
import styles from "../styles/world.module.css";
import Canvas from "./canvas";

export default class World extends React.Component<IWorldProps, IWorldState> {

    topWall = 8
    rightWall = 4
    bottomWall = 2
    leftWall = 1
    timer = 500
    interval = 1000;
    commandCounter = 0
    walls: number[][] = []

    constructor(props) {
        super(props);
        const stateFromProps = this.getStateFromProps();
        this.walls = this.props.level.worlds[0].walls
        const karel: IKarel = this.props.level.worlds[0].karel

        this.state = {
            karel: karel,
            runningCode: stateFromProps.runningCode,
            beepers: stateFromProps.beepers,
            solutions: stateFromProps.solutions
        }
    }

    /* REACT FUNCTIONS */

    componentDidUpdate(): void {
        //TODO Fix infinity execution bug
        if (this.props.runningCode && this.state.runningCode == false) {
            this.executeCode()
        }
    }

    getStateFromProps() {
        //deep copy => JSON.parse(JSON.stringify(value))
        const karel = JSON.parse(JSON.stringify(this.props.level.worlds[0].karel))
        const beepers = JSON.parse(JSON.stringify(this.props.level.worlds[0].beepers))
        const solutions = JSON.parse(JSON.stringify(this.props.level.worlds[0].solutions))
        const runningCode = JSON.parse(JSON.stringify(this.props.runningCode))
        const stateFromProps: IWorldState = {
            karel: karel,
            beepers: beepers,
            solutions: solutions,
            runningCode: runningCode
        };
        return stateFromProps;
    }

    updateKarel(key: string, value) {
        const updateKarel = this.state.karel;
        updateKarel[key] = value;
        this.setState({
            karel: updateKarel
        });
    }

    render() {
        return <div>{this.props.runningCode.toString()}
            <Canvas
                karel={this.state.karel}
                walls={this.props.level.worlds[0].walls}
                beepers={this.state.beepers}
                solutions={this.state.solutions}
            />
        </div>
    }
    /* END REACT FUNCTIONS */


    /* KAREL FUNCTIONS */

    karelFront() {
        return this.state.karel.direction;
    }

    karelLeft() {
        return (this.state.karel.direction + 1) % 4;
    }

    karelMove() {
        switch (this.state.karel.direction) {
            case 0: // right
                this.updateKarel("x", this.state.karel.x + 1)
                break;
            case 1: // up
                this.updateKarel("y", this.state.karel.y - 1)
                break;
            case 2: // left
                this.updateKarel("x", this.state.karel.x - 1)
                break;
            case 3: // down
                this.updateKarel("y", this.state.karel.y + 1)
                break;
        }
    }

    karelPosition() {
        return { x: this.state.karel.x, y: this.state.karel.y }
    }

    karelRight() {
        return (this.state.karel.direction + 3) % 4;
    }

    karelTurnAround() {
        this.karelTurnLeft();
        this.karelTurnLeft();
    }

    karelTurnLeft() {
        this.updateKarel("direction", this.karelLeft())
    }

    karelTurnRight() {
        this.updateKarel("direction", this.karelRight())
    }

    attributes() {
        return {
            direction: this.state.karel.direction,
            x: this.state.karel.x,
            y: this.state.karel.y,
            isSuper: this.state.karel.isSuper
        };
    }
    /* END KAREL FUNCTIONS */

    /* WORLD FUNCTIONS */

    canMove(direction: number, x: number, y: number) {
        switch (direction) {
            case 0: // right
                return this.canMoveRight(x, y);
            case 1: // up
                return this.canMoveUp(x, y);
            case 2: // left
                return this.canMoveLeft(x, y);
            case 3: // down
                return this.canMoveDown(x, y);
        }
        return false;
    }

    canMoveLeft(x: number, y: number) {
        if (x <= 0) return false;
        const currentWall = this.walls[y][x];
        const nextWall = this.walls[y][x - 1];
        const noLeftWall = (currentWall & this.leftWall) == 0;
        const noRightWall = (nextWall & this.rightWall) == 0;
        return noLeftWall && noRightWall;
    }

    canMoveRight(x: number, y: number) {
        if (x >= (this.walls[0].length) - 1) return false;
        const currentWall = this.walls[y][x];
        const nextWall = this.walls[y][x + 1];
        const noRightWall = (currentWall & this.rightWall) == 0;
        const noLeftWall = (nextWall & this.leftWall) == 0;
        return noRightWall && noLeftWall;
    }

    canMoveUp(x: number, y: number) {
        if (y <= 0) return false;
        const currentWall = this.walls[y][x];
        const nextWall = this.walls[y - 1][x];
        const noTopWall = (currentWall & this.topWall) == 0;
        const noBottomWall = (nextWall & this.bottomWall) == 0;
        return noTopWall && noBottomWall;
    }

    canMoveDown(x: number, y: number) {
        if (y >= (this.walls.length) - 1) return false;
        const currentWall = this.walls[y][x];
        const nextWall = this.walls[y + 1][x];
        const noBottomWall = (currentWall & this.bottomWall) == 0;
        const noTopWall = (nextWall & this.topWall) == 0;
        return noBottomWall && noTopWall;
    }

    executeCommand(command) {
        this.commandCounter++;
        setTimeout(() => {
            //Execute
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this[command](this)
            this.commandCounter--
            // All commands are executed
            if (this.commandCounter == 0) {
                if (this.checkSolution) this.levelCompleted();
                this.setState({
                    runningCode: false
                })
            }
        }, this.timer)
        //Increase timer for each command
        this.timer += this.interval
    }

    executeCode() {
        if (this.state.runningCode) {
            console.log("already executing code");
            return
        }
        this.setState({
            runningCode: true
        })
        // Commands
        const move = () => this.executeCommand("move")
        const turnLeft = () => this.executeCommand("turnLeft")
        const pickBeeper = () => this.executeCommand("pickBeeper")
        const putBeeper = () => this.executeCommand("putBeeper")
        // Super Commands
        if (this.state.karel.isSuper) {
            const beepersInBag = () => this.executeCommand("beepersInBag")
            const beepersPresent = () => this.executeCommand("beepersPresent")
            const facingEast = () => this.executeCommand("facingEast")
            const facingNorth = () => this.executeCommand("facingNorth")
            const facingWest = () => this.executeCommand("facingWest")
            const frontIsBlocked = () => this.executeCommand("frontIsBlocked")
            const frontIsClear = () => this.executeCommand("frontIsClear")
            const leftIsBlocked = () => this.executeCommand("leftIsBlocked")
            const leftIsClear = () => this.executeCommand("leftIsClear")
            const noBeepersInBag = () => this.executeCommand("noBeepersInBag")
            const noBeepersPresent = () => this.executeCommand("noBeepersPresent")
            const notFacingEast = () => this.executeCommand("notFacingEast")
            const rightIsBlocked = () => this.executeCommand("rightIsBlocked")
            const rightIsClear = () => this.executeCommand("rightIsClear")
            const turnAround = () => this.executeCommand("turnAround")
            const turnRight = () => this.executeCommand("turnRight")
        }
        //Execute code
        eval(this.props.code);
    }

    levelCompleted() {
        console.log('completed');
    }

    checkSolution() {
        const compareBeeper = (a: Beeper, b: Beeper) => {
            return a.x === b.x && a.y === b.y && a.count === b.count;
        };
        let found = false;

        if (this.state.beepers.length !== this.state.solutions.length) return false;

        for (let j = 0; j < this.state.beepers.length; j++) {
            found = false;
            for (let k = 0; k < this.state.solutions.length; k++) {
                if (compareBeeper(this.state.beepers[j], this.state.solutions[k])) {
                    found = true;
                }
            }

            if (!found) {
                return false;
            }
        }
        return true;
    }
    /* Commands */

    putBeeper() {
        if (this.state.karel.beeperCount > 0) {
            this.updateKarel("beeperCount", (this.state.karel.beeperCount - 1))
            const x = this.state.karel.x;
            const y = this.state.karel.y;
            let beeper: Beeper;
            for (let i = 0; i < this.state.beepers.length; i++) {
                beeper = this.state.beepers[i];
                if (beeper.x === x && beeper.y === y) {
                    beeper.count++;
                    return;
                }
            }
            this.state.beepers.push({ x: x, y: y, count: 1 });
        }
    }

    pickBeeper() {
        if (this.beepersPresent()) {
            this.updateKarel("beeperCount", (this.state.karel.beeperCount + 1))
            let beeper: Beeper;
            const x = this.state.karel.x;
            const y = this.state.karel.y;
            for (let i = 0; i < this.state.beepers.length; i++) {
                beeper = this.state.beepers[i];
                if (beeper.x === x && beeper.y === y) {
                    beeper.count--;
                    if (beeper.count <= 0) {
                        const index = this.state.beepers.indexOf(beeper);
                        this.state.beepers.splice(index, 1);
                    }
                    return;
                }
            }
        }
    }

    move() {
        if (this.canMove(this.state.karel.direction, this.state.karel.x, this.state.karel.y)) {
            this.karelMove();
        }
    }

    turnLeft() {
        this.karelTurnLeft();
    }

    /* Super Commands */

    beepersInBag() {
        return !!this.state.karel.beeperCount;
    }

    beepersPresent() {
        const x = this.state.karel.x;
        const y = this.state.karel.y;
        let result = false;
        this.state.beepers.forEach(function (beeper) {
            if (beeper.x === x && beeper.y === y) {
                result = true;
            }
        });
        return result;
    }

    facingEast() {
        return this.state.karel.direction === 2;
    }

    facingNorth() {
        return this.state.karel.direction === 1;
    }

    facingSouth() {
        return this.state.karel.direction === 3;
    }

    facingWest() {
        return this.state.karel.direction === 0;
    }

    frontIsBlocked() {
        return !this.frontIsClear();
    }

    frontIsClear() {
        return this.canMove(this.karelFront(), this.state.karel.x, this.state.karel.y);
    }

    leftIsBlocked() {
        return !this.leftIsClear();
    }

    leftIsClear() {
        return this.canMove(this.karelLeft(), this.state.karel.x, this.state.karel.y);
    }

    noBeepersInBag() {
        return !this.beepersInBag();
    }

    noBeepersPresent() {
        return !this.beepersPresent();
    }

    notFacingEast() {
        return !this.facingEast();
    }

    notFacingNorth() {
        return !this.facingNorth();
    }

    notFacingSouth() {
        return !this.facingSouth();
    }

    notFacingWest() {
        return !this.facingWest();
    }

    rightIsBlocked() {
        return !this.rightIsClear();
    }

    rightIsClear() {
        return this.canMove(this.karelRight(), this.state.karel.x, this.state.karel.y);
    }

    turnAround() {
        this.karelTurnAround();
    }

    turnRight() {
        this.karelTurnRight();
    }

    /* WORLD FUNCTIONS */
}
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import type { Beeper, IWorldProps, IWorldState, IKarel } from "../interfaces/interfaces";
import Canvas from "./canvas";
import ErrorString from "../interfaces/enums"

export default class World extends React.Component<IWorldProps, IWorldState> {

    topWall = 8
    rightWall = 4
    bottomWall = 2
    leftWall = 1
    timer = 500
    allTimer = []
    interval = 1000
    commandCounter = 0
    finishedCode = false
    startedCode = false

    constructor(props) {
        super(props);
        const stateFromProps = this.getUpdateFromProps()

        this.state = {
            karel: stateFromProps.karel,
            beepers: stateFromProps.beepers,
            solutions: stateFromProps.solutions,
            walls: stateFromProps.walls,
            currentLevel: stateFromProps.currentLevel
        }
    }

    /* REACT FUNCTIONS */

    componentDidUpdate(): void {
        //Run Code Button was pressed
        if (this.props.runningCode && this.finishedCode == false && this.startedCode == false) {
            this.startedCode = true
            this.executeCode()
        }
        // Reset Button was pressed, while executing code
        if (this.props.runningCode == false && this.finishedCode == false && this.startedCode == true) {
            //Clears all timers, so no code gets executed
            for (let i = 0; i < this.allTimer.length; i++) {
                clearTimeout(this.allTimer[i])
            }
            this.allTimer = []
        }
        // Reset Button was pressed, while and after executing code
        if (this.props.runningCode == false && this.startedCode == true) {
            //Resets all variables that are needed to manage the state in the code execution
            this.finishedCode = false
            this.startedCode = false
            this.timer = 500
            this.setLevel()
        }
        if (this.props.currentLevel != this.state.currentLevel
            && this.props.runningCode == false
            && this.finishedCode == false
            && this.startedCode == false) {
            this.setLevel()
        }
    }

    render() {
        return <Canvas
            karel={this.state.karel}
            walls={this.state.walls}
            beepers={this.state.beepers}
            solutions={this.state.solutions}
        />
    }
    //Updates the state to the level depeding on the props
    setLevel() {
        const update = this.getUpdateFromProps();
        this.setState({
            karel: update.karel,
            beepers: update.beepers,
            solutions: update.solutions,
            walls: update.walls,
            currentLevel: update.currentLevel
        })
    }
    // Deep copies all the props and returns them
    getUpdateFromProps() {
        const karel: IKarel = JSON.parse(JSON.stringify(this.props.level.worlds[0].karel))
        const beepers: Array<Beeper> = JSON.parse(JSON.stringify(this.props.level.worlds[0].beepers))
        const solutions: Array<Beeper> = JSON.parse(JSON.stringify(this.props.level.worlds[0].solutions))
        const walls: Array<Array<number>> = JSON.parse(JSON.stringify(this.props.level.worlds[0].walls))
        const currentLevel: number = JSON.parse(JSON.stringify(this.props.currentLevel))
        const stateFromProps: IWorldState = {
            karel: karel,
            beepers: beepers,
            solutions: solutions,
            walls: walls,
            currentLevel: currentLevel
        }
        return stateFromProps;
    }

    updateKarel(key: string, value) {
        // Updates a specific karel key
        const updateKarel = this.state.karel
        updateKarel[key] = value
        this.setState({
            karel: updateKarel
        })
    }
    /* END REACT FUNCTIONS */

    /* WORLD FUNCTIONS */

    executeCommand(command) {
        this.commandCounter++;
        this.addTimer(() => {
            //Execute
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            try {
                if (typeof this[command] == undefined) {
                    console.log('Unknown Command', command);
                } else {
                    try {
                        this[command](this)
                        this.props.writeInLog((command + " ();"))
                    } catch (e) {
                        console.log('Could not execute command', e);
                    }

                }
            } catch (e) {
                console.log('World executes command error.', e);
            }

            this.commandCounter--
            // All commands are executed
            if (this.commandCounter == 0) {
                this.finishedCode = true
                if (this.checkSolution()) this.props.setLevelCompleted(true);
            }
        })
        //Increase timer for each command
        this.timer += this.interval
    }

    writeErrorLog(error) {
        this.commandCounter++;
        this.addTimer(() => {
            //Execute
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            try {
                this.props.writeInLog((error))
            } catch (e) {
                console.log('Could not write Error log.', e);
            }

            this.commandCounter--
            // All commands are executed
            if (this.commandCounter == 0) {
                this.finishedCode = true
                if (this.checkSolution()) this.props.setLevelCompleted(true);
            }
        })
        //Increase timer for each command
        this.timer += this.interval
    }

    addTimer(timeoutFunction) {
        this.allTimer.push(setTimeout(timeoutFunction, this.timer));
    }

    executeCode() {
        // Commands
        const move = () => this.executeCommand("move")
        const turnLeft = () => this.executeCommand("turnLeft")
        const pickBeeper = () => this.executeCommand("pickBeeper")
        const putBeeper = () => this.executeCommand("putBeeper")

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
        try {
            eval(this.props.code);
        } catch (e) {
            this.props.writeInLog(ErrorString)
            this.writeErrorLog(e);
        }
    }

    checkSolution() {
        const compareBeeper = (a: Beeper, b: Beeper) => {
            return a.x === b.x && a.y === b.y && a.count === b.count
        };
        let found = false

        if (this.state.beepers.length !== this.state.solutions.length) return false

        for (let j = 0; j < this.state.beepers.length; j++) {
            found = false
            for (let k = 0; k < this.state.solutions.length; k++) {
                if (compareBeeper(this.state.beepers[j], this.state.solutions[k])) {
                    found = true;
                }
            }

            if (!found) {
                return false
            }
        }
        return true;
    }

    /* END WORLD FUNCTIONS */

    /* WORLD COMMANDS */

    canMove(direction: number, x: number, y: number) {
        switch (direction) {
            case 0: // right
                return this.canMoveRight(x, y)
            case 1: // up
                return this.canMoveUp(x, y)
            case 2: // left
                return this.canMoveLeft(x, y)
            case 3: // down
                return this.canMoveDown(x, y)
        }
        return false;
    }

    canMoveLeft(x: number, y: number) {
        if (x <= 0) return false
        const currentWall = this.state.walls[y][x]
        const nextWall = this.state.walls[y][x - 1]
        const noLeftWall = (currentWall & this.leftWall) == 0
        const noRightWall = (nextWall & this.rightWall) == 0
        return noLeftWall && noRightWall
    }

    canMoveRight(x: number, y: number) {
        if (x >= (this.state.walls[0].length) - 1) return false
        const currentWall = this.state.walls[y][x]
        const nextWall = this.state.walls[y][x + 1]
        const noRightWall = (currentWall & this.rightWall) == 0
        const noLeftWall = (nextWall & this.leftWall) == 0
        return noRightWall && noLeftWall
    }

    canMoveUp(x: number, y: number) {
        if (y <= 0) return false
        const currentWall = this.state.walls[y][x]
        const nextWall = this.state.walls[y - 1][x]
        const noTopWall = (currentWall & this.topWall) == 0
        const noBottomWall = (nextWall & this.bottomWall) == 0
        return noTopWall && noBottomWall
    }

    canMoveDown(x: number, y: number) {
        if (y >= (this.state.walls.length) - 1) return false;
        const currentWall = this.state.walls[y][x];
        const nextWall = this.state.walls[y + 1][x];
        const noBottomWall = (currentWall & this.bottomWall) == 0;
        const noTopWall = (nextWall & this.topWall) == 0;
        return noBottomWall && noTopWall;
    }

    /* Commands */

    putBeeper() {
        if (this.state.karel.beeperCount > 0) {
            this.updateKarel("beeperCount", (this.state.karel.beeperCount - 1))
            const x = this.state.karel.x
            const y = this.state.karel.y
            let beeper: Beeper
            for (let i = 0; i < this.state.beepers.length; i++) {
                beeper = this.state.beepers[i]
                if (beeper.x === x && beeper.y === y) {
                    beeper.count++
                    return
                }
            }
            this.state.beepers.push({ x: x, y: y, count: 1 })
        }
    }

    pickBeeper() {
        if (this.beepersPresent()) {
            this.updateKarel("beeperCount", (this.state.karel.beeperCount + 1))
            let beeper: Beeper
            const x = this.state.karel.x
            const y = this.state.karel.y
            for (let i = 0; i < this.state.beepers.length; i++) {
                beeper = this.state.beepers[i]
                if (beeper.x === x && beeper.y === y) {
                    beeper.count--
                    if (beeper.count <= 0) {
                        const index = this.state.beepers.indexOf(beeper)
                        this.state.beepers.splice(index, 1)
                    }
                    return
                }
            }
        }
    }

    move() {
        if (this.canMove(this.state.karel.direction, this.state.karel.x, this.state.karel.y)) {
            this.karelMove()
        }
    }

    turnLeft() {
        this.karelTurnLeft()
    }

    /* Super Commands */

    beepersInBag() {
        return !!this.state.karel.beeperCount
    }

    beepersPresent() {
        const x = this.state.karel.x;
        const y = this.state.karel.y
        let result = false
        this.state.beepers.forEach(function (beeper) {
            if (beeper.x === x && beeper.y === y) {
                result = true
            }
        });
        return result
    }

    facingEast() {
        return this.state.karel.direction === 2
    }

    facingNorth() {
        return this.state.karel.direction === 1
    }

    facingSouth() {
        return this.state.karel.direction === 3
    }

    facingWest() {
        return this.state.karel.direction === 0
    }

    frontIsBlocked() {
        return !this.frontIsClear()
    }

    frontIsClear() {
        return this.canMove(this.karelFront(), this.state.karel.x, this.state.karel.y)
    }

    leftIsBlocked() {
        return !this.leftIsClear()
    }

    leftIsClear() {
        return this.canMove(this.karelLeft(), this.state.karel.x, this.state.karel.y)
    }

    noBeepersInBag() {
        return !this.beepersInBag()
    }

    noBeepersPresent() {
        return !this.beepersPresent()
    }

    notFacingEast() {
        return !this.facingEast()
    }

    notFacingNorth() {
        return !this.facingNorth()
    }

    notFacingSouth() {
        return !this.facingSouth()
    }

    notFacingWest() {
        return !this.facingWest()
    }

    rightIsBlocked() {
        return !this.rightIsClear()
    }

    rightIsClear() {
        return this.canMove(this.karelRight(), this.state.karel.x, this.state.karel.y)
    }

    turnAround() {
        this.karelTurnAround()
    }

    turnRight() {
        this.karelTurnRight()
    }

    /* END WORLD COMMANDS */

    /* KAREL COMMANDS */

    karelFront() {
        return this.state.karel.direction
    }

    karelLeft() {
        return (this.state.karel.direction + 1) % 4
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
        return (this.state.karel.direction + 3) % 4
    }

    karelTurnAround() {
        this.karelTurnLeft()
        this.karelTurnLeft()
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
        }
    }
    /* END KAREL COMMANDS */
}
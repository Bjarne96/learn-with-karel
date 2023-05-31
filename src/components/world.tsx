/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import type { Beepers, Beeper, IWorldProps, IWorldState, IKarel, ISnapshot, ISnapshots } from "../types/karel"
import Canvas from "./canvas"

export default class World extends React.Component<IWorldProps, IWorldState> {

    topWall = 8
    rightWall = 4
    bottomWall = 2
    leftWall = 1
    intervalRef
    interval = 250
    pauseInterval = false
    finishedCode = false
    startedCode = false
    snapshotIndex = 0
    errorFound = ""
    snapshots: ISnapshots = []
    logs: Array<{ log: string, line: number }> = []
    karel: IKarel
    beepers: Beepers

    constructor(props) {
        super(props)
        const stateFromProps = this.getUpdateFromProps()
        this.karel = JSON.parse(JSON.stringify(stateFromProps.karel))
        this.beepers = JSON.parse(JSON.stringify(stateFromProps.beepers))
        this.interval = this.props.interval

        this.state = {
            karel: JSON.parse(JSON.stringify(stateFromProps.karel)),
            beepers: JSON.parse(JSON.stringify(stateFromProps.beepers)),
            solutions: JSON.parse(JSON.stringify(stateFromProps.solutions)),
            walls: JSON.parse(JSON.stringify(stateFromProps.walls)),
            currentLevel: JSON.parse(JSON.stringify(stateFromProps.currentLevel))
        }
    }

    /* REACT FUNCTIONS */

    componentDidUpdate(): void {
        //Run Code Button was pressed
        if (this.props.runningCode &&
            this.props.worldNumber - 1 == this.props.worldCompletedCounter &&
            !this.finishedCode && !this.startedCode) {
            this.startedCode = true
            this.executeCode()
        }
        // Reset Button was pressed, while executing code
        if (!this.props.runningCode && !this.finishedCode && this.startedCode && this.props.worldNumber - 1 == this.props.worldCompletedCounter) {
            //Clears snapshots and the interval
            this.clearSnapshotsAndVariables()
            this.setLevel()
        }
        // Reset Button was pressed, after executing code
        if (!this.props.runningCode && this.startedCode && this.props.worldNumber - 1 == this.props.worldCompletedCounter) {
            //Resets all variables that are needed to manage the state in the code execution and clears snapshots and the interval
            this.finishedCode = false
            this.startedCode = false
            this.clearSnapshotsAndVariables()
            this.setLevel()
        }
        // Level changed
        if (this.props.currentLevel != this.state.currentLevel && !this.props.runningCode && !this.finishedCode && !this.startedCode) {
            //clears snapshots and the interval
            this.clearSnapshotsAndVariables()
            this.setLevel()
        }
        // Pausing or unpausing the interval
        if (this.pauseInterval != this.props.pauseCode && this.props.worldNumber - 1 == this.props.worldCompletedCounter) {
            this.pauseInterval = this.props.pauseCode
            this.interval = this.props.interval
            if (!this.pauseInterval && !this.finishedCode && this.startedCode) this.executeSnapshots()
        }
        // Unpausing Interval or changing speed
        if (this.interval != this.props.interval && this.props.worldNumber - 1 == this.props.worldCompletedCounter) {
            this.interval = this.props.interval
            if (!this.finishedCode && this.startedCode) this.executeSnapshots()
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
        const karel: IKarel = JSON.parse(JSON.stringify(this.props.world.karel))
        const beepers: Array<Beeper> = JSON.parse(JSON.stringify(this.props.world.beepers))
        const solutions: Array<Beeper> = JSON.parse(JSON.stringify(this.props.world.solutions))
        const walls: Array<Array<number>> = JSON.parse(JSON.stringify(this.props.world.walls))
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
    /* END REACT FUNCTIONS */

    /* WORLD FUNCTIONS */
    executeCommand(command: string, line: number) {
        const valueCommands = [
            "beepersInBag",
            "beeperIsPresent",
            "facingEast",
            "facingNorth",
            "facingWest",
            "frontIsBlocked",
            "frontIsClear",
            "leftIsBlocked",
            "leftIsClear",
            "noBeepersInBag",
            "noBeeperIsPresent",
            "notFacingEast",
            "rightIsBlocked",
            "rightIsClear",
        ]
        try {
            //Max snapshot length to protect the browser from crashing
            if (this.snapshots.length >= 10000) throw "Error: Max Snapshot length reached."
            if (typeof this[command] == undefined) return
            if (valueCommands.includes(command)) {
                const val = this[command](this)
                this.addSnapshot(this.karel, this.beepers)
                if (line) this.addLog(command, line, val)
                return val
            } else {
                this[command](this)
                this.addSnapshot(this.karel, this.beepers)
                if (line) this.addLog(command, line)
            }
        } catch (e) {
            throw e
        }
    }

    addErrorToLog() {
        this.props.updateLogAndLine(this.errorFound, 0, this.props.worldNumber)
        this.errorFound = ""
    }

    addLog(command: string, line: number, bool?: boolean) {
        let log = "L" + line + ":\t" + command
        if (bool != null || bool != undefined) log += " = " + bool
        this.logs.push({ log: log, line: line })
    }

    clearLog() {
        this.errorFound = ""
        this.logs = []
    }

    getLastSnapshot() {
        return this.snapshots[(this.snapshots.length - 1)]
    }

    getSnapshot(snapNumber: number) {
        return this.snapshots[snapNumber]
    }

    addSnapshot(karel: IKarel, beepers: Beepers) {
        const karelClone: IKarel = JSON.parse(JSON.stringify(karel))
        const beepersClone: Beepers = JSON.parse(JSON.stringify(beepers))
        this.snapshots.push({ karel: karelClone, beepers: beepersClone })
    }

    clearSnapshotsAndVariables() {
        clearInterval(this.intervalRef)
        this.clearLog()
        this.snapshots = []
        this.snapshotIndex = 0
        const update = this.getUpdateFromProps();
        this.karel = update.karel
        this.beepers = update.beepers
    }

    executeCode() {
        let commandList = ""
        for (let i = 0; i < this.props.commands.length; i++) {
            commandList = commandList + "\n" + this.props.commands[i] + " = (line) => this.executeCommand('" + this.props.commands[i] + "', line);"
        }
        // Commands
        let move
        let turnLeft
        let putBeeper
        let pickBeeper
        let turnRight
        let turnAround
        let frontIsClear
        let frontIsBlocked
        let leftIsClear
        let leftIsBlocked
        let rightIsClear
        let rightIsBlocked
        let beeperIsPresent
        let noBeeperIsPresent
        let beepersInBag
        let noBeepersInBag
        let facingNorth
        let notFacingNorth
        let facingEast
        let notFacingEast
        let facingSouth
        let notFacingSouth
        let facingWest
        let notFacingWest
        //Binds all available functions
        eval(commandList)
        try {
            //Add line indexing into the users code string
            const codeArr = this.props.code.split(/\n/);
            let lineIndexedCodeString = ""
            const regex = new RegExp(`(${this.props.commands.join('|')})\\s*\\(\\)`, 'g');
            for (let i = 0; i < codeArr.length; i++) {
                lineIndexedCodeString = lineIndexedCodeString + "\n" + codeArr[i].replace(regex, '$1(' + (i + 1) + ')');
            }
            //Execute user code from string
            eval(lineIndexedCodeString)
        } catch (e) {
            this.errorFound = e.toString();
        }
        this.executeSnapshots()
    }

    executeSnapshots() {
        try {
            clearInterval(this.intervalRef)
            if (this.snapshots.length) {
                this.intervalRef = setInterval(() => {
                    if (!this.pauseInterval) {
                        if (this.snapshotIndex >= this.snapshots.length) {
                            if (!this.checkSolution() && this.errorFound == "") this.errorFound = "Error: The level is not solved."
                            if (this.errorFound) this.addErrorToLog()
                            clearInterval(this.intervalRef)
                            this.clearLog();
                            this.props.completedLevel(this.checkSolution())
                            return
                        }
                        this.props.updateLogAndLine(
                            this.logs[this.snapshotIndex].log,
                            this.logs[this.snapshotIndex].line,
                            this.props.worldNumber)
                        this.setState({
                            karel: this.snapshots[this.snapshotIndex].karel,
                            beepers: this.snapshots[this.snapshotIndex].beepers
                        })
                        this.snapshotIndex++
                    }
                }, this.interval)
            } else if (this.errorFound) this.addErrorToLog()
        } catch (e) {
            this.props.updateLogAndLine(e, 0, this.props.worldNumber)
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
                if (compareBeeper(this.state.beepers[j], this.state.solutions[k])) found = true;
            }
            if (!found) return false
        }
        return true
    }

    /* END WORLD FUNCTIONS */

    /* WORLD COMMANDS */

    canMove(direction: number, x: number, y: number, move?: boolean) {
        let can = false
        switch (direction) {
            case 0: // right
                can = this.canMoveRight(x, y)
                break;
            case 1: // up
                can = this.canMoveUp(x, y)
                break;
            case 2: // left
                can = this.canMoveLeft(x, y)
                break;
            case 3: // down
                can = this.canMoveDown(x, y)
                break;
        }
        if (!can && move) throw "GameError: You tried running through a wall."
        return can
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
        if (y >= (this.state.walls.length) - 1) return false
        const currentWall = this.state.walls[y][x]
        const nextWall = this.state.walls[y + 1][x]
        const noBottomWall = (currentWall & this.bottomWall) == 0
        const noTopWall = (nextWall & this.topWall) == 0
        return noBottomWall && noTopWall
    }

    /* Commands */

    putBeeper() {
        if (this.karel.beeperCount > 0) {
            this.karel["beeperCount"] = (this.karel.beeperCount - 1)
            const x = this.karel.x
            const y = this.karel.y
            let beeper: Beeper
            for (let i = 0; i < this.beepers.length; i++) {
                beeper = this.beepers[i]
                if (beeper.x === x && beeper.y === y) {
                    beeper.count++
                    return
                }
            }
            this.beepers.push({ x: x, y: y, count: 1 })
        } else {
            throw "GameError: You have tried to put a beeper down, but you have zero beepers."
        }
    }

    pickBeeper() {
        if (this.beeperIsPresent()) {
            this.karel["beeperCount"] = (this.karel.beeperCount + 1)
            let beeper: Beeper
            const x = this.karel.x
            const y = this.karel.y
            for (let i = 0; i < this.beepers.length; i++) {
                beeper = this.beepers[i]
                if (beeper.x === x && beeper.y === y) {
                    beeper.count--
                    if (beeper.count <= 0) {
                        const index = this.beepers.indexOf(beeper)
                        this.beepers.splice(index, 1)
                    }
                    return
                }
            }
        } else {
            throw "GameError: You have tried to get a beeper, but there is no beeper."
        }
    }

    move() {
        if (this.canMove(this.karel.direction, this.karel.x, this.karel.y, true)) {
            this.karelMove()
        }
    }

    turnLeft() {
        this.karelTurnLeft()
    }

    /* Super Commands */

    beepersInBag() {
        return !!this.karel.beeperCount
    }
    //TODO: Check consistency: inkostistente bennenung, ändern zu beeperIsPresent() ?
    beeperIsPresent() {
        const x = this.karel.x
        const y = this.karel.y
        let result = false
        this.beepers.forEach(function (beeper) {
            if (beeper.x === x && beeper.y === y) {
                result = true
            }
        })
        return result
    }

    facingEast() {
        return this.karel.direction === 2
    }

    facingNorth() {
        return this.karel.direction === 1
    }

    facingSouth() {
        return this.karel.direction === 3
    }

    facingWest() {
        return this.karel.direction === 0
    }

    frontIsBlocked() {
        return !this.frontIsClear()
    }

    frontIsClear() {
        return this.canMove(this.karelFront(), this.karel.x, this.karel.y)
    }

    leftIsBlocked() {
        return !this.leftIsClear()
    }

    leftIsClear() {
        return this.canMove(this.karelLeft(), this.karel.x, this.karel.y)
    }

    noBeepersInBag() {
        return !this.beepersInBag()
    }

    noBeeperIsPresent() {
        return !this.beeperIsPresent()
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
        return this.canMove(this.karelRight(), this.karel.x, this.karel.y)
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
        return this.karel.direction
    }

    karelLeft() {
        return (this.karel.direction + 1) % 4
    }

    karelMove() {
        switch (this.karel.direction) {
            case 0: // right
                this.karel["x"] = (this.karel.x + 1)
                break;
            case 1: // up
                this.karel["y"] = (this.karel.y - 1)
                break;
            case 2: // left
                this.karel["x"] = (this.karel.x - 1)
                break;
            case 3: // down
                this.karel["y"] = (this.karel.y + 1)
                break;
        }
    }

    karelPosition() {
        return { x: this.karel.x, y: this.karel.y }
    }

    karelRight() {
        return (this.karel.direction + 3) % 4
    }

    karelTurnAround() {
        this.karelTurnLeft()
        this.karelTurnLeft()
    }

    karelTurnLeft() {
        this.karel["direction"] = (this.karelLeft())
    }

    karelTurnRight() {
        this.karel["direction"] = (this.karelRight())
    }

    attributes() {
        return {
            direction: this.karel.direction,
            x: this.karel.x,
            y: this.karel.y,
            isSuper: this.karel.isSuper
        }
    }
    /* END KAREL COMMANDS */
}
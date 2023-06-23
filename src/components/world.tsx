/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import type { Beepers, Beeper, IWorldProps, IWorldState, IKarel, ISnapshots, Walls, logType, Log } from "../types/karel"
import Canvas from "./canvas"

export default class World extends React.Component<IWorldProps, IWorldState> {

    topWall = 8
    rightWall = 4
    bottomWall = 2
    leftWall = 1
    intervalRef: ReturnType<typeof setInterval> = null
    interval = 250
    pauseInterval = false
    finishedCode = false
    startedCode = false
    snapshotIndex = 0
    errorFound = ""
    snapshots: ISnapshots = []
    logs: Log = []
    karel: IKarel
    beepers: Beepers
    step = 0
    loadingWorld = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]

    constructor(props: IWorldProps) {
        super(props)
        const stateFromProps = this.getUpdateFromProps()
        this.karel = JSON.parse(JSON.stringify(stateFromProps.karel)) as IKarel
        this.beepers = JSON.parse(JSON.stringify(stateFromProps.beepers)) as Beepers
        this.interval = this.props.interval
        this.step = this.props.step

        this.state = {
            karel: JSON.parse(JSON.stringify(stateFromProps.karel)) as IKarel,
            beepers: JSON.parse(JSON.stringify(stateFromProps.beepers)) as Beepers,
            solutions: JSON.parse(JSON.stringify(stateFromProps.solutions)) as Beepers,
            walls: JSON.parse(JSON.stringify(stateFromProps.walls)) as Walls,
            currentLevel: JSON.parse(JSON.stringify(stateFromProps.currentLevel)) as number
        }
    }

    /* REACT FUNCTIONS */

    componentDidUpdate(): void {
        // Reset Button was pressed, while executing code
        if (!this.props.runningCode && !this.finishedCode && this.startedCode) {
            //Clears snapshots and the interval
            this.clearSnapshotsAndVariables()
            this.setLevel()
        }
        // Reset Button was pressed, after executing code
        if (!this.props.runningCode && this.startedCode) {
            //Resets all variables that are needed to manage the state in the code execution and clears snapshots and the interval
            this.finishedCode = false
            this.startedCode = false
            this.step = 0
            this.clearSnapshotsAndVariables()
            this.setLevel()
        }
        if (this.props.worldNumber - 1 != this.props.worldCompletedCounter && this.props.currentLevel == this.state.currentLevel) return
        //Run Code Button was pressed
        if (this.props.runningCode && !this.finishedCode && !this.startedCode) {
            // Updates the interval initally
            if (this.interval != this.props.interval) this.interval = this.props.interval
            this.startedCode = true
            this.executeCode()
        }
        // Level changed
        if (this.props.currentLevel != this.state.currentLevel && !this.props.runningCode && !this.finishedCode && !this.startedCode) {
            //clears snapshots and the interval
            this.clearSnapshotsAndVariables()
            this.setLevel()
        }
        // Pausing or unpausing the interval
        if (this.pauseInterval != this.props.pauseCode) {
            this.pauseInterval = this.props.pauseCode
            this.interval = this.props.interval
            if (!this.pauseInterval && !this.finishedCode && this.startedCode) this.executeSnapshots()
        }
        // Unpausing Interval or changing speed
        if (this.interval != this.props.interval) {
            this.interval = this.props.interval
            if (!this.finishedCode && this.startedCode) this.executeSnapshots()
        }
        // Skip to the next execution step
        if (this.props.pauseCode && this.props.step != this.step) {
            this.step = this.props.step
            clearInterval(this.intervalRef)
            if (!this.finishedCode && this.startedCode) this.executeSnapshots(false)
        }
    }

    render() {
        const loadingWorld = this.loadingWorld.slice(0, this.state.walls.length)
        return <>{this.props.loading ?
            <Canvas
                walls={loadingWorld}
                activeTab={this.props.activeTab}
                displayHelper={this.props.displayHelper}
            /> :
            <Canvas
                karel={this.state.karel}
                walls={this.state.walls}
                beepers={this.state.beepers}
                solutions={this.state.solutions}
                activeTab={this.props.activeTab}
                displayHelper={this.props.displayHelper}
            />
        }</>
    }
    //Updates the state to the level depeding on the props
    setLevel() {
        const update = this.getUpdateFromProps()
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
        const karel = JSON.parse(JSON.stringify(this.props.world.karel)) as IKarel
        const beepers = JSON.parse(JSON.stringify(this.props.world.beepers)) as Beepers
        const solutions = JSON.parse(JSON.stringify(this.props.world.solutions)) as Beepers
        const walls = JSON.parse(JSON.stringify(this.props.world.walls)) as Walls
        const currentLevel = JSON.parse(JSON.stringify(this.props.currentLevel)) as number
        const stateFromProps: IWorldState = {
            karel: karel,
            beepers: beepers,
            solutions: solutions,
            walls: walls,
            currentLevel: currentLevel
        }
        return stateFromProps
    }
    /* END REACT FUNCTIONS */

    /* WORLD FUNCTIONS */
    executeCommand(command: string, line: number) {
        //Max snapshot length to protect the browser from crashing
        if (this.snapshots.length >= 10000) throw "Error: Max Snapshot length reached."
        if (typeof this[command as keyof this] == undefined) return
        let val: boolean = null
        // MOVEMENT COMMANDS
        if (command == "move") this.move()
        if (command == "turnRight") this.turnRight()
        if (command == "turnLeft") this.turnLeft()
        if (command == "turnAround") this.turnAround()
        if (command == "pickBeeper") this.pickBeeper()
        if (command == "putBeeper") this.putBeeper()
        // RETURN VALUE COMMANDS
        if (command == "beepersInBag") val = this.beepersInBag()
        if (command == "beeperIsPresent") val = this.beeperIsPresent()
        if (command == "facingEast") val = this.facingEast()
        if (command == "facingNorth") val = this.facingNorth()
        if (command == "facingWest") val = this.facingWest()
        if (command == "frontIsBlocked") val = this.frontIsBlocked()
        if (command == "frontIsClear") val = this.frontIsClear()
        if (command == "leftIsBlocked") val = this.leftIsBlocked()
        if (command == "leftIsClear") val = this.leftIsClear()
        if (command == "noBeepersInBag") val = this.noBeepersInBag()
        if (command == "noBeeperIsPresent") val = this.noBeeperIsPresent()
        if (command == "notFacingEast") val = this.notFacingEast()
        if (command == "rightIsBlocked") val = this.rightIsBlocked()
        if (command == "rightIsClear") val = this.rightIsClear()
        // ADD SNAPSHOT + LOG
        this.addSnapshot(this.karel, this.beepers)
        if (line) this.addLog(command, line, val)
        if (val != null) return val
    }
    // Adds the log entry to logs array and modifies message and type
    addLog(command: string, line: number, val?: boolean) {
        // Default command
        let type: logType = "normal"
        let message = command + " ()"
        // Command that returned true
        if (val == true) {
            type = "returnedTrue"
            message = command + ": true"
        }
        // Command that returned false
        else if (val == false) {
            type = "returnedFalse"
            message = command + ": false"
        }
        this.logs.push({ message: message, line: line, type: type })
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
        const karelClone = JSON.parse(JSON.stringify(karel)) as IKarel
        const beepersClone = JSON.parse(JSON.stringify(beepers)) as Beepers
        this.snapshots.push({ karel: karelClone, beepers: beepersClone })
    }

    clearSnapshotsAndVariables() {
        clearInterval(this.intervalRef)
        this.clearLog()
        this.snapshots = []
        this.snapshotIndex = 0
        const update = this.getUpdateFromProps()
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
            const codeArr = this.props.code.split(/\n/)
            let lineIndexedCodeString = ""
            const regex = new RegExp(`(${this.props.commands.join('|')})\\s*\\(\\)`, 'g')
            for (let i = 0; i < codeArr.length; i++) {
                lineIndexedCodeString += "\n" + codeArr[i].replace(regex, `$1(${(i + 1).toString()})`)
            }
            //Execute user code from string
            eval(lineIndexedCodeString)
        } catch (e) {
            this.errorFound = e.toString()
        }
        this.executeSnapshots()
    }

    completeWorld() {
        let lastLog = { message: this.errorFound, type: "error" as logType }
        // Check if the level was solved
        const solved = this.checkSolution() && lastLog.message == ""
        // When no error exist and the level was not solved an error is added
        if (!solved && lastLog.message == "") lastLog = { message: "The level was not solved.", type: "info" }
        // Add solved message when no error was found
        // TODO: Refactor log - misuse of error found variable
        if (solved) lastLog = { message: "The level was solved.", type: "success" }
        // Update log with error, unsolved or solved message
        this.props.updateLogAndLine(lastLog.message, 0, lastLog.type, this.props.worldNumber)
        // Clear interval and log at the end
        clearInterval(this.intervalRef)
        this.clearLog()
        // Give the result to the parent component
        this.props.completedLevel(solved)
    }


    // useInterval is manually set to false, when the skip button is used to execute the next step
    executeSnapshots(useInterval = true) {
        try {
            // Edge case where only and an error was found and no snapshot was given
            if (this.snapshots.length == 0 && this.errorFound != "") this.completeWorld()
            // Return when no snapshots are given
            if (this.snapshots.length == 0) return
            const execute = () => {
                // Clear interval when paused
                if (this.pauseInterval) clearInterval(this.intervalRef)
                // Return when paused and interval is used (play,forward, fastforward) or snapshotIndex is out of bound
                if (useInterval && this.pauseInterval || this.snapshotIndex >= this.snapshots.length) return
                // Update logs
                this.props.updateLogAndLine(
                    this.logs[this.snapshotIndex].message,
                    this.logs[this.snapshotIndex].line,
                    this.logs[this.snapshotIndex].type,
                    this.props.worldNumber)
                //update state from snapshot
                this.setState({
                    karel: this.snapshots[this.snapshotIndex].karel,
                    beepers: this.snapshots[this.snapshotIndex].beepers
                }, () => {
                    // Count the index up
                    this.snapshotIndex++
                    // Compelte the world when the last snapshot was used
                    if (this.snapshotIndex >= this.snapshots.length) this.completeWorld()
                })
            }
            // Always clear interval just in case
            clearInterval(this.intervalRef)
            // Set up interval if play method was used to execute snapshots
            if (useInterval) this.intervalRef = setInterval(() => execute(), this.interval)
            else execute() // Just execute when skip was used
        } catch (e) {
            this.props.updateLogAndLine(e.toString(), 0, "error", this.props.worldNumber)
        }
    }

    checkSolution() {
        const compareBeeper = (a: Beeper, b: Beeper) => a.x === b.x && a.y === b.y && a.count === b.count
        let found = false
        if (this.state.beepers.length !== this.state.solutions.length) return false

        for (let j = 0; j < this.state.beepers.length; j++) {
            found = false
            for (let k = 0; k < this.state.solutions.length; k++) {
                if (compareBeeper(this.state.beepers[j], this.state.solutions[k])) found = true
            }
            if (!found) return false
        }
        return true
    }

    /* HIGH LEVEL COMMANDS */

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

    /* MOVEMENT COMMANDS */

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
        if (this.canMove(this.karel.direction, this.karel.x, this.karel.y, true)) this.karelMove()
    }

    turnLeft() {
        this.karelTurnLeft()
    }

    turnAround() {
        this.karelTurnAround()
    }

    turnRight() {
        this.karelTurnRight()
    }

    /* RETURN VALUE COMMANDS */

    beepersInBag() {
        return !!this.karel.beeperCount
    }

    beeperIsPresent() {
        const x = this.karel.x
        const y = this.karel.y
        let result = false
        this.beepers.forEach(function (beeper) {
            if (beeper.x === x && beeper.y === y) result = true
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
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import type { Beepers, Beeper, IWorldProps, IWorldState, IKarel, Walls, logType, Log } from "../types/karel"
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
    errorFound = ""
    boundContinue: () => void = null
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
            currentLevel: JSON.parse(JSON.stringify(stateFromProps.currentLevel)) as number,
            updateCanvas: 0
        }
    }

    /* REACT FUNCTIONS */

    componentDidUpdate(): void {
        // Reset Button was pressed, while executing code
        if (!this.props.runningCode && !this.finishedCode && this.startedCode) {
            this.resetLevel()
            this.setLevel()
        }
        // Reset Button was pressed, after executing code
        if (!this.props.runningCode && this.startedCode) {
            //Resets all variables that are needed to manage the state in the code execution
            this.finishedCode = false
            this.startedCode = false
            this.step = 0
            this.resetLevel()
            this.setLevel()
        }
        // Return when the world is not active
        if (this.props.worldNumber - 1 != this.props.worldCompletedCounter && this.props.currentLevel == this.state.currentLevel) return
        //Run Code Button was pressed
        if (this.props.runningCode && !this.finishedCode && !this.startedCode) {
            // Updates the interval initally
            if (this.interval != this.props.interval) this.interval = this.props.interval
            this.startedCode = true
            void this.executeCode()
        }
        // Level changed
        if (this.props.currentLevel != this.state.currentLevel && !this.props.runningCode && !this.finishedCode && !this.startedCode) {
            this.resetLevel()
            this.setLevel()
        }
        // Pausing or unpausing the interval
        if (this.pauseInterval != this.props.pauseCode) {
            this.pauseInterval = this.props.pauseCode
            this.interval = this.props.interval
            if (!this.pauseInterval && !this.finishedCode && this.startedCode) this.boundContinue()
        }
        // Unpausing Interval or changing speed
        if (this.interval != this.props.interval) {
            this.interval = this.props.interval
            if (!this.finishedCode && this.startedCode) this.boundContinue()
        }
        // Skip to the next execution step
        if (this.props.pauseCode && this.props.step != this.step) {
            this.step = this.props.step
            clearInterval(this.intervalRef)
            if (!this.finishedCode && this.startedCode) this.boundContinue()
        }
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
    //TO DO: can this be combined with setLevel?
    resetLevel() {
        this.clearLog()
        const update = this.getUpdateFromProps()
        this.karel = update.karel
        this.beepers = update.beepers
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
            currentLevel: currentLevel,
            updateCanvas: 0,
        }
        return stateFromProps
    }
    /* END REACT FUNCTIONS */

    /* WORLD FUNCTIONS */
    pauseCodeExecution() {
        return new Promise<void>(resolve => {
            //Wenn pausiert, dann auf Knopfdruck warten, um weiter zu machen.
            if (this.props.pauseCode) {
                this.boundContinue = resolve
            }
            else {
                //Sonst nach bestimmten zeitintervall weiter machen.
                setTimeout(() => {
                    if (this.props.pauseCode) {
                        this.boundContinue = resolve
                    } else {
                        resolve()
                    }
                }, this.props.interval)
            }
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async updateCanvas(state: any) {
        return new Promise<void>((resolve) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            this.setState({ ...state }, () => resolve())
        })
    }

    async executeCommand(command: string, line: number, param: string) {
        if (typeof this[command as keyof this] == undefined) return
        let val: boolean | number = null
        // MOVEMENT COMMANDS
        if (command == "move") this.move()
        if (command == "moveAmount") this.moveAmount(line, Number(param))
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
        if (command == "isWorld1") val = this.isWorld1()
        if (command == "isWorld2") val = this.isWorld2()
        if (command == "isWorld") val = this.isWorld()
        //update state and log
        if (line) this.updateLog(command, line, val, Number(param))
        await this.updateCanvas({
            karel: this.karel,
            beepers: this.beepers,
            updateCanvas: (this.state.updateCanvas + 1)
        })
        await this.pauseCodeExecution()
        if (val != null) return val
    }
    // Adds the log entry to logs array and modifies message and type
    updateLog(command: string, line: number, val?: boolean | number, param?: number) {
        // Default command
        let type: logType = "normal"
        let message = command + " ( )"
        // Command that returned true
        if (val === true) {
            type = "returnedTrue"
            message = command + ": true"
        }
        // Command that returned false
        else if (val === false) {
            type = "returnedFalse"
            message = command + ": false"
        } else if (param != null) {
            message = command + " (" + param.toString() + ")"
        }
        this.props.updateLogAndLine(message, line, type, this.props.worldNumber)
    }

    clearLog() {
        this.errorFound = ""
        this.logs = []
    }

    async executeCode() {
        let commandList = ""

        for (let i = 0; i < this.props.commands.length; i++) {
            commandList = commandList + "\n" + this.props.commands[i] + " = async (line, param) => await this.executeCommand('" + this.props.commands[i] + "', line, param);"
        }
        // Example Output:
        // let move = async (line, param) => await this.executeCommand("move", 5, null)

        // Commands
        let move //= async (line, param) => await this.executeCommand("move", line, param)
        let turnLeft //= async (line, param) => await this.executeCommand("turnLeft", line, param)
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
        let moveAmount
        let isWorld1
        let isWorld2
        let isWorld
        //Binds all available functions
        eval(commandList)

        function getCommandParams(string: string): string | null {
            const paramterFunctions = ["moveAmount"]
            const regexPattern = new RegExp(paramterFunctions.join('|'), 'g');
            const matches = string.match(regexPattern);
            if (matches != null) {
                const regex = new RegExp(`${matches[0]}\\s*\\(([^\\)]+)\\)`, 'i');
                const match = regex.exec(string);
                if (match && match.length >= 2) {
                    const parameters = match[1].split(',').map(param => param.trim())
                    return parameters[0]
                } else {
                    throw `The command ${matches[0]} needs a paramter.`
                }
            } else return null
        }
        const insertAsynchAwait = (inputCode: string) => {
            //(?<=something) ist ein look-ahead, der nur matches returned, wenn "something" vor dem eigentlichen Match steht. "something" wird aber nicht als Match returned, nur der darauffolgende String.
            //(?<!something) ist ein negativer look-ahead, der nur ein Match returned, wenn "something" NICHT davor steht.

            const funcDefPattern = new RegExp(/(?<=\bfunction\s+)\b(\w+)\b/, 'g') //returned Funktionsnamen, bei Funktionsdefinition
            const funcCallPattern = new RegExp(/(?<!\bfunction\s+)\b(\w+)\b(?=\([^)]*\))/, 'g'); //returned Funktionsnamen, bei Funktionsaufruf

            const output = inputCode
                .replace(funcCallPattern, 'await $1')
                .replace(funcDefPattern, 'async $1')
            return output
        }

        try {
            //Add line indexing into the users code string
            const codeArr = this.props.code.split(/\n/)
            let lineIndexedCodeString = ""
            const regex = new RegExp(`(${this.props.commands.join('|')})\\s*\\([^)]*\\)`, 'g')
            for (let i = 0; i < codeArr.length; i++) {
                const param = getCommandParams(codeArr[i])
                lineIndexedCodeString += "\n" + codeArr[i].replace(regex, `$1(${(i + 1).toString()}, ${param})`)
            }
            lineIndexedCodeString = insertAsynchAwait(lineIndexedCodeString);
            //Execute user code from string
            await eval("(async () => {" + lineIndexedCodeString + "})()")
            this.completeWorld()
        } catch (e) {
            this.errorFound = e.toString()
        }
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
        //clearInterval(this.intervalRef)
        this.clearLog()
        // Give the result to the parent component
        setTimeout(() => {
            this.props.completedLevel(solved)
        }, this.interval)
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
    /* CUSTOM COMMANDS */

    isWorld1() {
        if (this.props.worldNumber == 1) return true
        return false
    }

    isWorld2() {
        if (this.props.worldNumber == 2) return true
        return false
    }

    isWorld() {
        return this.props.worldNumber
    }

    /* MOVEMENT COMMANDS */

    moveAmount(line: number, steps: number) {
        for (let i = 1; i <= steps; i++) {
            this.move()
        }
    }

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
    render() {
        const loadingWorld = this.loadingWorld.slice(0, this.state.walls.length)
        return <>{this.props.loading ?
            <Canvas
                walls={loadingWorld}
                activeTab={this.props.activeTab}
                displayHelper={this.props.displayHelper}
                updateCanvas={this.state.updateCanvas}
            /> :
            <Canvas
                karel={this.state.karel}
                walls={this.state.walls}
                beepers={this.state.beepers}
                solutions={this.state.solutions}
                activeTab={this.props.activeTab}
                displayHelper={this.props.displayHelper}
                updateCanvas={this.state.updateCanvas}
            />
        }</>
    }
}
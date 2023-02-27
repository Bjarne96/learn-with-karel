/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Beeper } from "../interfaces/interfaces";
import type Karel from "./karel";

export default class WorldClass {
    karel: Karel;
    beepers: Array<Beeper>;
    solutions: Array<Beeper>;
    walls: Array<Array<number>>;
    isExecutingCode = false;
    topWall = 8
    rightWall = 4
    bottomWall = 2
    leftWall = 1
    timer = 500;
    interval = 1000;
    commandCounter = 0;

    constructor(
        karel: Karel,
        beepers: Array<Beeper>,
        solutions: Array<Beeper>,
        walls: Array<Array<number>>,
        isExecutingCode?: boolean
    ) {
        //deep copy => JSON.parse(JSON.stringify(array))
        this.karel = karel
        this.beepers = JSON.parse(JSON.stringify(beepers))
        this.solutions = JSON.parse(JSON.stringify(solutions))
        this.walls = JSON.parse(JSON.stringify(walls))
        this.timer = this.timer;
        this.interval = this.interval;
        this.commandCounter = this.commandCounter
        if (isExecutingCode) {
            this.isExecutingCode = JSON.parse(JSON.stringify(isExecutingCode))
        }
    }

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
                this.isExecutingCode = false
                console.log('this.isExecutingCode', this.isExecutingCode);
            }
        }, this.timer)
        //Increase timer for each command
        this.timer += this.interval
    }

    executeCode(code) {
        if (this.isExecutingCode) {
            console.log("already executing code");
            return
        }
        this.isExecutingCode = true;
        console.log('this.isExecutingCode', this.isExecutingCode);
        // Commands
        const move = () => this.executeCommand("move")
        const turnLeft = () => this.executeCommand("turnLeft")
        const pickBeeper = () => this.executeCommand("pickBeeper")
        const putBeeper = () => this.executeCommand("putBeeper")
        // Super Commands
        if (this.karel.isSuper) {
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
        eval(code);
    }

    levelCompleted() {
        console.log('completed');
    }

    checkSolution() {
        const compareBeeper = (a: Beeper, b: Beeper) => {
            return a.x === b.x && a.y === b.y && a.count === b.count;
        };
        let found = false;

        if (this.beepers.length !== this.solutions.length) return false;

        for (let j = 0; j < this.beepers.length; j++) {
            found = false;
            for (let k = 0; k < this.solutions.length; k++) {
                if (compareBeeper(this.beepers[j], this.solutions[k])) {
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
        if (this.karel.beeperCount > 0) {
            this.karel.beeperCount--;
            const x = this.karel.x;
            const y = this.karel.y;
            let beeper: Beeper;
            for (let i = 0; i < this.beepers.length; i++) {
                beeper = this.beepers[i];
                if (beeper.x === x && beeper.y === y) {
                    beeper.count++;
                    return;
                }
            }
            this.beepers.push({ x: x, y: y, count: 1 });
        }
    }

    pickBeeper() {
        if (this.beepersPresent()) {
            this.karel.beeperCount++;
            let beeper: Beeper;
            const x = this.karel.x;
            const y = this.karel.y;
            for (let i = 0; i < this.beepers.length; i++) {
                beeper = this.beepers[i];
                if (beeper.x === x && beeper.y === y) {
                    beeper.count--;
                    if (beeper.count <= 0) {
                        const index = this.beepers.indexOf(beeper);
                        this.beepers.splice(index, 1);
                    }
                    return;
                }
            }
        }
    }

    move() {
        if (this.canMove(this.karel.direction, this.karel.x, this.karel.y)) {
            this.karel.move();
        }
    }

    turnLeft() {
        this.karel.turnLeft();
    }

    /* Super Commands */

    beepersInBag() {
        return !!this.karel.beeperCount;
    }

    beepersPresent() {
        const x = this.karel.x;
        const y = this.karel.y;
        let result = false;
        this.beepers.forEach(function (beeper) {
            if (beeper.x === x && beeper.y === y) {
                result = true;
            }
        });
        return result;
    }

    facingEast() {
        return this.karel.direction === 2;
    }

    facingNorth() {
        return this.karel.direction === 1;
    }

    facingSouth() {
        return this.karel.direction === 3;
    }

    facingWest() {
        return this.karel.direction === 0;
    }

    frontIsBlocked() {
        return !this.frontIsClear();
    }

    frontIsClear() {
        return this.canMove(this.karel.front(), this.karel.x, this.karel.y);
    }

    leftIsBlocked() {
        return !this.leftIsClear();
    }

    leftIsClear() {
        return this.canMove(this.karel.left(), this.karel.x, this.karel.y);
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
        return this.canMove(this.karel.right(), this.karel.x, this.karel.y);
    }

    turnAround() {
        this.karel.turnAround();
    }

    turnRight() {
        this.karel.turnRight();
    }
}

import { Beeper, Solution } from "../interfaces/Ilearnwithkarel";
import Karel from "./karel";

export default class World {
    karel: Karel;
    beepers: Array<Beeper>;
    solutions: Array<Solution>;
    walls: Array<Array<number>>;
    isExecutingCode: boolean = false;
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
        solutions: Array<Solution>,
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
        this.topWall = this.topWall
        this.rightWall = this.rightWall
        this.bottomWall = this.bottomWall
        this.leftWall = this.leftWall
        this.canMove = this.canMove
        this.canMoveLeft = this.canMoveLeft
        this.canMoveRight = this.canMoveRight
        this.canMoveUp = this.canMoveUp
        this.canMoveDown = this.canMoveDown
        this.executeCommand = this.executeCommand
        this.executeCode = this.executeCode
        /* Commands */
        this.move = this.move
        this.turnLeft = this.turnLeft
        this.putBeeper = this.putBeeper
        this.pickBeeper = this.pickBeeper
        /* Super Commands */
        this.beepersInBag = this.beepersInBag
        this.beepersPresent = this.beepersPresent
        this.facingEast = this.facingEast
        this.facingNorth = this.facingNorth
        this.facingWest = this.facingWest
        this.frontIsBlocked = this.frontIsBlocked
        this.frontIsClear = this.frontIsClear
        this.leftIsBlocked = this.leftIsBlocked
        this.leftIsClear = this.leftIsClear
        this.noBeepersInBag = this.noBeepersInBag
        this.noBeepersPresent = this.noBeepersPresent
        this.notFacingEast = this.notFacingEast
        this.rightIsBlocked = this.rightIsBlocked
        this.rightIsClear = this.rightIsClear
        this.turnAround = this.turnAround
        this.turnRight = this.turnRight
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
        var currentWall = this.walls![y][x];
        var nextWall = this.walls![y][x - 1];
        var noLeftWall = (currentWall & this.leftWall) == 0;
        var noRightWall = (nextWall & this.rightWall) == 0;
        return noLeftWall && noRightWall;
    }

    canMoveRight(x: number, y: number) {

        if (x >= (this.walls![0].length) - 1) return false;
        var currentWall = this.walls[y][x];
        var nextWall = this.walls[y][x + 1];
        var noRightWall = (currentWall & this.rightWall) == 0;
        var noLeftWall = (nextWall & this.leftWall) == 0;
        return noRightWall && noLeftWall;
    }

    canMoveUp(x: number, y: number) {
        if (y <= 0) return false;
        var currentWall = this.walls[y][x];
        var nextWall = this.walls[y - 1][x];
        var noTopWall = (currentWall & this.topWall) == 0;
        var noBottomWall = (nextWall & this.bottomWall) == 0;
        return noTopWall && noBottomWall;
    }

    canMoveDown(x: number, y: number) {
        if (y >= (this.walls!.length) - 1) return false;
        var currentWall = this.walls[y][x];
        var nextWall = this.walls[y + 1][x];
        var noBottomWall = (currentWall & this.bottomWall) == 0;
        var noTopWall = (nextWall & this.topWall) == 0;
        return noBottomWall && noTopWall;
    }

    executeCommand(command) {
        this.commandCounter++;
        setTimeout(() => {
            //Execute
            this[command](this)
            this.commandCounter--
            // All commands are executed
            if (this.commandCounter == 0) {
                if (this.checkSolution) this.levelCompleted();
                this.isExecutingCode = false
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
        // Commands
        var move = () => this.executeCommand("move")
        var turnLeft = () => this.executeCommand("turnLeft")
        var pickBeeper = () => this.executeCommand("pickBeeper")
        var putBeeper = () => this.executeCommand("putBeeper")
        // Super Commands
        if (this.karel.isSuper) {
            var beepersInBag = () => this.executeCommand("beepersInBag")
            var beepersPresent = () => this.executeCommand("beepersPresent")
            var facingEast = () => this.executeCommand("facingEast")
            var facingNorth = () => this.executeCommand("facingNorth")
            var facingWest = () => this.executeCommand("facingWest")
            var frontIsBlocked = () => this.executeCommand("frontIsBlocked")
            var frontIsClear = () => this.executeCommand("frontIsClear")
            var leftIsBlocked = () => this.executeCommand("leftIsBlocked")
            var leftIsClear = () => this.executeCommand("leftIsClear")
            var noBeepersInBag = () => this.executeCommand("noBeepersInBag")
            var noBeepersPresent = () => this.executeCommand("noBeepersPresent")
            var notFacingEast = () => this.executeCommand("notFacingEast")
            var rightIsBlocked = () => this.executeCommand("rightIsBlocked")
            var rightIsClear = () => this.executeCommand("rightIsClear")
            var turnAround = () => this.executeCommand("turnAround")
            var turnRight = () => this.executeCommand("turnRight")
        }
        //Execute code
        eval(code);
    }

    levelCompleted() {
        console.log('completed');
    }

    checkSolution() {
        const compareBeeper = (a, b) => {
            return a.x === b.x && a.y === b.y && a.count === b.count;
        };
        var found = false;

        if (this.beepers.length !== this.solutions.length) return false;

        for (var j = 0; j < this.beepers.length; j++) {
            found = false;
            for (var k = 0; k < this.solutions.length; k++) {
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
            var beeper: Beeper;
            for (var i = 0; i < this.beepers.length; i++) {
                beeper = this.beepers[i]!;
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
            var beeper: Beeper;
            const x = this.karel.x;
            const y = this.karel.y;
            for (var i = 0; i < this.beepers.length; i++) {
                beeper = this.beepers[i]!;
                if (beeper.x === x && beeper.y === y) {
                    beeper.count--;
                    if (beeper.count <= 0) {
                        var i = this.beepers.indexOf(beeper);
                        this.beepers.splice(i, 1);
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
        var x = this.karel.x;
        var y = this.karel.y;
        var result = false;
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

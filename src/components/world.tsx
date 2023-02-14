import { Beeper, IWorld, Solution } from "../interfaces/Ilearnwithkarel";
import Karel from "./karel";

export default class World {
    karel: Karel;
    snapshots: Array<IWorld> = [];
    beepers: Array<Beeper>;
    solutions: Array<Solution>;
    walls: Array<Array<number>>;
    isExecutingCode: boolean;
    topWall = 8
    rightWall = 4
    bottomWall = 2
    leftWall = 1

    constructor(
        karel: Karel,
        beepers: Array<Beeper>,
        solutions: Array<Solution>,
        walls: Array<Array<number>>
    ) {
        this.karel = karel
        this.beepers = beepers
        this.solutions = solutions
        this.walls = walls
        this.snapshots = []
        this.isExecutingCode = false
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
        this.takeSnapshot = this.takeSnapshot
        /* Commands */
        this.move = this.move
        this.turnLeft = this.turnLeft
        this.putBeeper = this.putBeeper
        this.pickBeeper = this.pickBeeper
        //this does not work jet, you can still use supercommands
        /* Super Commands */
        if (this.karel.isSuper) {
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
    }

    // public: returns a boolean validating whether a move can be made in give
    // direction from given position.
    //
    // direction: 0 - 3 representing Right, Up, Left, Down
    // x: location of x coordinate
    // y: location of y coordinate
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

    executeCommand(command: string) {
        var result = this[command](this);

        if (result === undefined) {
            // likely something changed because it is not a predicate function
            this.takeSnapshot();
        }

        return result;
    }

    executeCode(code: string) {
        if (this.isExecutingCode) {
            console.log("already executing code");
            return
        }
        this.isExecutingCode = true;
        //pattern: movE3() or 3Move()
        const pattern = /([a-zA-Z0-9_]+)\(\)/g
        var time = 300;
        var code = code.replace(pattern, function (_, group) {
            //adds "this" and a "settimout function" to every karel function 
            time += 300
            return "setTimeout(() => {this." + group + "()}, " + time + ")";
        });
        try {
            eval(code);
        } catch (e) {
            console.log('Du versuchst fehlerhafeten Code auszuführen:', e);
        }
    }

    takeSnapshot() {
        const snapshot = {
            beepers: this.beepers,
            karel: this.karel.attributes(),
            solutions: this.solutions,
            walls: this.walls
        }
        this.snapshots.push(snapshot);
    }

    /* Actions */
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

    move() {
        if (this.canMove(this.karel.direction, this.karel.x, this.karel.y)) {
            this.karel.move();
        }
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

    rightIsBlocked() {
        return !this.rightIsClear();
    }

    rightIsClear() {
        return this.canMove(this.karel.right(), this.karel.x, this.karel.y);
    }

    turnAround() {
        this.karel.turnAround();
    }

    turnLeft() {
        this.karel.turnLeft();
    }

    turnRight() {
        this.karel.turnRight();
    }
    /* End Action */
}

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

        /* Actions */
        this.beepersInBag = this.beepersInBag
        this.beepersPresent = this.beepersPresent
        this.facingEast = this.facingEast
        this.facingNorth = this.facingNorth
        this.facingWest = this.facingWest
        this.frontIsBlocked = this.frontIsBlocked
        this.frontIsClear = this.frontIsClear
        this.leftIsBlocked = this.leftIsBlocked
        this.leftIsClear = this.leftIsClear
        this.move = this.move
        this.noBeepersInBag = this.noBeepersInBag
        this.noBeepersPresent = this.noBeepersPresent
        this.notFacingEast = this.notFacingEast
        this.putBeeper = this.putBeeper
        this.pickBeeper = this.pickBeeper
        this.rightIsBlocked = this.rightIsBlocked
        this.rightIsClear = this.rightIsClear
        this.turnAround = this.turnAround
        this.turnLeft = this.turnLeft
        this.turnRight = this.turnRight
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

        var commands = this.karel.commands();
        for (var i = 0; i < commands.length; i++) {
            eval('var ' + commands[i] + ' = function() { return this.executeCommand("' + commands[i] + '"); }.bind(this);');
        }
        eval(code);
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
    beepersInBag(world) {
        return !!world.karel.beeperCount;
    }
    beepersPresent(world) {
        var x = world.karel.x;
        var y = world.karel.y;
        var result = false;
        world.beepers.forEach(function (beeper) {
            if (beeper.x === x && beeper.y === y) {
                result = true;
            }
        });
        return result;
    }

    facingEast(world) {
        return world.karel.direction === 2;
    }

    facingNorth(world) {
        return world.karel.direction === 1;
    }

    facingSouth(world) {
        return world.karel.direction === 3;
    }

    facingWest(world) {
        return world.karel.direction === 0;
    }

    frontIsBlocked(world) {
        return !this.frontIsClear(world);
    }

    frontIsClear(world) {
        return world.canMove(world.karel.front(), world.karel.x, world.karel.y);
    }

    leftIsBlocked(world) {
        return !this.leftIsClear(world);
    }

    leftIsClear(world) {
        return world.canMove(world.karel.left(), world.karel.x, world.karel.y);
    }

    move(world) {
        if (world.canMove(world.karel.direction, world.karel.x, world.karel.y)) {
            world.karel.move();
        }
    }

    noBeepersInBag(world) {
        return !this.beepersInBag(world);
    }

    noBeepersPresent(world) {
        return !this.beepersPresent(world);
    }

    notFacingEast(world) {
        return !this.facingEast(world);
    }

    notFacingNorth(world) {
        return !this.facingNorth(world);
    }

    notFacingSouth(world) {
        return !this.facingSouth(world);
    }

    notFacingWest(world) {
        return !this.facingWest(world);
    }

    putBeeper(world) {
        if (world.karel.beeperCount > 0) {
            world.karel.beeperCount--;
            const x = world.karel.x;
            const y = world.karel.y;
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

    pickBeeper(world) {
        if (this.beepersPresent(world)) {
            world.karel.beeperCount++;
            var beeper: Beeper;
            const x = world.karel.x;
            const y = world.karel.y;
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

    rightIsBlocked(world) {
        return !this.rightIsClear(world);
    }

    rightIsClear(world) {
        return world.canMove(world.karel.right(), world.karel.x, world.karel.y);
    }

    turnAround(world) {
        world.karel.turnAround();
    }

    turnLeft(world) {
        world.karel.turnLeft();
    }

    turnRight(world) {
        world.karel.turnRight();
    }
    /* End Action */
}

export default class Karel {
    x: number;
    y: number;
    direction: number;
    isSuper: boolean;
    beeperCount: number;

    constructor(x: number, y: number, direction: number, isSuper: boolean) {
        this.x = x
        this.y = y
        this.direction = direction
        this.isSuper = isSuper
        this.beeperCount = Infinity
    }

    front() {
        return this.direction;
    }

    left() {
        return (this.direction + 1) % 4;
    }

    move() {
        switch (this.direction) {
            case 0: // right
                this.x += 1;
                break;
            case 1: // up
                this.y -= 1;
                break;
            case 2: // left
                this.x -= 1;
                break;
            case 3: // down
                this.y += 1;
                break;
        }
    }

    position() {
        return { x: this.x, y: this.y }
    }

    right() {
        return (this.direction + 3) % 4;
    }

    turnAround() {
        this.turnLeft();
        this.turnLeft();
    }

    turnLeft() {
        this.direction = this.left();
    }

    turnRight() {
        this.direction = this.right();
    }

    attributes() {
        return {
            direction: this.direction,
            x: this.x,
            y: this.y,
            isSuper: this.isSuper
        };
    }

    commands(): Array<string> {
        const commands = ["move", "turnLeft", "putBeeper", "pickBeeper"];
        const superCommands = [
            "turnRight",
            "turnAround",
            "frontIsClear",
            "frontIsBlocked",
            "leftIsClear",
            "leftIsBlocked",
            "rightIsClear",
            "rightIsBlocked",
            "beepersPresent",
            "noBeepersPresent",
            "beepersInBag",
            "noBeepersInBag",
            "facingNorth",
            "notFacingNorth",
            "facingEast",
            "notFacingEast",
            "facingSouth",
            "notFacingSouth",
            "facingWest",
            "notFacingWest",
        ];

        return (this.isSuper) ?
            commands.concat(superCommands) :
            commands;
    }
}
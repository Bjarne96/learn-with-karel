// import type { ILevel } from "../types/karel";
export const levels: Array<any> = [
    {
        code: "",
        name: "Get two sticks - Reuse code with functions 2",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [
                    { x: 7, y: 0, count: 1 },
                    { x: 0, y: 7, count: 1 }
                ],
                solutions: [{ x: 0, y: 0, count: 2 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: "",
        name: "Practice Homerun - Reuse code with functions 3",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [
                    { x: 7, y: 0, count: 1 },
                    { x: 7, y: 7, count: 1 },
                    { x: 0, y: 7, count: 1 },
                    { x: 0, y: 0, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 0, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: "",
        name: "Checkerboard",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]
                ],
                beepers: [],
                solutions: [
                    { x: 1, y: 0, count: 1 },
                    { x: 3, y: 0, count: 1 },
                    { x: 0, y: 1, count: 1 },
                    { x: 2, y: 1, count: 1 },
                    { x: 4, y: 1, count: 1 },
                    { x: 1, y: 2, count: 1 },
                    { x: 3, y: 2, count: 1 },
                ],
                karel: { x: 0, y: 0, direction: 0, isSuper: false }
            }],
    },
    {
        code: "",
        name: "Crossroads - Variables",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 4, 0],
                    [0, 0, 0, 0, 0, 4, 0],
                    [2, 2, 2, 2, 2, 6, 0],
                    [2, 2, 2, 2, 2, 2, 0],
                    [0, 0, 0, 0, 0, 4, 0],
                    [0, 0, 0, 0, 0, 4, 0],
                    [0, 0, 0, 0, 0, 4, 0]
                ],
                beepers: [{ x: 1, y: 3, count: 1 }],
                solutions: [{ x: 1, y: 3, count: 1 }, { x: 6, y: 6, count: 1 }],
                karel: { x: 0, y: 3, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        code: "",
        name: "Double the Beepers - Variables",
        worlds: [
            {
                walls: [[0, 0, 0, 0, 0, 0, 0]],
                beepers: [{ x: 3, y: 0, count: 3 }],
                solutions: [{ x: 3, y: 0, count: 6 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true }
            },
            {
                walls: [[0, 0, 0, 0, 0, 0, 0]],
                beepers: [{ x: 3, y: 0, count: 4 }],
                solutions: [{ x: 3, y: 0, count: 8 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true }
            },
        ],
    },
    {
        code: `for (let i = 0; i < 5; i++) {
    move();
}
if(beepersPresent()) {
    turnLeft();
} else {
    turnRight();
}
move();
putBeeper();`,
        name: "T-Crossing - If/Else",
        worlds: [
            {
                walls: [
                    [2, 2, 2, 2, 6, 12, 0],
                    [2, 2, 2, 2, 2, 4, 0],
                    [0, 0, 0, 0, 4, 6, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 5, y: 1, count: 1 }],
                solutions: [{ x: 5, y: 0, count: 1 }, { x: 5, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [2, 2, 2, 2, 6, 12, 0],
                    [2, 2, 2, 2, 2, 4, 0],
                    [0, 0, 0, 0, 4, 6, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [],
                solutions: [{ x: 5, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        code: `for (let i = 0; i < 7; i++) {
    if(rightIsClear())
    {
        fillHole();
    }
    move();
}
            
function fillHole(){
    turnRight();
    move();
    putBeeper();
    turnRight();
    turnRight();
    move();
    turnRight();
}`,
        name: "Repair the street - If/Else",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 13, 2, 9, 8, 12, 2, 9],
                    [8, 0, 8, 0, 0, 0, 8, 0],
                ],
                beepers: [],
                solutions: [
                    { x: 0, y: 2, count: 1 },
                    { x: 2, y: 2, count: 1 },
                    { x: 6, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [12, 2, 9, 8, 12, 2, 13, 2],
                ],
                beepers: [],
                solutions: [
                    { x: 1, y: 2, count: 1 },
                    { x: 5, y: 2, count: 1 },
                    { x: 7, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true }
            }
        ],
    },
    {
        code: ``,
        name: "Zig-Zag - If/Else",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [11, 10, 12, 0, 9, 10, 12],
                    [0, 0, 3, 10, 6, 0, 7],
                    [0, 0, 0, 0, 0, 0, 0,],
                ],
                beepers: [],
                solutions: [{ x: 6, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [2, 6, 8, 8, 8, 7, 12],
                    [3, 2, 2, 13, 2, 2, 6],
                    [0, 0, 0, 0, 0, 0, 0,],
                ],
                beepers: [],
                solutions: [{ x: 6, y: 1, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: true, beeperCount: 1 }
            }
        ],
    },
];
export default levels;
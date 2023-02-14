import { ILevel } from "../interfaces/Ilearnwithkarel";

export var levels: Array<ILevel> = [
    {
        code: "move();\npickBeeper();\n//hier drunter weiteren Code einfügen. Ausgegrauter Code macht nichts,\n//Und kann gelöscht werden (muss aber nicht).",
        name: "Bring the trash outside - Basic commands",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 9, 8, 12, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 3, 2, 6, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 5, y: 3, count: 1 }],
                karel: { x: 4, y: 2, direction: 3, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: "function turnRight(){\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}\n\nmove();\npickBeeper();\nturnRight();",
        name: "Bring the trash outside - Calling Functions",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 9, 8, 12, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 3, 2, 6, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 5, y: 3, count: 1 }],
                karel: { x: 4, y: 4, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: "function walkHalfCircle(){\n  move();\n  //unter dieser Zeile weiteren Code einfügen\n}\n\n\nwalkHalfCircle();\npickBeeper();\nwalkHalfCircle();\nputBeeper();",
        name: "Obtain Artifact - Writing Functions",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 4, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 5, y: 3, count: 1 }],
                solutions: [{ x: 2, y: 3, count: 1 }],
                karel: { x: 2, y: 3, direction: 3, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: "for (let i = 0; i < 3; i++) {\n  move();\n}\npickBeeper();\nturnLeft();\nturnLeft();",
        name: "Get the stick - Basic loop",
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
                beepers: [{ x: 7, y: 2, count: 1 }],
                solutions: [{ x: 0, y: 2, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
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
        code: "if(rightIsClear())\n{\n  fillHole();\n}\n\nfunction fillHole(){\n\n}",
        name: "Pot Holes - If/Else",
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
                    [0, 13, 0, 9, 8, 12, 0, 9]
                ],
                beepers: [],
                solutions: [
                    { x: 0, y: 7, count: 1 },
                    { x: 2, y: 7, count: 1 },
                    { x: 6, y: 7, count: 1 }],
                karel: { x: 0, y: 6, direction: 0, isSuper: true }
            }],
    },
    {
        code: "",
        name: "Repair the street - If/Else 2",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [8, 12, 0, 9, 12, 0, 9, 8]
                ],
                beepers: [],
                solutions: [
                    { x: 2, y: 3, count: 1 },
                    { x: 5, y: 3, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: true }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [12, 0, 13, 0, 13, 0, 9, 8]
                ],
                beepers: [],
                solutions: [
                    { x: 1, y: 3, count: 1 },
                    { x: 3, y: 3, count: 1 },
                    { x: 5, y: 3, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: true }
            },
        ],
    },
    {
        code: "",
        name: "Hang the Lampions - While Loop",
        worlds: [
            {
                walls: [
                    [0, 2, 0, 0, 0, 0, 2, 0],
                    [2, 0, 0, 0, 2, 2, 0, 2],
                    [0, 0, 2, 2, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [
                    { x: 0, y: 7, count: 1 },
                    { x: 1, y: 7, count: 1 },
                    { x: 2, y: 7, count: 1 },
                    { x: 3, y: 7, count: 1 },
                    { x: 4, y: 7, count: 1 },
                    { x: 5, y: 7, count: 1 },
                    { x: 6, y: 7, count: 1 },
                    { x: 7, y: 7, count: 1 }],
                solutions: [
                    { x: 0, y: 2, count: 1 },
                    { x: 1, y: 1, count: 1 },
                    { x: 2, y: 3, count: 1 },
                    { x: 3, y: 3, count: 1 },
                    { x: 4, y: 2, count: 1 },
                    { x: 5, y: 2, count: 1 },
                    { x: 6, y: 1, count: 1 },
                    { x: 7, y: 2, count: 1 },],
                karel: { x: 0, y: 7, direction: 0, isSuper: true, beeperCount: 0 }
            },
        ],
    },
    {
        code: "",
        name: "Crossroads - Variables 1",
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
        code: "",
        name: "Midpoint",
        worlds: [
            {
                walls: [[0, 0, 0, 0, 0, 0, 0]],
                beepers: [],
                solutions: [{ x: 3, y: 0, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true }
            },
            {
                walls: [[0, 0, 0, 0, 0]],
                beepers: [],
                solutions: [{ x: 2, y: 0, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true }
            },
        ],
    },
    {
        code: "",
        name: "Maze",
        worlds: [
            {
                walls: [
                    [2, 0, 2, 0, 6, 0],
                    [0, 6, 0, 0, 1, 2],
                    [4, 0, 6, 6, 4, 0],
                    [4, 2, 2, 4, 2, 0],
                    [0, 6, 0, 2, 4, 0],
                    [4, 0, 0, 4, 0, 0]
                ],
                beepers: [{ x: 5, y: 0, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 5, direction: 0, isSuper: true }
            },
            {
                walls: [
                    [2, 0, 2, 0, 6, 0],
                    [0, 6, 0, 0, 1, 2],
                    [4, 0, 6, 6, 4, 0],
                    [4, 2, 2, 4, 2, 0],
                    [0, 6, 0, 2, 4, 0],
                    [4, 0, 0, 4, 0, 0]
                ],
                beepers: [{ x: 0, y: 5, count: 1 }],
                solutions: [],
                karel: { x: 5, y: 0, direction: 0, isSuper: true }
            }
        ]
    }
];

export default levels;
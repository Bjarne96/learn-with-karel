import type { ILevel } from "../interfaces/interfaces";
export const levels: Array<ILevel> = [
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
];
export default levels;
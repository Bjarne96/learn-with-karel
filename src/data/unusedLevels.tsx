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
        code: `if(rightIsClear())
{
    fillHole();
}
        
function fillHole(){
        
}`,
        name: "Repair the street 1 - If/Else",
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
        name: "Repair the street 2 - If/Else",
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
];
export default levels;
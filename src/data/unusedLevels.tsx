import type { IWorld, Commands } from "~/types/karel";

export interface IUnusedLevel {
    code: string
    explanation?: string
    name: string
    worlds: Array<IWorld>
    commands?: Commands
}
export const levels: Array<IUnusedLevel> = [
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
if(beeperIsPresent()) {
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
        name: "Hang the Lampions - While Loop",
        explanation: `Kannst du for-loops und while-loops kombinieren, um dieses Level zu lösen?`,
        code: `//Kannst du for-loops und while-loops
//kombinieren, um dieses Level zu lösen?`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
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
        name: "T-Crossing - Seeing Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem zweck können wir Variablen nutzen. Variablen sind zunächst wie ein leerer Container, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Hier wird eine Variable mit dem Namen "istOberesLevel" erstellt, der Name ist frei wählbar.`,
        code: `//Manchmal müssen wir uns eine Information merken,
//um diese im späteren Verlauf des Programms wieder
//abzurufen. Zu diesem zweck können wir Variablen
//nutzen. Variablen sind zunächst wie ein leerer
//Container, den wir mit einem Namen versehen und
//nach belieben mit Inhalt füllen können. Hier wird
//eine Variable mit dem Namen "istOberesLevel" erstellt, 
//der Name ist frei wählbar.
//Hier haben wir das obere Level für Pfeili extra
//mit einem Beeper markiert, damit er es vom unteren
//unterscheiden kann.

var istOberesLevel;
istOberesLevel = beeperIsPresent(); //<- Die Variable wird entweder mit dem Wert "true" oder "false" gefüllt.
move();
move();
move();
move();
move();
if(istOberesLevel){ //<- Hier wird der gespeicherte Wert abgefragt.
    turnLeft();
}
else{
    turnRight();
}
move();
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [2, 2, 2, 2, 6, 12, 0],
                    [2, 2, 2, 2, 2, 4, 0],
                    [0, 0, 0, 0, 4, 6, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 0, y: 1, count: 1 }],
                solutions: [{ x: 5, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }],
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
        name: "T-Crossing - Using Variables",
        explanation: ``,
        code: `//Versuche nun selbst, eine Variable zu nutzen.
//Zur Erinnerung, so wird eine Variable verwendet:
//var meineVariable;
//meineVariable = zugewiesenerWert;
//if(meineVariable){...`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [2, 2, 2, 2, 6, 12, 0],
                    [2, 2, 2, 2, 2, 4, 0],
                    [0, 0, 0, 0, 4, 6, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 0, y: 1, count: 1 }],
                solutions: [{ x: 5, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }],
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
        name: "Repair the street - If/Else",
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
        name: "Corner - Seeing Negating Conditions",
        explanation: `Manchmal wollen wir eine Bedingung umkehren. Dies können wir mittels des "!"-Operators erreichen. Das if-Statement weiter unten wird nur ausgeführt, wenn sich rechts von Pfeile keine Wand befindet. Drücke auf "Run Code" und sieh was passiert.`,
        code: `//Manchmal wollen wir eine Bedingung umkehren. Dies können 
//wir mittels des "!"-Operators erreichen. Das if-Statement
//weiter unten wird nur ausgeführt, wenn sich rechts von
//Pfeile keine Wand befindet.
//Drücke auf "Run Code" und sieh was passiert.

move();
pickBeeper();
if(!rightIsBlocked()) {
    turnRight();
}
move();
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "rightIsBlocked"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 10, 10, 10, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [{ x: 5, y: 1, count: 1 }],
                karel: { x: 3, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 8, 12, 0, 0, 0],
                    [0, 0, 0, 0, 4, 0, 0, 0],
                ],
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [{ x: 4, y: 2, count: 1 }],
                karel: { x: 3, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
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
    {
        name: "Double the Length - Seeing Variables with Numbers",
        explanation: ``,
        code: `//Wir können Variablen auch mit Zahlen füllen.
//Hier muss Pfeili messen, wie weit es zum Beeper
//ist und diese Entfernung dann verdoppeln.
//In der Zeile "distance = distance + 1;" wird
//der Wert, welcher bereits in der Variable gespeichert
//ist, mit 1 addiert und dann wieder in der Variable
//gespeichert.

var distance = 0;
while(noBeeperIsPresent()){
    move();
    distance = distance + 1;
}
pickBeeper();
for (let i = 0; i < distance; i++) { //<- Hier wird die Variable genutzt, um die Länge der Schleife festzulegen.
    move();
}
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "noBeeperIsPresent"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 3, y: 1, count: 1 }],
                solutions: [{ x: 6, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
            {
                walls: [
                    [8, 8, 8, 8, 8, 8, 8, 8, 8],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 2, y: 1, count: 1 }],
                solutions: [{ x: 4, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 3 }
            },
        ],
    },
    {
        name: "Midpoint - Using Variables with Numbers",
        explanation: ``,
        code: `//Versuche nun selbst, eine Variable zu nutzen, um den
//Mittelpunkt der Level zu finden.`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
        worlds: [
            {
                walls: [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],],
                beepers: [],
                solutions: [{ x: 4, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true }
            },
            {
                walls: [[8, 9, 8, 8, 8, 8, 8, 12, 8],
                [6, 0, 0, 0, 0, 0, 0, 0, 3],],
                beepers: [],
                solutions: [{ x: 4, y: 0, count: 1 }],
                karel: { x: 1, y: 0, direction: 0, isSuper: true }
            },
        ],
    },
    {
        name: "Tetris Block - Variables",
        explanation: ``,
        code: `//Man kann statt fester Zahlenwerte auch Variablen
//als Parameter für Funktionen nutzen.
//Insbesondere wenn wir den selben Wert an
//mehreren Stellen im Code verwerden, lohnt
//es sich Variablen zu nutzen. Wenn wir den
//Wert ändern möchten, dann müssen wir nur der
//Variable einen neuen Wert zuweisen, statt jede
//Stelle einzeln zu ändern.
function moveAmount(x){
for (let i = 0; i < x; i++) {
    move();
    }
}

var x = 3;
if(beeperIsPresent()){
    x = 2;
}
else{
    putBeeper();
}

moveAmount(x);
putBeeper();
turnRight();
moveAmount(x);
putBeeper();
turnLeft();
moveAmount(x);
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 3, y: 0, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 6, y: 3, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 4 }
            },
            {
                walls: [
                    [8, 8, 8, 8, 8, 8, 8, 8, 8],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 0, y: 0, count: 1 }],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 2, y: 0, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 4, y: 2, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 3 }
            },
        ],
    },
];
export default levels;
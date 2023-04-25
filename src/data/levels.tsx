import type { ILevel } from "../interfaces/interfaces";
export const levels: Array<ILevel> = [
    {
        code: `//Willkommen beim Learnlab! Rechts siehst 
//du ein Spielfeld mit einem blauen Pfeil darin, 
//das ist Pfeili. Wenn du auf "Run Code" klickst,
//dann wird Pfeili die Befehle weiter unten ausführen.

//Dein Ziel ist es die roten Beeper aufzusammeln
//und in den markierten Zielzonen wieder abzulegen. 
//Drücke auf "Run Code" und sieh was passiert.

move();
pickBeeper();
turnLeft();
move();
putBeeper();`,
        name: "Move the Beeper - Getting Started",
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
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 3, y: 3, count: 1 }],
                karel: { x: 4, y: 4, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `//Nun musst du selbst Befehle einfügen, um den 
//roten Beeper aufzuheben und ihn in der Zielzone
//abzulegen. Links siehst du die verfügbaren Befehle. 
//Du kannst diese entweder per Hand weiter unten in
//dieses Textfeld schreiben, oder sie links in der
//Liste anklicken, um sie direkt einzufügen.
        
move();
pickBeeper();
//hier drunter weiteren Code einfügen...`,
        name: "Move the Beeper - Using commands",
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
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 3, y: 3, count: 1 }],
                karel: { x: 4, y: 4, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `//Manchmal gibt es bestimmte Befehle noch
//nicht. Hier muss sich Pfeili nach rechts
//drehen, aber es gibt nur einen Befehl zur 
//Linksdrehung. Kannst du mit den vorhandenen
//Befehlen trotzdem eine Rechtsdrehung
//erreichen und das Level abschließen? 
//hier drunter Code einfügen...`,
        name: "Move the Beeper - Combining commands",
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
                beepers: [{ x: 3, y: 3, count: 1 }],
                solutions: [{ x: 4, y: 3, count: 1 }],
                karel: { x: 3, y: 4, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code:
            `//Man kann also eine Rechtsdrehung aus
//3 Linksdrehungen erzeugen. Wenn du die
//Rechtsdrehung auf diese Weise häufiger 
//nutzt, dann wird es allerdings
//unübersichtlich im Code. Um das zu
//vermeiden, kann man sich seine eigenen
//Befehle schreiben. Diese bündeln eine 
//Reihe bereits vorhandener Befehle unter
//einem neuen Namen zusammen.

//Hier wird der neue Befehl nur definiert und
//von sich aus passiert noch nichts.
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

turnRight(); // <- Hier wird der vorher definierte Befehl ausgeführt.
move();
pickBeeper();`,
        name: "Move the Beeper - Using functions",
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
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 4, y: 4, count: 1 }],
                karel: { x: 3, y: 3, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code:
            `//Versuche nun die Funktion "turnRight"
//selbst zu definieren.
//Zur Erinnerung: so ist eine Funktion aufgebaut:
//function deinFunktionsName(){
//dein Code für die Funktion...
//}

turnRight();
move();
pickBeeper();
turnRight();
move();
putBeeper();`,
        name: "Move the Beeper - Writing your own functions 1",
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
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 4, y: 4, count: 1 }],
                karel: { x: 3, y: 3, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `//Versuche die Funktion zu vervollständigen.
        
function walkHalfCircle(){
    move();
    //Hier weiteren Code einfügen...
}
          
walkHalfCircle();
pickBeeper();
walkHalfCircle();
putBeeper();`,
        name: "Obtain Artifact - Writing your own functions 2",
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
        code: `//Manchmal muss man einen Befehl mehrfach
//hintereinander ausführen. Programmier*innen
//hassen es allerdings, sich zu wiederholen.
//Also nutzen sie die sogenannten Schleifen
//oder auch Loops, um das Problem zu lösen. 
//Drücke auf "Run Code" und sieh was passiert.

move();
pickBeeper();
for (let i = 0; i < 6; i++) {
    move();
}
putBeeper();`,
        name: "Walk Across - Using Loops",
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
                beepers: [{ x: 1, y: 2, count: 1 }],
                solutions: [{ x: 7, y: 2, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `//Kannst du die Schleife so anpassen, dass 
//Pfeili zur anderen Seite des Levels läuft?
//Wenn du dir nicht sicher bist, dann drücke
//nochmal auf "Run Code" und sieh, ob dir
//ein Zusammenhang zwischen dem Code und
//Pfeilis Bewegung auffällt.

move();
pickBeeper();
for (let i = 0; i < 3; i++) {
    move();
}
putBeeper();`,
        name: "Walk Across - Modifying Loops",
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
                beepers: [{ x: 1, y: 2, count: 1 }],
                solutions: [{ x: 7, y: 2, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `//Innerhalb der {}-Klammern in der Schleife, kann man
//auch mehrere Befehle schreiben, die allesamt in 
//jedem Durchlauf der Schleife ausgeführt werden.

for (let i = 0; i < 3; i++) {
    pickBeeper();
    move();
}`,
        name: "Walk Across - Writing your own Loops",
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
                beepers: [{ x: 0, y: 2, count: 1 },
                { x: 1, y: 2, count: 1 },
                { x: 2, y: 2, count: 1 },
                { x: 3, y: 2, count: 1 },
                { x: 4, y: 2, count: 1 },
                { x: 5, y: 2, count: 1 },
                { x: 6, y: 2, count: 1 },],
                solutions: [{ x: 1, y: 3, count: 1 },
                { x: 2, y: 3, count: 1 },
                { x: 3, y: 3, count: 1 },
                { x: 4, y: 3, count: 1 },
                { x: 5, y: 3, count: 1 },
                { x: 6, y: 3, count: 1 },
                { x: 7, y: 3, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `//Manchmal wird es etwas knifflig, wenn man
//im ersten oder letzten Durchlauf der Schleife
//an Sonderfälle denken muss.

for (let i = 0; i < 3; i++) {
    pickBeeper();
    move();
}`,
        name: "Walk Across - Writing your own Loops 2",
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
                beepers: [{ x: 0, y: 2, count: 1 },
                { x: 1, y: 2, count: 1 },
                { x: 2, y: 2, count: 1 },
                { x: 3, y: 2, count: 1 },
                { x: 4, y: 2, count: 1 },
                { x: 5, y: 2, count: 1 },
                { x: 6, y: 2, count: 1 },
                { x: 7, y: 2, count: 1 },],
                solutions: [{ x: 0, y: 3, count: 1 },
                { x: 1, y: 3, count: 1 },
                { x: 2, y: 3, count: 1 },
                { x: 3, y: 3, count: 1 },
                { x: 4, y: 3, count: 1 },
                { x: 5, y: 3, count: 1 },
                { x: 6, y: 3, count: 1 },
                { x: 7, y: 3, count: 1 },],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        code: `
        `,
        name: "Corner - If/Else",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 4, 4, 0],
                    [2, 2, 2, 2, 6, 4, 0],
                    [2, 2, 2, 2, 2, 6, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 1, y: 2, count: 1 }],
                solutions: [{ x: 5, y: 0, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        code: `
        `,
        name: "Corner 2 - If/Else",
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [8, 8, 8, 8, 8, 12, 0],
                    [8, 8, 8, 8, 12, 4, 0],
                    [0, 0, 0, 0, 4, 4, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }],
                solutions: [{ x: 5, y: 3, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        code: `
        `,
        name: "Zig-Zag - If/Else",
        worlds: [
            {
                walls: [
                    [2, 2, 2, 2, 2, 2, 2],
                    [1, 0, 0, 15, 0, 0, 4],
                    [15, 15, 0, 0, 0, 15, 4],
                    [8, 8, 8, 8, 8, 8, 8,],
                    [0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }],
                solutions: [{ x: 6, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
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
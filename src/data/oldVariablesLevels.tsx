import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Walk Across - Seeing Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem Zweck können wir Variablen nutzen. Variablen sind zunächst wie ein leerer Container oder ein unbeschriebener Notizblock, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Unter dem Namen können wir dann immer auf den Inhalt zugreifen.
        
        "var" ist ein Schlüsselwort, das uns sagt, dass hier eine Variable erstellt wird. "stepAmount" ist der Name der Variable, den wir frei wählen können. "=" ist ein Zuweisungsoperator, der uns sagt, dass der Wert auf der rechten Seite der Variable auf der linken Seite zugewiesen wird.`,
        code: `var stepAmount; //<- leere Variable erstellen
stepAmount = 5; //<- Wert zuweisen ("mit Inhalt füllen")

move();
pickBeeper();

for (let i = 0; i < stepAmount; i++) { //<- Hier wird der gespeicherte Wert genutzt
    move();
}

putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                solutions: [{ x: 6, y: 2, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Walk Across - Modifiying Variables",
        explanation: `Die Zahl "5", die wir abgespeichert haben, wird in der Schleife abgerufen. Das siehst du daran, dass der Name der Variable "stepAmount" dort auftaucht. Im Prinzip ist "stepAmount" also in der Schleife ein Platzhalter für die Zahl, die wir abgespeichert haben.
        
        Versuche nun, der Variable einen anderen Wert zuzuweisen, um das Level zu lösen. `,
        code: `var stepAmount;
stepAmount = 5;

move();
pickBeeper();

for (let i = 0; i < stepAmount; i++) {
    move();
}

putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
        name: "Walk Across - Defining Variables",
        explanation: `Versuche nun selbst eine Variable zu definieren. Es ist wichtig, dass der Name der Variable identisch mit dem Namen ist, den du in der Schleife verwendest. Außerdem muss die Variable definiert werden, *bevor* ihr Wert abgerufen wird. (Also weiter oben im Code definieren und weiter unten im Code nutzen.)`,
        code: `move();
pickBeeper();

for (let i = 0; i < schrittAnzahl; i++) {
    move();
}

putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
        name: "Increase the Length - Seeing Variables Reassignment",
        explanation: `Wir können Variablen auch während des laufenden Programms einen neuen Wert zuweisen. Wird die Variable nach einer neuen Zuweisung abgerufen, wird der neue Wert verwendet. Drücke auf "Run Code" und sieh was passiert.`,
        code: `var schrittAnzahl;
schrittAnzahl = 3; //<-hier wird der Varaible ihr erster Wert zugewiesen

for (let i = 0; i < schrittAnzahl; i++) {
    move();
}

pickBeeper();
schrittAnzahl = 4; //<-hier wird der Variable ein neuer Wert zugewiesen

for (let i = 0; i < schrittAnzahl; i++) {
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
                solutions: [{ x: 7, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Increase the Length - Using Variables Reassignment",
        explanation: `Versuche nun selbst der Variable an der richtigen Stelle die entsprechenden Werte zuzuweisen.`,
        code: `var schrittAnzahl;
schrittAnzahl = 3;

for (let i = 0; i < schrittAnzahl; i++) {
    move();
}

pickBeeper();
schrittAnzahl = 4;

for (let i = 0; i < schrittAnzahl; i++) {
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
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [{ x: 7, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Walk Across - Seeing Variables and Functions",
        explanation: `Hier werden Variablen und Funktionen verknüpft. In der Definition der Funktion siehst du "stepAmount" in den runden Klammern. Dies ist eine Variable, die später beim Aufruf der Funktion zugewiesen wird. Innerhalb der Funktion greifen wir auf die Variable "stepAmount" ganz normal zu. In der Zeile "walkAmount(5)" wird der Variable dann der Wert "5" zugewiesen.`,
        code: `function walkAmount(stepAmount) {
    for (let i = 0; i < stepAmount; i++) {
        move();
    }
}

move();
pickBeeper();
walkAmount(5);
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                solutions: [{ x: 6, y: 2, count: 1 }],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Bring Back - Using Variables and Functions",
        explanation: `Versuche es nun selbst. Du kannst die Funktion so häufig du willst mit verschiedenen Werten aufrufen, sobald sie einmal erstellt wurde.
        
        function meinFunktionsName(meinVariablenName) {
            ...
        }
        meinFunktionsName(5);
        meinFunktionsName(10);`,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                beepers: [{ x: 6, y: 2, count: 1 }],
                solutions: [{ x: 0, y: 2, count: 1 }],
                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Beeper Spiral - Variables and Functions",
        explanation: ``,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                beepers: [],
                solutions: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 1, count: 1 },
                { x: 6, y: 2, count: 1 }, { x: 6, y: 3, count: 1 }, { x: 6, y: 4, count: 1 }, { x: 6, y: 5, count: 1 }, { x: 6, y: 6, count: 1 },
                { x: 1, y: 1, count: 1 }, { x: 2, y: 6, count: 1 }, { x: 3, y: 6, count: 1 }, { x: 4, y: 6, count: 1 }, { x: 5, y: 6, count: 1 },
                { x: 2, y: 5, count: 1 }, { x: 2, y: 4, count: 1 }, { x: 2, y: 3, count: 1 }],
                karel: { x: 0, y: 1, direction: 4, isSuper: false, beeperCount: 99 }
            },
        ],
    },
    {
        name: "Beeper Lines 1 - Variables and Functions",
        explanation: ``,
        code: `//TO DO: weniger lines, sodass man noch keine loop braucht.`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                beepers: [],
                solutions: [{ x: 0, y: 6, count: 1 }, { x: 1, y: 6, count: 1 }, { x: 2, y: 6, count: 1 }, { x: 3, y: 6, count: 1 },
                { x: 0, y: 5, count: 1 }, { x: 1, y: 5, count: 1 }, { x: 2, y: 5, count: 1 },
                { x: 0, y: 4, count: 1 }, { x: 1, y: 4, count: 1 }, { x: 2, y: 4, count: 1 }, { x: 3, y: 4, count: 1 }, { x: 4, y: 4, count: 1 },
                { x: 0, y: 3, count: 1 }, { x: 1, y: 3, count: 1 }, { x: 2, y: 3, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 5, y: 3, count: 1 },
                { x: 0, y: 2, count: 1 }, { x: 1, y: 2, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 3, y: 2, count: 1 },
                { x: 0, y: 1, count: 1 }, { x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 1, count: 1 }],
                karel: { x: 0, y: 7, direction: 1, isSuper: false, beeperCount: 99 }
            },
        ],
    },
    {
        name: "Beeper Lines 2 - Variables, Functions and Loops",
        explanation: ``,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                beepers: [],
                solutions: [{ x: 0, y: 6, count: 1 }, { x: 1, y: 6, count: 1 }, { x: 2, y: 6, count: 1 }, { x: 3, y: 6, count: 1 },
                { x: 0, y: 5, count: 1 }, { x: 1, y: 5, count: 1 }, { x: 2, y: 5, count: 1 },
                { x: 0, y: 4, count: 1 }, { x: 1, y: 4, count: 1 }, { x: 2, y: 4, count: 1 }, { x: 3, y: 4, count: 1 }, { x: 4, y: 4, count: 1 },
                { x: 0, y: 3, count: 1 }, { x: 1, y: 3, count: 1 }, { x: 2, y: 3, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 5, y: 3, count: 1 },
                { x: 0, y: 2, count: 1 }, { x: 1, y: 2, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 3, y: 2, count: 1 },
                { x: 0, y: 1, count: 1 }, { x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 1, count: 1 }],
                karel: { x: 0, y: 7, direction: 1, isSuper: false, beeperCount: 99 }
            },
        ],
    },
    {
        name: "Beeper Spiral - TO DO: USING THE LOOP INDEX",
        explanation: ``,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
                beepers: [],
                solutions: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 1, count: 1 },
                { x: 6, y: 2, count: 1 }, { x: 6, y: 3, count: 1 }, { x: 6, y: 4, count: 1 }, { x: 6, y: 5, count: 1 }, { x: 6, y: 6, count: 1 },
                { x: 1, y: 1, count: 1 }, { x: 2, y: 6, count: 1 }, { x: 3, y: 6, count: 1 }, { x: 4, y: 6, count: 1 }, { x: 5, y: 6, count: 1 },
                { x: 2, y: 5, count: 1 }, { x: 2, y: 4, count: 1 }, { x: 2, y: 3, count: 1 }],
                karel: { x: 0, y: 1, direction: 4, isSuper: false, beeperCount: 99 }
            },
        ],
    },
];

export default levels;
import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Corner - Seeing If",
        explanation: `<b>If-Statements</b><br>
        wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der {}-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist.<br><br>
        
        <b>Mehrere Welten</b><br>
        Wie du siehst gibt es in diesem Level zwei Pfeilis, jeweils mit ihrem eigenen Spielfeld. In diesem Fall wird dein Code erst für die eine Welt ausgeführt und direkt im Anschluss wird derselbe Code nochmal von vorne für die andere Welt ausgeführt. Die beiden Welten beeinflussen sich gegenseitig also in keiner Form, die komplette Code-Ausführung wird auf Anfang zurückgesetzt, bevor die zweite Welt startet.<br><br>`,
        code: `move();
pickBeeper();
if(frontIsBlocked()) {
    turnLeft();
}
move();
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsBlocked"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 4, 0, 0, 0],
                    [0, 0, 0, 2, 6, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [{ x: 4, y: 0, count: 1 }],
                karel: { x: 3, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
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
        ],
    },
    {
        name: "Corner - Using If",
        explanation: `Versuche nun selbst ein if-Statement zu schreiben.<br><br>

        <b>Aufbau eines If-Statements</b><br>
        if(meineBedingung()){<br>
        code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
        }<br>`,
        code: `move();
pickBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsBlocked"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 4, 0, 0, 0],
                    [0, 0, 0, 2, 6, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [{ x: 4, y: 0, count: 1 }],
                karel: { x: 3, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
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
        ],
    },
    {
        name: "Clean up - Different Conditions, Using If",
        explanation: `Es kann ganz verschiedene Bedingungen geben, die wir abfragen können. Mit beeperIsPresent() können wir abfragen, ob Pfeili sich auf einem Beeper befindet. Es wird genauso in die runden Klammern nach dem if() eingesetzt, wie frontIsBlocked()`,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 3, y: 1, count: 1 }],
                solutions: [],
                karel: { x: 2, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [],
                solutions: [],
                karel: { x: 2, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Walk Across - If and Loops",
        explanation: `Häufig benutzt man if-Statements in Schleifen, da sich die Umstände jeden Schleifen- durchlauf ändern können und man so flexibel damit umgehen kann.`,
        code: `for (let i = 0; i < 7; i++) {
    move();
    //hier ein if-Statement einfügen...
}`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 },
                { x: 3, y: 1, count: 1 },
                { x: 5, y: 1, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 2, y: 1, count: 1 },
                { x: 4, y: 1, count: 1 },
                { x: 6, y: 1, count: 1 },],
                solutions: [],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Corner - Seeing If/Else",
        explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.<br><br>
        
        Drücke auf "Run Code" und sieh was passiert.`,
        code: `move();
pickBeeper();
if(rightIsBlocked()) {
    turnLeft();
}
else{
    turnRight();
}
move();
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "rightIsBlocked"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 4, 0, 0, 0],
                    [0, 0, 0, 2, 6, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [{ x: 4, y: 0, count: 1 }],
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
        name: "Clean up - Using If/Else",
        explanation: `Versuche nun selbst ein if-else-Statement zu schreiben.<br><br>
        
        <i>(In diesem Level startet Pfeili schon mit einem Beeper im Gepäck)</i><br><br>
        
        <b>Das Ziel</b><br>
        Jedes Level ist ein Puzzle. Um es zu lösen, musst du Anweisungen in das Textfeld schreiben und diese danach ausführen. Dabei müssen zwei Bedingungen erfüllt werden:<br> 
        1. Alle Beeper außerhalb von Zielzonen (Die roten Rauten) müssen aufgesammelt werden.<br>
        2. In allen markierten Zielzonen müssen Beeper abgelegt werden (diese erscheinen dann als grüne Rauten).<br><br>`,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 3, y: 1, count: 1 }],
                solutions: [],
                karel: { x: 2, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [],
                solutions: [{ x: 3, y: 1, count: 1 }],
                karel: { x: 2, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Walk Across - If-Else and Loops",
        explanation: `Auch if-else-Statments kann man gut innerhalb vonn Schleifen nutzen.`,
        code: `for (let i = 0; i < 6; i++) {
    move();
    //hier ein if-else-Statement einfügen...
}`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 },
                { x: 3, y: 1, count: 1 },
                { x: 5, y: 1, count: 1 }],
                solutions: [{ x: 2, y: 1, count: 1 },
                { x: 4, y: 1, count: 1 },
                { x: 6, y: 1, count: 1 },],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 2, y: 1, count: 1 },
                { x: 4, y: 1, count: 1 },
                { x: 6, y: 1, count: 1 },],
                solutions: [{ x: 1, y: 1, count: 1 },
                { x: 3, y: 1, count: 1 },
                { x: 5, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
];

export default levels;
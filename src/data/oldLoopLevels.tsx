import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Walk Across - Seeing Loops",
        explanation: `Manchmal muss man einen Befehl mehrfach hintereinander ausführen. Programmier*innen hassen es allerdings, sich zu wiederholen. Also nutzen sie die sogenannten Schleifen oder auch Loops, um das Problem zu lösen. Drücke auf "Run Code" und sieh was passiert.<br></br>
        
        <i>(Ab dieser Lektion ist die Funktion "turnRight" direkt verfügbar, und muss nicht mehr manuell definiert werden.)</i><br><br>`,
        code: `move();
pickBeeper();
for (let i = 0; i < 5; i++) {
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
        name: "Walk Across - Modifying Loops",
        explanation: `Kannst du die Schleife so anpassen, dass Pfeili zur anderen Seite des Levels läuft? Wenn du dir nicht sicher bist, dann drückenochmal auf "Run Code" und sieh, ob dir ein Zusammenhang zwischen dem Code und Pfeilis Bewegung auffällt.<br><br>
        
        <b>Ich verstehe nur Bahnhof.</b><br>
        Es ist völlig normal, wenn du an dieser Stelle noch nicht verstehst, was die ganzen Einzelteile in der Schleife bedeuten. Probiere einfach erstmal etwas herum. Schleifen werden später noch in mehr Tiefe erklärt.<br><br>`,
        code: `move();
pickBeeper();
for (let i = 0; i < 5; i++) {
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
        name: "Walk Across - Writing your own Loops",
        explanation: `Innerhalb der {}-Klammern in der Schleife, kann man auch mehrere Befehle schreiben, die allesamt in jedem Durchlauf der Schleife ausgeführt werden.`,
        code: `for (let i = 0; i < 5; i++) {
    pickBeeper();
    move();
}`,
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
        name: "Walk Across - Off-by-one Loops",
        explanation: `Manchmal wird es etwas knifflig, wenn man im ersten oder letzten Durchlauf der Schleife an Sonderfälle denken muss. Alle Befehle die innerhalb der Schleife stehen, werden immer zusammen ausgeführt. In diesem Beispiel wird immer ein Beeper aufgehoben und sich danach immer bewegt. Manchmal möchte man aber auch einen Beeper aufheben, ohne sich danach zu bewegen. Du kannst natürlich auch vor und nach einer Schleife Code schreiben, der dann nicht mehrfach sondern nur einmal ausgeführt wird, respektive bevor die Schleife startet und nachdem sie komplett durchgelaufen ist. (Vielleicht lohnt es sich, deinen Code aus dem vorherigen Level kopieren, um darauf aufzubauen.)`,
        code: `for (let i = 0; i < 5; i++) {
    pickBeeper();
    move();
}`,
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
];

export default levels;
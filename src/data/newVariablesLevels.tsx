import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Lanes - Functions with Parametres",
        explanation: `Die Runden Klammern in hinter den Funktionen haben tatsächlich einen Zweck. Bei einigen Befehlen kann man Werte, z.B. Zahlen, in die Runden Klammern schreiben, die dann von der Funktion verwendet werden. In diesem Beispiel siehst du "moveAmount(2)". Statt "2" kannst du eine beliebige Zahl einsetzen. Pfeili wird sich entsprechend viele Schritte bewegen.<br><br>
        
        <b>Befehle mit Parameter</b><br>
        nameDesBefehls(meinParameter);<br><br>

        Den Übergebenen Wert nennt man auch Parameter. Je nach Befehl wird "meinParameter" durch eine Zahl, ein Wort oder sonst einen Datentyp ersetzt.<br><br>`,
        code: `moveAmount(2);`,
        commands: ["moveAmount", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper",],
        worlds: [
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 6, y: 0, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Lanes - Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem Zweck können wir sogenannte Variablen nutzen. Variablen sind zunächst wie ein leerer Container, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Unter dem Namen können wir dann immer auf den Inhalt zugreifen.<br><br>
        
        <b>Auf die Reihenfolge kommt es an!</b><br>
        Um Variablen zu nutzen sind drei Schritte Notwendig, die eine bestimmte Reihenfolge einhalten müssen:<br><br>

        <b>1. Deklaration</b><br>
        var meineVariable;<br><br>

        hier wird nur ein leerer Container eröffnet und mit einem beliebigen Namen versehen (in diesem Fall "meineVaraiable").<br><br>

        <b>2. Zuweisung eines Wertes</b><br>
        meineVaraiable = 2;<br><br>

        hier wird der Container mit Inhalt gefüllt, in diesem Fall mit der "2". Bevor man einen Container mit Inhalt füllen kann, muss der Container überhaupt erst existieren, also kann dieser Schritt erst nach der Deklaration stattfinden.<br><br>

        <b>Abruf des Wertes</b><br>
        moveAmount(meineVariable);<br><br>

        hier wird der Inhalt des Containers abgerufen, der Name "meineVariable" ist nur noch als Platzhalter für den Inhalt im Container anzusehen (in diesem Fall "2"). Bevor man den Inhalt abrufen kann, muss es überhaupt einen Inhalt geben. Also kann dieser Schritt erst stattfinden, nachdem der Variable ein Wert zugewiesen wurde.<br><br>`,
        code: `var distance;
distance = 2;
moveAmount(distance);`,
        commands: ["moveAmount", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper",],
        worlds: [
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 6, y: 0, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Lanes - Variables",
        explanation: `Können auch neue Werte zugewiesen werden, danach gilt dann der neue Wert<br><br> 
        
        Zuweisung kann an beliebiger Stelle geschehen, wie zB ein move Command<br><br>
        
       `,
        code: `var distance;
if(isWorld1()){
    distance = 3;
}
else if(isWorld2()){
    distance = 2;
}
moveAmount(distance);`,
        commands: ["moveAmount", "isWorld1", "isWorld2", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear",],
        worlds: [
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 6, y: 0, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 5, y: 0, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Lanes - Variables",
        explanation: ``,
        code: `var distance;
if(isWorld1()) distance = 5;
else distance = 4;

jump(distance);
pickBeeper();
turnAround();
jump(distance);
putBeeper();

turnLeft();
move();
turnLeft();

jump(distance);
pickBeeper();
turnAround();
jump(distance);
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear", "moveAmount"],
        worlds: [
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 6, y: 0, count: 1 }, { x: 6, y: 1, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 },],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 5, y: 0, count: 1 }, { x: 5, y: 1, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 },],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Lanes - Variables",
        explanation: `Deklaration und Zuweisung kann in einem Schritt passieren<br><br>
        
        Warum Variablen?<br>
        1. Um Code flexibler zu machen, nur an einer Stelle neuen Wert für Variable zuweisen, alles andere Funktioniert direkt<br>
        2. Um uns Dinge zu merken<br><br>`,
        code: `//////////////////////////////////
//INFO
var distance;
distance = 2;
jump(distance);
jump(distance + 1);

//////////////////////////////////
//INFO
var distance;
var farDistance;
distance = 2;
farDistance = 3;
jump(distance);
jump(farDistance);

////////////////////////////////////
//TASK 3
var distance;
if(isWorld1()) distance = 5;
else distance = 4;

jump(distance);
pickBeeper();
turnAround();
jump(distance);
putBeeper();
turnLeft();
move();
turnLeft();

jump(distance);
pickBeeper();
turnAround();
jump(distance);
putBeeper();
turnLeft();
move();
turnLeft();

jump(distance + 1);
pickBeeper();
turnAround();
jump(distance + 1);
putBeeper();
turnLeft();
move();
turnLeft();

//////////////////////////////////
//INFO
var distance;
var someOtherName;
distance = 3;
someOtherName = 2;
jump(distance);
jump(someOtherName);`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear", "moveAmount", "isWorld1", "isWorld2"],
        worlds: [
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 6, y: 0, count: 1 }, { x: 6, y: 1, count: 1 }, { x: 7, y: 2, count: 1 }],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }, { x: 0, y: 2, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 5, y: 0, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 2, count: 1 }],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }, { x: 0, y: 2, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Beeper Spiral - Variables and Functions",
        explanation: `Hier werden Variablen und Funktionen verknüpft. In der Definition der Funktion siehst du "stepAmount" in den runden Klammern. Dies ist eine Variable, die später beim Aufruf der Funktion zugewiesen wird. Innerhalb der Funktion greifen wir auf die Variable "stepAmount" ganz normal zu. In der Zeile "walkAmount(5)" wird der Variable dann der Wert "5" zugewiesen.<br><br>
        
        Versuche es nun selbst. Du kannst die Funktion so häufig du willst mit verschiedenen Werten aufrufen, sobald sie einmal erstellt wurde.<br><br>
        
        function meinFunktionsName(meinVariablenName) {<br>
            ...<br>
        }<br>
        meinFunktionsName(5);<br>
        meinFunktionsName(10);<br><br>
        
        Using functions and varaiables in Loops:<br>
        var range = 5;<br>
        for (let i = 0; i < 5; i++) {<br>
            beeperLane(range);<br>
            range = range - 1;<br>
        }<br><br>
        
        Using the Loop Index`,
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
                beepers: [],
                solutions: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 1, count: 1 },
                { x: 6, y: 2, count: 1 }, { x: 6, y: 3, count: 1 }, { x: 6, y: 4, count: 1 }, { x: 6, y: 5, count: 1 }, { x: 6, y: 6, count: 1 },
                { x: 1, y: 1, count: 1 }, { x: 2, y: 6, count: 1 }, { x: 3, y: 6, count: 1 }, { x: 4, y: 6, count: 1 }, { x: 5, y: 6, count: 1 },
                { x: 2, y: 5, count: 1 }, { x: 2, y: 4, count: 1 }, { x: 2, y: 3, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 4, y: 4, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: false, beeperCount: 99 }
            },
        ],
    },
    {
        name: "Teleport Across - Memorising with Variables",
        explanation: ``,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [15, 15, 15, 15, 15, 15, 15, 15],
                    [15, 15, 15, 15, 15, 15, 15, 15],
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
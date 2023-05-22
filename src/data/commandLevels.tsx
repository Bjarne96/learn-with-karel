import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Move the Beeper LT - Seeing Commands",
        explanation: `Willkommen beim Learnlab! Rechts siehst du ein Spielfeld mit einem blauen Pfeil darin, das ist Pfeili. Wenn du auf "Run Code" klickst, dann wird Pfeili die Befehle weiter unten ausführen. Dein Ziel ist es die roten Beeper aufzusammeln und in den markierten Zielzonen wieder abzulegen. Drücke auf "Run Code" und sieh was passiert.`,
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
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
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
        name: "Move the Beeper LT - Using commands",
        explanation: `Nun musst du selbst Befehle einfügen, um den roten Beeper aufzuheben und ihn in der Zielzone abzulegen. Links siehst du die verfügbaren Befehle. Du kannst diese entweder per Hand weiter unten in dieses Textfeld schreiben, oder sie links in der Liste anklicken, um sie direkt einzufügen.`,
        code: `//Nun musst du selbst Befehle einfügen, um den 
//roten Beeper aufzuheben und ihn in der Zielzone
//abzulegen. Links siehst du die verfügbaren Befehle. 
//Du kannst diese entweder per Hand weiter unten in
//dieses Textfeld schreiben, oder sie links in der
//Liste anklicken, um sie direkt einzufügen.
        
move();
pickBeeper();
//hier drunter weiteren Code einfügen...`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
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
        name: "Move the Beeper RT1 - Combining commands",
        explanation: `Manchmal müssen wir Dinge tun für die es noch keinen Befehl gibt. Hier muss sich Pfeili nach rechts drehen, aber es gibt nur einen Befehl zur Linksdrehung. Kannst du mit den vorhandenen Befehlen trotzdem eine Rechtsdrehung erreichen und das Level abschließen? hier drunter Code einfügen...`,
        code: `//Manchmal müssen wir Dinge tun
//für die es noch keinen Befehl gibt. Hier muss 
//sich Pfeili nach rechts drehen, aber es gibt 
//nur einen Befehl zur Linksdrehung. Kannst du
//mit den vorhandenen Befehlen trotzdem eine 
//Rechtsdrehung erreichen und das Level abschließen? 
//hier drunter Code einfügen...`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
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
        name: "Move the Beeper RT1 - Seeing Functions",
        explanation: `Man kann also eine Rechtsdrehung aus 3 Linksdrehungen erzeugen. Wenn du die Rechtsdrehung auf diese Weise häufiger nutzt, dann wird es allerdings unübersichtlich im Code. Um das zu vermeiden, kann man sogenannte "Funktionen" schreiben. Diese bündeln eine beliebige  Abfolge bereits vorhandener Befehle unter einem neuen Namen zusammen.`,
        code: `//Man kann also eine Rechtsdrehung aus 
//3 Linksdrehungen erzeugen. Wenn du die 
//Rechtsdrehung auf diese Weise häufiger 
//nutzt, dann wird es allerdings 
//unübersichtlich im Code. Um das zu 
//vermeiden, kann man sogenannte "Funktionen" 
//schreiben. Diese bündeln eine beliebige  
//Abfolge bereits vorhandener Befehle 
//unter einem neuen Namen zusammen. 
        
//Hier wird der neue Befehl nur definiert und 
//von sich aus passiert noch nichts. Der Name 
//"turnRight" ist übrigens beliebig. 
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

move();
pickBeeper();
turnRight(); // <- Hier wird der vorher definierte Befehl ausgeführt.
move();
putBeeper();`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
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
        name: "Move the Beeper RT2 - Using functions",
        explanation: `Selbst definiert Funktionen werden genauso aufgerufen wie die bereits vorhandenen Befehle. Genau genommen sind die bereits vorhandenen Befehle auch nur Funktionen, die jemand anders für uns geschrieben hat. `,
        code: `//Selbst definiert Funktionen werden genauso 
//aufgerufen wie die bereits vorhandenen Befehle. 
//Genau genommen sind die bereits vorhandenen 
//Befehle auch nur Funktionen, die jemand anders 
//für uns geschrieben hat. 

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

turnRight();
move();
pickBeeper();`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
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
        name: "Move the Beeper RT2 - Defining functions 1",
        explanation: `Versuche nun die Funktion "turnRight" selbst zu definieren. 
Zur Erinnerung: so ist eine Funktion aufgebaut: 
function deinFunktionsName(){
dein Code für die Funktion...
}`,
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
                beepers: [{ x: 4, y: 3, count: 1 }],
                solutions: [{ x: 4, y: 4, count: 1 }],
                karel: { x: 3, y: 3, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Obtain Artifact - Defining functions 2",
        explanation: `Versuche die Funktion zu vervollständigen.`,
        code: `//Versuche die Funktion zu vervollständigen.
        
function walkHalfCircle(){
    move();
    //Hier weiteren Code einfügen...
}
          
walkHalfCircle();
pickBeeper();
walkHalfCircle();
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
        name: "Walk Across - Seeing Loops",
        explanation: `Manchmal muss man einen Befehl mehrfach hintereinander ausführen. Programmier*innen hassen es allerdings, sich zu wiederholen. Also nutzen sie die sogenannten Schleifen oder auch Loops, um das Problem zu lösen. Drücke auf "Run Code" und sieh was passiert.`,
        code: `//Manchmal muss man einen Befehl mehrfach
//hintereinander ausführen. Programmier*innen
//hassen es allerdings, sich zu wiederholen.
//Also nutzen sie die sogenannten Schleifen
//oder auch Loops, um das Problem zu lösen. 
//Drücke auf "Run Code" und sieh was passiert.

move();
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
        explanation: `Kannst du die Schleife so anpassen, dass Pfeili zur anderen Seite des Levels läuft? Wenn du dir nicht sicher bist, dann drückenochmal auf "Run Code" und sieh, ob dir ein Zusammenhang zwischen dem Code und Pfeilis Bewegung auffällt.`,
        code: `//Kannst du die Schleife so anpassen, dass 
//Pfeili zur anderen Seite des Levels läuft?
//Wenn du dir nicht sicher bist, dann drücke
//nochmal auf "Run Code" und sieh, ob dir
//ein Zusammenhang zwischen dem Code und
//Pfeilis Bewegung auffällt.

move();
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
        code: `//Innerhalb der {}-Klammern in der Schleife, kann man
//auch mehrere Befehle schreiben, die allesamt in 
//jedem Durchlauf der Schleife ausgeführt werden.

for (let i = 0; i < 5; i++) {
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
        explanation: `Manchmal wird es etwas knifflig, wenn man im ersten oder letzten Durchlauf der Schleife an Sonderfälle denken muss.`,
        code: `//Manchmal wird es etwas knifflig, wenn man
//im ersten oder letzten Durchlauf der Schleife
//an Sonderfälle denken muss.

for (let i = 0; i < 5; i++) {
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
    {
        name: "Corner - Seeing If",
        explanation: `Häufig wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der {}-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist.`,
        code: `//Häufig wollen wir unseren Code so schreiben,
//dass er flexibel auf unterschiedliche Situationen
//reagieren kann. Dafür nutzen wir sogenannte
//"Bedingungen" oder "If-Statements". Diese
//prüfen, ob eine bestimmte Bedingung erfüllt ist
//und führen dann den Code innerhalb der {}-Klammern
//nach dem "if" nur aus, wenn die Bedingung erfüllt ist.

move();
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
        explanation: `Versuche nun selbst ein if-Statement zu schreiben. 
Zur Erinnerung, so ist eine if-Statement aufgebaut:
if(meineBedingung())
{
   code der ausgeführt wird, wenn die Bedingung wahr ist.
}`,
        code: `//Versuche nun selbst ein if-Statement
//zu schreiben.
//Zur Erinnerung, so ist eine if-Statement aufgebaut:
//if(meineBedingung())
//{
//   code der ausgeführt wird, wenn die Bedingung wahr ist.
//}
        
move();
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
        name: "Clean up 1 - Different Conditions, Using If",
        explanation: `Es kann ganz verschiedene Bedingungen geben, die wir abfragen können. Mit beepersPresent() können wir abfragen, ob Pfeili sich auf einem Beeper befindet. Es wird genauso in die runden Klammern nach dem if() eingesetzt, wie frontIsBlocked()`,
        code: `//Es kann ganz verschiedene Bedingungen geben,
//die wir abfragen können. Mit beepersPresent() können
//wir abfragen, ob Pfeili sich auf einem Beeper befindet.
//Es wird genauso in die runden Klammern nach dem if()
//eingesetzt, wie frontIsBlocked()`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
                beepers: [{ x: 4, y: 1, count: 1 }],
                solutions: [],
                karel: { x: 2, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Walk Across - If and Loops",
        explanation: `Häufig benutzt man if-Statements in Schleifen, da sich die Umstände jeden Schleifen- durchlauf ändern können und man so flexibel damit umgehen kann.`,
        code: `//Häufig benutzt man if-Statements in
//Schleifen, da sich die Umstände jeden Schleifen-
//durchlauf ändern können und man so flexibel
//damit umgehen kann.

for (let i = 0; i < 7; i++) {
    move();
    //hier ein if-Statement einfügen...
}`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
        explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.
        
Drücke auf "Run Code" und sieh was passiert.`,
        code: `//Manchmal soll ein alternativer Code nur dann ausgeführt werden,
//wenn die Bedingung im If-Statement nicht erfüllt ist.
//Dafür gibt es das "Else" nach dem "if". Der Code
//innerhalb der {}-Klammern nach dem "Else" wird
//nur ausgeführt, wenn die Bedingung im "If" nicht

//Drücke auf "Run Code" und sieh was passiert.

move();
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
        explanation: `Versuche nun selbst ein if-else-Statement zu schreiben.`,
        code: `//Versuche nun selbst ein if-else-Statement
//zu schreiben.`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
        explanation: `Auch if-else-Statments kann man gut innerhalb vonn schleifen nutzen.`,
        code: `//Auch if-else-Statments kann man gut innerhalb von schleifen nutzen.

move();
for (let i = 0; i < 7; i++) {
    move();
    //hier ein if-else-Statement einfügen...
}`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
    {
        name: "Walk Across - Seeing While-Loops",
        explanation: `Es gibt neben for-loops auch while-loops. Auch diese sind Schleifen. Allerdings wird bei diesen keine feste Anzahl von Durchläufen festgelegt. Stattdessen wird vor jedem Durchlauf eine Bedingung geprüft. Ist die Bedingung erfüllt, wird der Code in den {}-Klammern ausgeführt. Dies wird so lange wiederholt, bis die Bedingung nicht mehr wahr ist.`,
        code: `//Es gibt neben for-loops auch while-loops.
//Auch diese sind Schleifen. Allerdings wird
//bei diesen keine feste Anzahl von Durchläufen
//festgelegt. Stattdessen wird vor jedem
//Durchlauf eine Bedingung geprüft. Ist die
//Bedingung erfüllt, wird der Code in den 
//{}-Klammern ausgeführt. Dies wird so lange 
//wiederholt, bis die Bedingung nicht mehr 
//wahr ist.
//Drücke auf "Run Code" und sieh was passiert.

while(frontIsClear())
{
    move();
}
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 4],
                    [0, 0, 0, 0, 0, 0, 0, 4],
                    [2, 2, 2, 2, 2, 2, 2, 6],
                ],
                beepers: [],
                solutions: [{ x: 7, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [8, 8, 8, 8, 8, 8, 9, 8],
                    [0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0],
                ],
                beepers: [],
                solutions: [{ x: 5, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Walk Across - Using While-Loops",
        explanation: ``,
        code: `//Versuche jetzt selbst eine while-Schleife
//zu shreiben. Zur Erinnerung, so ist eine
//while-Schleife aufgebaut:
//while(meineBedingung()){
//  code der ausgeführt wird, 
//  solange die Bedingung wahr ist.    
//}`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 4],
                    [0, 0, 0, 0, 0, 0, 0, 4],
                    [2, 2, 2, 2, 2, 2, 2, 6],
                ],
                beepers: [],
                solutions: [{ x: 7, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [8, 8, 8, 8, 8, 8, 9, 8],
                    [0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0],
                ],
                beepers: [],
                solutions: [{ x: 5, y: 1, count: 1 }],
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
istOberesLevel = beepersPresent(); //<- Die Variable wird entweder mit dem Wert "true" oder "false" gefüllt.
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
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
while(noBeepersPresent()){
    move();
    distance = distance + 1;
}
pickBeeper();
for (let i = 0; i < distance; i++) { //<- Hier wird die Variable genutzt, um die Länge der Schleife festzulegen.
    move();
}
putBeeper();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "noBeepersPresent"],
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
        name: "Walk Across - Seeing Variables and Functions",
        explanation: ``,
        code: `//Hier werden Variablen und Funktionen verknüpft.
//In der Definition der Funktion siehst du
//"stepAmount" in den runden Klammern. Dies ist
//eine Variable, die später beim Aufruf der Funktion
//zugewiesen wird. Innerhalb der Funktion greifen
//wir auf die Variable "stepAmount" ganz normal zu.
//In der Zeile "walkAmount(5)" wird der Variable
//dann der Wert "5" zugewiesen.

function walkAmount(stepAmount) {
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
        explanation: ``,
        code: `//Versuche es nun selbst. Du kannst die Funktion
// so häufig du willst mit verschiedenen Werten 
//aufrufen, sobald sie einmal erstellt wurde.

//function meinFunktionsName(meinVariablenName) {
//    ...
//}
//meinFunktionsName(5);
//meinFunktionsName(10);`,
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
        name: "Beeper Lines - Variables and Functions",
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
if(beepersPresent()){
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
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "beepersPresent"],
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
    {
        name: "Maze",
        explanation: ``,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
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
        ]
    }
];

export default levels;
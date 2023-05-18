// import type { ILevel } from "../types/karel";
export const levels: Array<any> = [
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
        explanation: `Manchmal soll etwas nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.
        
Drücke auf "Run Code" und sieh was passiert.`,
        code: `//Manchmal soll etwas nur dann ausgeführt werden,
//wenn die Bedingung im If-Statement nicht erfüllt ist.
//Dafür gibt es das "Else" nach dem "if". Der Code
//innerhalb der {}-Klammern nach dem "Else" wird
//nur ausgeführt, wenn die Bedingung im "If" nicht
//erfüllt ist.
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
        explanation: `Auch if-else-Statments kann man gut innerhalb schon schleifen nutzen.`,
        code: `//Auch if-else-Statments kann man gut innerhalb schon schleifen nutzen.

for (let i = 0; i < 7; i++) {
    move();
    //hier ein if-else-Statement einfügen...
}`,
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
                solutions: [{ x: 1, y: 1, count: 1 },
                { x: 3, y: 1, count: 1 },
                { x: 5, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
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
        name: "Walk Across - Seeing While-Loops",
        explanation: ``,
        code: `while(frontIsClear())
{
    move();
}
putBeeper();`,
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 4],
                    [0, 0, 0, 0, 0, 0, 0, 4],
                    [2, 2, 2, 2, 2, 2, 2, 6],
                ],
                beepers: [],
                solutions: [{ x: 7, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
            {
                walls: [
                    [8, 8, 8, 8, 8, 8, 9, 8],
                    [0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0],
                ],
                beepers: [],
                solutions: [{ x: 5, y: 1, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Hang the Lampions - While Loop",
        explanation: ``,
        code: ``,
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
        name: "T-Crossing - Variables",
        explanation: ``,
        code: `
        `,
        worlds: [
            {
                walls: [
                    [2, 2, 2, 2, 6, 12, 0],
                    [2, 2, 2, 2, 2, 4, 0],
                    [0, 0, 0, 0, 4, 6, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                beepers: [{ x: 1, y: 1, count: 1 }],
                solutions: [{ x: 5, y: 0, count: 1 }, { x: 1, y: 1, count: 1 }],
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
        name: "Midpoint - Variables",
        explanation: ``,
        code: ``,
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
        name: "Maze",
        explanation: ``,
        code: ``,
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
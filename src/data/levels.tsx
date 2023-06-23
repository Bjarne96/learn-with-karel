import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Move the Beeper LT - Seeing Commands",
        explanation: `<b>Willkommen beim Learnlab!</b><br>
        Dies ist ein Spiel, mit dem Du Programmieren lernen kannst. Die verwendete Programmiersprache trägt den Namen JavaScript, aber die erlernten Konzepte finden sich auch in allen anderen Programmiersprachen wieder.<br><br>
        
        <b>Der Code-Editor</b><br>
        In der Mitte siehst du ein großes Textfeld, in das Du Anweisungen schreiben kannst.<br><br>
        
        <b>Das Spielfeld</b><br>
        Rechts davon ist ein Spielfeld mit einem blauen Pfeil darin, das ist Pfeili. Wenn du auf den Play-Knopf unter dem Spielfeld klickst, dann wird Pfeili die Anweisungen im Textfeld ausführen.<br><br>
        
        <b>Das Ziel</b><br>
        Jedes Level ist ein Puzzle. Um es zu lösen, musst du Anweisungen in das Textfeld schreiben und diese danach ausführen. Dabei müssen zwei Bedingungen erfüllt werden:<br> 
        1. Alle Beeper außerhalb von Zielzonen (Die roten Rauten) müssen aufgesammelt werden.<br>
        2. In allen markierten Zielzonen müssen Beeper abgelegt werden (diese erscheinen dann als grüne Rauten).<br><br>
        
        <b>Los geht's</b><br>
        In diesem Fall wurden die korrekten Anweisungen bereits eingefügt. Drücke auf den Play-Knopf und sieh was passiert.`,
        code: `move();
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
        explanation: `Nun musst du selbst Befehle einfügen, um den roten Beeper aufzuheben und ihn in der Zielzone abzulegen. Links siehst du die verfügbaren Befehle. Du kannst diese entweder per Hand weiter unten in dieses Textfeld schreiben, oder sie links in der Liste anklicken, um sie direkt einzufügen.<br><br>

        <b>Die Befehle</b><br>
        <em>move()</em> Pfeili bewegt sich ein Feld vorwärts
        in aktueller Blickrichtung.<br>
        <em>turnLeft()</em> Pfeili dreht sich 90° gegen den
        Uhrzeigersinn.<br>
        <em>putBeeper()</em> Pfeili legt einen Beeper auf dem Feld ab, auf dem er sich momentan befindet (sofern Pfeili noch genügend Beeper im Rucksack hat).<br>
        <em>pickBeeper()</em> Pfeili hebt einen Beeper  vom momentanen Feld auf (sofern sich dort einer befindet).<br><br>

        <b>Fehlschlag</b><br>
        <em>Ungültiger Befehl:</em> Versuchst du einen Befehl auszuführen, der in dieser Situation nicht ausführbar ist (zum Beispiel wenn du versuchst, durch eine Wand zu laufen), wird die Ausführung des Programms abbrechen. Dann setzt du das Level zurück auf Anfang und versuchst es erneut.<br>
        <em>Ziel nicht erreicht:</em> Wenn alle Befehle ausgeführt worden sind und das Ziel des Levels noch nicht erreicht wurde, dann kannst du das Level genauso auf Anfang zurücksetzen.<br><br>


        <b>Die linke Menüleiste</b><br>
        Ganz links am Rand ist eine vertikale Leiste mit drei Menüpunkten:<br>
        1. <em>Der Erklärungstext.</em> Hier befindest Du dich gerade.<br>
        2. <em>Die verfügbaren Befehle.</em> Dies sind die grundlegenden Befehle, welche für Pfeili zur Verfügung stehen. Diese können zwischen den Leveln variieren.<br>
        3. <em>Der Command-Log.</em> Hier werden die von Pfeili ausgeführten Befehle in einer Liste mitgeschrieben. Wenn es ein Fehler mit dem Programm gibt, dann wird dieser hier erscheinen.<br><br>
        
        <b>Die Knöpfe unter dem Spielfeld</b><br>
        1. <em>Wiedergabegeschwindigkeiten</em>: Es gibt insgesamt vier Wiedergabegeschwindigkeiten (wenn man den Pause-Knopf mitrechnet).<br>
        2. <em>Nächster Schritt</em>: Rechts vom Pause-Knopf gibt einen Knopf, mit dem immer nur der jeweils nächste Befehl ausgeführt wird. Drücke dafür erst auf den Pause-Knopf und dann so oft du willst auf den Nächster-Schritt-Knopf.<br>
        3. <em>Zurücksetzen</em>: Der Knopf mit dem kreisförmigen Pfeil setzt das Level in den Ausgangszustand zurück.
        4. <em>Fortschrittsanzeige</em>: Das Symbol ganz rechts in der Reihe von Knöpfen kann man nicht drücken. Es zeigt Dir nur an, ob du das momentan ausgewählte Level schon abgeschlossen hast.<br><br>
        
        <b>Die Knöpfe über dem Spielfeld</b><br>
        Über dem Spielfeld wird der Name des Aktuellen Levels angezeigt. Die Kannst die Pfeile links und rechts des Namens benutzen, um die vorherigen oder nachfolgenden Level auszuwählen. Du kannst auch direkt auf den Namen des Levels klicken, um eine Liste mit allen Leveln anzuzeigen.<br><br>`,
        code: `move();
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
        explanation: `Manchmal müssen wir Dinge tun für die es noch keinen Befehl gibt. Hier muss sich Pfeili nach rechts drehen, aber es gibt nur einen Befehl zur Linksdrehung. Kannst du mit den vorhandenen Befehlen trotzdem eine Rechtsdrehung erreichen und das Level abschließen?`,
        code: ``,
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
        explanation: `Man kann also eine Rechtsdrehung aus 3 Linksdrehungen erzeugen. Wenn du die Rechtsdrehung auf diese Weise häufiger nutzt, dann wird es allerdings unübersichtlich im Code. Um das zu vermeiden, kann man sogenannte "Funktionen" schreiben. Diese bündeln eine beliebige  Abfolge bereits vorhandener Befehle unter einem neuen Namen zusammen.<br><br>
        
        <b>Anmerkungen im Code</b><br>
        Manchmal möchte man Notizen direkt im Code schreiben, die aber bei der Ausführung ignoriert werden sollen. In diesem Fall schreibt man // und sämtlicher Code der in der selben Zeile dahinter steht, wird ausgegraut angezeigt und in der Ausführung des Codes ignoriert.<br><br>`,
        code: `//Hier wird der neue Befehl nur definiert und 
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
        code: `function turnRight(){
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
        explanation: `Versuche nun die Funktion "turnRight" selbst zu definieren.<br><br>
        
        <b>Aufbau einer Funktion</b><br>
        function deinFunktionsName(){<br>
        dein Code für die Funktion...<br>
        }<br><br>

        <b>Tasten-Komination für die {}-Klammern</b><br>
        Windows: AltGr + 7 / AltGr + 0<br>
        Mac: Shift + Alt + 8 / Shift + Alt + 9<br><br>`,
        code:
            `turnRight();
move();
pickBeeper();
turnRight();
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
                solutions: [{ x: 4, y: 4, count: 1 }],
                karel: { x: 3, y: 3, direction: 1, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Obtain Artifact - Defining functions 2",
        explanation: `Versuche die Funktion zu vervollständigen.`,
        code: `function walkHalfCircle(){
move();
//Hier weiteren Code einfügen...
}
          
walkHalfCircle();
pickBeeper();
walkHalfCircle();
putBeeper();`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
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
        name: "Clean up 1 - Different Conditions, Using If",
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
        explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.
        
Drücke auf "Run Code" und sieh was passiert.`,
        code: `//Manchmal soll ein alternativer Code nur dann ausgeführt werden,
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
        explanation: `Auch if-else-Statments kann man gut innerhalb vonn schleifen nutzen.`,
        code: `//Auch if-else-Statments kann man gut innerhalb von schleifen nutzen.

for (let i = 0; i < 6; i++) {
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
        name: "Edge - Using While-Loops",
        explanation: `//TO DO: HIER IST NEUE FUKTION VERFÜGBAR
Versuche jetzt selbst eine while-Schleife zu schreiben. Zur Erinnerung, so ist eine while-Schleife aufgebaut:
while(meineBedingung()){
  code der ausgeführt wird, 
  solange die Bedingung wahr ist.    
}`,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "rightIsBlocked"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 0, 0],
                    [0, 0, 0, 0, 0, 4, 0, 0],
                ],
                beepers: [],
                solutions: [{ x: 6, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [2, 2, 2, 0, 0, 0, 0, 0],
                    [0, 0, 4, 0, 0, 0, 0, 0],
                ],
                beepers: [],
                solutions: [{ x: 3, y: 2, count: 1 }],
                karel: { x: 0, y: 1, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Walk Across - Seeing Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem Zweck können wir Variablen nutzen. Variablen sind zunächst wie ein leerer Container oder ein unbeschriebener Notizblock, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Unter dem Namen können wir dann immer auf den Inhalt zugreifen.
        
        "var" ist ein Schlüsselwort, das uns sagt, dass hier eine Variable erstellt wird. "stepAmount" ist der Name der Variable, den wir frei wählen können. "=" ist ein Zuweisungsoperator, der uns sagt, dass der Wert auf der rechten Seite der Variable auf der linken Seite zugewiesen wird.`,
        code: `var stepAmount; //<- leere Variable erstellen
stepAmount = 5; //<- Wert zuweisen ("mit Inhalt füllen")

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
schrittAnzahl = 4; //<-hier wird die Variable neu zugewiesen

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
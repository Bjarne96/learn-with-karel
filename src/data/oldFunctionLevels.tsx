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
];

export default levels;
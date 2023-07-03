import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
    {
        name: "Start - Commands & UI",
        explanation: `<b>Willkommen beim Learnlab!</b><br>
        Dies ist ein Spiel, mit dem Du Programmieren lernen kannst. Die verwendete Programmiersprache trägt den Namen JavaScript, aber die erlernten Konzepte finden sich auch in allen anderen Programmiersprachen wieder.<br><br>
        
        <b>Der Code-Editor</b><br>
        In der Mitte siehst du ein großes Textfeld, in das Du Anweisungen schreiben kannst.<br><br>
        
        <b>Das Spielfeld</b><br>
        Rechts davon ist ein Spielfeld mit einem blauen Pfeil darin, das ist Pfeili. Wenn du auf den Play-Knopf unter dem Spielfeld klickst, dann wird Pfeili die Anweisungen im Textfeld ausführen und sich bewegen und Dinge aufheben oder ablegen.<br><br>
        
        <b>Das Ziel</b><br>
        Die Rauten die du im Spielfeld siehst, heißen Beeper. Deine Aufgabe besteht darin, Beeper an bestimmten Stellen aufzusammeln oder abzulegen:<br> 
        1. Alle roten Beeper müssen aufgesammelt werden. Alle Beeper außerhalb der Zielzonen erscheinen als rot.<br>
        2. In allen Zielzonen (= farblose Rauten) müssen Beeper abgelegt werden. Diese erscheinen dann grün.<br><br>

        <b>Zurücksetzen</b><br>
        Um ein Level auf den Startzustand zurückzusetzen drücke einfach auf den kreisförmigen Pfeil unter dem Spielfeld. Alles kann rückgängig gemacht werden, also probiere einfach drauf los. Es gibt zwei Bedingungen die dazu führen, dass die Ausführung des Codes gestoppt wird und du das level zurücksetzen musst:<br>
        <em>1. Ungültiger Befehl:</em> Du versuchst du einen Befehl auszuführen, der in dieser Situation nicht ausführbar ist (zum Beispiel wenn du versuchst durch eine Wand zu laufen).<br>
        <em>2. Ziel nicht erreicht:</em> Alle Befehle wurden ausgeführt, ohne alle Beeper korrekt zu platzieren.<br><br>
        
        <b>Los geht's</b><br>
        Kopiere die folgenden Befehle in das Textfeld. Drücke dann auf den Play-Knopf und sieh was passiert:<br><br>
        
        move();<br>
        pickBeeper();<br>
        move();<br>
        putBeeper();<br>`,
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
                ],
                beepers: [{ x: 2, y: 2, count: 1 },],
                solutions: [{ x: 3, y: 2, count: 1 },],
                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Start - Commands & UI",
        explanation: `Weiter unten findest du eine vollständige Beschreibung der Benutzeroberfläche. Wenn du fertig gelesen hast, dann versuche das Level zu lösen, indem du Befehle in das Textfeld schreibst und dann auf den Play-Knopf drückst.<br><br>

        <b>Die Befehle</b><br>
        Die zur Verfügung stehenden Befehle können sich in jedem Level ändern. Fast immer solltest du allerdings folgende Befehle zur Verfügung haben:<br>
        <em>move()</em> Pfeili bewegt sich in aktueller Blickrichtung ein Feld vorwärts (sofern keine Wand im Weg ist).<br>
        <em>turnLeft()</em> Pfeili dreht sich 90° gegen den Uhrzeigersinn.<br>
        <em>putBeeper()</em> Pfeili legt einen Beeper auf dem Feld ab, auf dem er sich momentan befindet (sofern Pfeili noch genügend Beeper im Rucksack hat).<br>
        <em>pickBeeper()</em> Pfeili hebt einen Beeper vom Feld auf, auf dem Pfeili momentan steht (sofern sich dort ein Beeper befindet).<br><br>
        
        <b>Erklärungstext & Command-Log</b><br>
        Ganz links am Rand ist eine vertikale Leiste mit drei Menüpunkten:<br>
        1. <em>Der Erklärungstext.</em> Hier befindest Du dich gerade.<br>
        2. <em>Die verfügbaren Befehle.</em> Dies sind die grundlegenden Befehle, welche für Pfeili zur Verfügung stehen. Diese können zwischen den Leveln variieren.<br>
        3. <em>Der Command-Log.</em> Hier werden die von Pfeili ausgeführten Befehle in einer Liste mitgeschrieben. Wenn es ein Fehler mit dem Programm gibt, dann wird dieser hier erscheinen.<br><br>
        
        <b>Geschwindigkeit & Zurücksetzen</b><br>
        Unter dem Spielfeld gibt es eine ganze Reihe von Knöpfen:<br>
        1. <em>Wiedergabegeschwindigkeiten</em>: Es gibt insgesamt vier Wiedergabegeschwindigkeiten. Ein Pfeil, zwei Pfeile, drei Pfeile und Pause.<br>
        2. <em>Nächster Schritt</em>: Rechts vom Pause-Knopf gibt einen Knopf, mit dem immer nur der jeweils nächste Befehl ausgeführt wird. Drücke dafür erst auf den Pause-Knopf und dann so oft du willst auf den Nächster-Schritt-Knopf.<br>
        3. <em>Zurücksetzen</em>: Der Knopf mit dem kreisförmigen Pfeil setzt das Level in den Ausgangszustand zurück.<br>
        4. <em>Fortschrittsanzeige</em>: Das Symbol ganz rechts in der Reihe von Knöpfen kann man nicht drücken. Es zeigt Dir nur an, ob du das momentan ausgewählte Level schon abgeschlossen hast.<br><br>
        
        <b>Level-Selektion</b><br>
        Über dem Spielfeld wird der Name des Aktuellen Levels angezeigt. Die Kannst die Pfeile links und rechts des Level-Namens benutzen, um die vorherigen oder nachfolgenden Level auszuwählen. Du kannst auch direkt auf den Namen des Levels klicken, um eine Liste mit allen Leveln anzuzeigen.<br><br>`,
        code:
            ``,
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
                ],
                beepers: [{ x: 2, y: 2, count: 1 }, { x: 4, y: 2, count: 1 },],
                solutions: [{ x: 3, y: 2, count: 1 }, { x: 5, y: 2, count: 1 },],
                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Start - Functions",
        explanation: `Manchmal müssen wir Dinge tun für die es noch keinen Befehl gibt. Hier muss sich Pfeili nach rechts drehen, aber es gibt nur einen Befehl zur Linksdrehung. Kannst du mit den vorhandenen Befehlen trotzdem eine Rechtsdrehung erreichen und das Level abschließen?<br><br>

        Man kann also eine Rechtsdrehung aus 3 Linksdrehungen erzeugen. Wenn du die Rechtsdrehung auf diese Weise häufiger nutzt, dann wird es allerdings unübersichtlich im Code. Um das zu vermeiden, kann man sogenannte "Funktionen" schreiben. Diese bündeln eine beliebige  Abfolge bereits vorhandener Befehle unter einem neuen Namen zusammen.<br><br>
        
        <b>Anmerkungen im Code</b><br>
        Manchmal möchte man Notizen direkt im Code schreiben, die aber bei der Ausführung ignoriert werden sollen. In diesem Fall schreibt man // und sämtlicher Code der in der selben Zeile dahinter steht, wird ausgegraut angezeigt und in der Ausführung des Codes ignoriert.<br><br>
        
        Selbst definiert Funktionen werden genauso aufgerufen wie die bereits vorhandenen Befehle. Genau genommen sind die bereits vorhandenen Befehle auch nur Funktionen, die jemand anders für uns geschrieben hat.
        Versuche nun die Funktion "turnRight" selbst zu definieren.<br><br>
        
        <b>Aufbau einer Funktion</b><br>
        function deinFunktionsName(){<br>
        dein Code für die Funktion...<br>
        }<br><br>

        <b>Tasten-Komination für die {}-Klammern</b><br>
        Windows: AltGr + 7 / AltGr + 0<br>
        Mac: Shift + Alt + 8 / Shift + Alt + 9<br><br>`,
        code: ``,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper"],
        worlds: [
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 4, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],
                beepers: [{ x: 2, y: 2, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 4, y: 2, count: 1 },],
                solutions: [{ x: 3, y: 2, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 5, y: 2, count: 1 },],
                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Beeper Line - Loops",
        explanation: ``,
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
                beepers: [{ x: 0, y: 2, count: 1 },],
                solutions: [{ x: 7, y: 3, count: 1 },],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Beeper Line - Loops",
        explanation: ``,
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
                { x: 7, y: 3, count: 1 },],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Beeper Line - Loops",
        explanation: `Manchmal muss man einen Befehl mehrfach hintereinander ausführen. Programmier*innen hassen es allerdings, sich zu wiederholen. Also nutzen sie die sogenannten Schleifen oder auch Loops, um das Problem zu lösen. Drücke auf "Run Code" und sieh was passiert.<br></br>
        
        <b>Jetzt versuche es selbst</b><br>
        Kannst du die Schleife so anpassen, dass Pfeili zur anderen Seite des Levels läuft? Wenn du dir nicht sicher bist, dann drückenochmal auf "Run Code" und sieh, ob dir ein Zusammenhang zwischen dem Code und Pfeilis Bewegung auffällt.<br><br>

        <i>(Ab dieser Lektion ist die Funktion "turnRight" direkt verfügbar, und muss nicht mehr manuell definiert werden.)</i><br><br>
        
        <b>Ich verstehe nur Bahnhof.</b><br>
        Es ist völlig normal, wenn du an dieser Stelle noch nicht verstehst, was die ganzen Einzelteile in der Schleife bedeuten. Probiere einfach erstmal etwas herum. Schleifen werden später noch in mehr Tiefe erklärt.<br><br>
        
        <b>Aufbau einer For-Loop</b><br>
        <em>"zählIndex"</em> kann durch einen beliebigen Namen (aus Buchstaben) ersetzt werden. Meistens einfach "i".<br>
        <em>"anzahlDerDurchläufe"</em> wird durch eine Zahl ersetzt, die festlegt, wie häufig die Schleife durchgeführt wird, also zum Beispiel "5".<br><br>

        for (let zählIndex = 0; zählIndex < anzahlDerDurchläufe; zählIndex++) {<br>
            einBefehl();<br>
            zweiterBefehl();<br>
            beliebigVieleBefehle();<br>
        }<br><br>

        <b>Ich will jetzt schon alle Details verstehen!</b><br>
        "zählIndex" ist eine sogenannte Variable, dieses Konzept wird später noch ausführlich erklärt TO DO: TEXT FERTIG SCHREIBEN<br><br>
        
        Manchmal wird es etwas knifflig, wenn man im ersten oder letzten Durchlauf der Schleife an Sonderfälle denken muss. Alle Befehle die innerhalb der Schleife stehen, werden immer zusammen ausgeführt. In diesem Beispiel wird immer ein Beeper aufgehoben und sich danach immer bewegt. Manchmal möchte man aber auch einen Beeper aufheben, ohne sich danach zu bewegen. Du kannst natürlich auch vor und nach einer Schleife Code schreiben, der dann nicht mehrfach sondern nur einmal ausgeführt wird, respektive bevor die Schleife startet und nachdem sie komplett durchgelaufen ist. (Vielleicht lohnt es sich, deinen Code aus dem vorherigen Level kopieren, um darauf aufzubauen.)`,
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
        name: "Off-brand Tetris 1 - If",
        explanation: `<b>If-Statements</b><br>
        wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der {}-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist.<br><br>
        
        <b>Mehrere Welten</b><br>
        Wie du siehst gibt es in diesem Level zwei Pfeilis, jeweils mit ihrem eigenen Spielfeld. In diesem Fall wird dein Code erst für die eine Welt ausgeführt und direkt im Anschluss wird derselbe Code nochmal von vorne für die andere Welt ausgeführt. Die beiden Welten beeinflussen sich gegenseitig also in keiner Form, die komplette Code-Ausführung wird auf Anfang zurückgesetzt, bevor die zweite Welt startet.<br><br>

        <b>Aufbau eines If-Statements</b><br>
        if(meineBedingung()){<br>
        code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
        }<br><br>`,
        code: `move();
if(leftIsClear())
{
    turnLeft();
}
move();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "leftIsClear", "rightIsClear"],
        worlds: [
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 10, 12, 0],
                    [0, 0, 0, 0, 0, 0, 7, 0],
                ],
                beepers: [{ x: 3, y: 1, count: 1 },],
                solutions: [],
                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 14, 0, 0],
                ],
                beepers: [{ x: 2, y: 2, count: 1 },],
                solutions: [],
                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Off-brand Tetris 2 - If",
        explanation: `<b>If-Statements</b><br>
        wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der {}-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist.<br><br>
        
        <b>Mehrere Welten</b><br>
        Wie du siehst gibt es in diesem Level zwei Pfeilis, jeweils mit ihrem eigenen Spielfeld. In diesem Fall wird dein Code erst für die eine Welt ausgeführt und direkt im Anschluss wird derselbe Code nochmal von vorne für die andere Welt ausgeführt. Die beiden Welten beeinflussen sich gegenseitig also in keiner Form, die komplette Code-Ausführung wird auf Anfang zurückgesetzt, bevor die zweite Welt startet.<br><br>

        <b>Aufbau eines If-Statements</b><br>
        if(meineBedingung()){<br>
        code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
        }<br><br>`,
        code: `move();
if(leftIsClear())
{
    turnLeft();
}
move();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "leftIsClear", "rightIsClear"],
        worlds: [
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 10, 12, 0],
                    [0, 0, 0, 0, 0, 0, 7, 0],
                ],
                beepers: [{ x: 3, y: 1, count: 1 }, { x: 5, y: 1, count: 1 },],
                solutions: [],
                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 14, 0, 0],
                ],
                beepers: [{ x: 2, y: 2, count: 1 }, { x: 3, y: 3, count: 1 },],
                solutions: [],
                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Off-brand Tetris 3 - If",
        explanation: `<b>Verschiedene Bedingungen</b><br>
        Es kann ganz verschiedene Bedingungen geben, die wir abfragen können. In diesem Level gibt es neben <em>leftIsClear()</em> auch <em>rightIstClear()</em>.<br><br>`,
        code: `move();
if(leftIsClear())
{
    turnLeft();
}
move();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "leftIsClear", "rightIsClear"],
        worlds: [
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 10, 12, 0],
                    [0, 0, 0, 0, 0, 0, 7, 0],
                ],
                beepers: [{ x: 3, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 2, count: 1 },],
                solutions: [],
                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 14, 0, 0],
                ],
                beepers: [{ x: 2, y: 2, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 5, y: 3, count: 1 },],
                solutions: [],
                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "X-Files 1 - If/ Else",
        explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.<br><br>
        
        <b>Aufbau eines If-Else-Statements</b><br>
        if(meineBedingung()){<br>
        code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
        }<br>
        else{<br>
        code der ausgeführt wird, wenn die Bedingung nicht wahr ist.<br>
        }<br><br>`,
        code: `move();
if(leftIsClear())
{
    turnLeft();
}
else
{
    turnRight();
}
move();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "leftIsClear", "frontIsClear", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [11, 12, 0, 0, 0, 9, 14],
                    [0, 3, 12, 0, 9, 6, 0],
                    [0, 0, 3, 10, 6, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 0, direction: 0, isSuper: false, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 9, 10, 12, 0, 0],
                    [0, 9, 6, 0, 3, 12, 0],
                    [11, 6, 0, 0, 0, 3, 14],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "X-Files 2 - If/ Else",
        explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.<br><br>
        
        <b>Aufbau eines If-Else-Statements</b><br>
        if(meineBedingung()){<br>
        code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
        }<br>
        else{<br>
        code der ausgeführt wird, wenn die Bedingung nicht wahr ist.<br>
        }<br><br>`,
        code: `move();
if(leftIsClear())
{
    turnLeft();
}
else
{
    turnRight();
}
move();`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "leftIsClear", "frontIsClear", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [11, 12, 0, 0, 0, 9, 14],
                    [0, 3, 12, 0, 9, 6, 0],
                    [0, 0, 3, 10, 6, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 2, count: 1 },],
                solutions: [],
                karel: { x: 0, y: 0, direction: 0, isSuper: false, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 9, 10, 12, 0, 0],
                    [0, 9, 6, 0, 3, 12, 0],
                    [11, 6, 0, 0, 0, 3, 14],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 0, count: 1 },],
                solutions: [],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "X-Files 3 - Else/ Else If",
        explanation: `<b>Else-If</b><br>
        Nun wird es kniffelig: neben <em>if</em> und <em>else</em> gibt es auch noch das <em>else if</em>...TO DO: TEXT WEITERSCHREIBEN<br><br>

        <em>Vergiss nicht, nachzusehen, welche Funktionen du in diesem Level zur Verfügung hast.</em><br><br>
        
        <b>Aufbau eines If-Else-If-Statements</b><br>
        if(ersteBedingung()){<br>
        code der ausgeführt wird, wenn die erste Bedingung wahr ist.<br>
        }<br>
        else if(zweiteBedingung()){<br>
        code der ausgeführt wird, wenn die zweite Bedingung wahr ist.<br>
        }<br>
        else{<br>
        code der ausgeführt wird, wenn keine der vorherigen Bedingungen wahr ist.<br>
        }<br><br>`,
        code: `for (let i = 0; i < 18; i++) {
    if(frontIsClear())
    {
        move();
    }
    else if(leftIsClear())
    {
        turnLeft();
    }
    
    //Rechtsdrehung?

    //Beeper aufsammeln?
}`,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "leftIsClear", "rightIsClear", "frontIsClear", "beeperIsPresent"],
        worlds: [
            {
                walls: [
                    [11, 12, 0, 0, 0, 9, 14],
                    [0, 3, 12, 0, 9, 6, 0],
                    [0, 0, 3, 10, 6, 0, 0],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 4, y: 2, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 0, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 0, direction: 0, isSuper: false, beeperCount: 0 }
            },
            {
                walls: [
                    [0, 0, 9, 10, 12, 0, 0],
                    [0, 9, 6, 0, 3, 12, 0],
                    [11, 6, 0, 0, 0, 3, 14],
                ],
                beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 0, count: 1 }, { x: 4, y: 0, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 2, count: 1 }],
                solutions: [],
                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 }
            },
        ],
    },
    {
        name: "Lanes 1 - Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem Zweck können wir Variablen nutzen. Variablen sind zunächst wie ein leerer Container oder ein unbeschriebener Notizblock, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Unter dem Namen können wir dann immer auf den Inhalt zugreifen.<br><br>
        
        Der Name der Variable ist beliebig, muss nur zwischen Deklaration und Nutzung übereinstimmen<br><br>
        
        Können auch neue Werte zugewiesen werden, danach gilt dann der neue Wert<br><br> 
        
        Deklaration und Zuweisung kann in einem Schritt passieren<br><br>
        
        Zuweisung kann an beliebiger Stelle geschehen, wie zB ein move Command<br><br>
        
        Warum Variablen?<br>
        1. Um Code flexibler zu machen, nur an einer Stelle neuen Wert für Variable zuweisen, alles andere Funktioniert direkt
        2. Um uns Dinge zu merken`,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
        worlds: [
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 6, y: 0, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }, { x: 0, y: 2, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
            {
                walls: [
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2],
                ],
                beepers: [{ x: 5, y: 0, count: 1 },],
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }, { x: 0, y: 2, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Lanes 2 - Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem Zweck können wir Variablen nutzen. Variablen sind zunächst wie ein leerer Container oder ein unbeschriebener Notizblock, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Unter dem Namen können wir dann immer auf den Inhalt zugreifen.<br><br>
        
        Der Name der Variable ist beliebig, muss nur zwischen Deklaration und Nutzung übereinstimmen<br><br>
        
        Können auch neue Werte zugewiesen werden, danach gilt dann der neue Wert<br><br> 
        
        Deklaration und Zuweisung kann in einem Schritt passieren<br><br>
        
        Zuweisung kann an beliebiger Stelle geschehen, wie zB ein move Command<br><br>
        
        Warum Variablen?<br>
        1. Um Code flexibler zu machen, nur an einer Stelle neuen Wert für Variable zuweisen, alles andere Funktioniert direkt
        2. Um uns Dinge zu merken`,
        code: ``,
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
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
                solutions: [{ x: 0, y: 0, count: 1 }, { x: 0, y: 1, count: 1 }, { x: 0, y: 2, count: 1 }],
                karel: { x: 0, y: 0, direction: 0, isSuper: true, beeperCount: 1 }
            },
        ],
    },
    {
        name: "Lanes 3 - Variables",
        explanation: `Manchmal müssen wir uns eine Information merken, um diese im späteren Verlauf des Programms wieder abzurufen. Zu diesem Zweck können wir Variablen nutzen. Variablen sind zunächst wie ein leerer Container oder ein unbeschriebener Notizblock, den wir mit einem Namen versehen und nach belieben mit Inhalt füllen können. Unter dem Namen können wir dann immer auf den Inhalt zugreifen.<br><br>
        
        Der Name der Variable ist beliebig, muss nur zwischen Deklaration und Nutzung übereinstimmen<br><br>
        
        Können auch neue Werte zugewiesen werden, danach gilt dann der neue Wert<br><br> 
        
        Deklaration und Zuweisung kann in einem Schritt passieren<br><br>
        
        Zuweisung kann an beliebiger Stelle geschehen, wie zB ein move Command<br><br>
        
        Warum Variablen?<br>
        1. Um Code flexibler zu machen, nur an einer Stelle neuen Wert für Variable zuweisen, alles andere Funktioniert direkt
        2. Um uns Dinge zu merken`,
        code: `function jump(stepAmount) {
    for (let i = 0; i < stepAmount; i++) {
        move();
    }
}

/////////////////////////////////
//TASK 1
if(isWorld1())
{
    jump(5);
    //...
}
else
{
    jump(4);
    //...
}

//////////////////////////////////
//INFO
var distance;
distance = 5;
jump(distance);

//////////////////////////////////
//INFO
var distance;
if(isWorld1()){
    distance = 2;
}
else{
    distance = 3;
}
jump(distance);

//////////////////////////////////
//TASK 2

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

//////////////////////////////////
//INFO
var distance;
distance = 2;
jump(distance);
jump(distance + 1);

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

jump(distance + 1);
pickBeeper();
turnAround();
jump(distance + 1);
putBeeper();
turnLeft();
move();
turnLeft();

jump(distance + 2);
pickBeeper();
turnAround();
jump(distance + 2);
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
        commands: ["move", "turnLeft", "turnRight", "putBeeper", "pickBeeper", "frontIsClear"],
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
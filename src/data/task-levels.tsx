import type { INewLevel } from "../types/karel";
export const levels: Array<INewLevel> = [
    {
        name: "Start - Commands & UI",
        explanations: [
            {
                title: "Commands & UI 1",
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
            },
            {
                title: "Commands & UI 2",
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
                
                <b>Wiedergabegeschwindigkeit Einstellen</b><br>
                Unter dem Spielfeld, gibt es vier verschiedene Pfeil-Icons und einen Pause-Knopf. Mit diesen Kannst du einstellen, in welchem Tempo der Code ausgeführt wird.<br>
                1. <em>Wiedergabegeschwindigkeiten</em>: Es gibt insgesamt drei Wiedergabegeschwindigkeiten. Ein Pfeil, zwei Pfeile, drei Pfeile.<br>
                2. <em>Pause</em>: Damit pausierst du die Wiedergabe, ohne sie ganz zu stoppen.<br>
                2. <em>Nächster Schritt</em>: Rechts vom Pause-Knopf gibt einen Knopf, mit dem immer nur der jeweils nächste Befehl ausgeführt wird. Drücke dafür erst auf den Pause-Knopf und dann so oft du willst auf den Nächster-Schritt-Knopf.<br><br>
                
                <b>Level überspringen oder das vorherige Level nochmal anschauen</b><br>
                Über dem Spielfeld wird der Name des Aktuellen Levels angezeigt. Die Kannst die Pfeile links und rechts des Level-Namens benutzen, um die vorherigen oder nachfolgenden Level auszuwählen. Du kannst auch direkt auf den Namen des Levels klicken, um eine Liste mit allen Leveln anzuzeigen.<br><br>`,
            },
        ],
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

                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 2, y: 2, count: 1 },],
                        solutions: [{ x: 3, y: 2, count: 1 },],
                    },
                    {
                        beepers: [{ x: 2, y: 2, count: 1 }, { x: 4, y: 2, count: 1 },],
                        solutions: [{ x: 3, y: 2, count: 1 }, { x: 5, y: 2, count: 1 },],
                    },
                ]
            },
        ],
    },
    {
        name: "Start - Functions",
        explanations: [
            {
                title: "Functions 1",
                explanation: `Manchmal müssen wir Dinge tun für die es noch keinen Befehl gibt. Hier muss sich Pfeili nach rechts drehen, aber es gibt nur einen Befehl zur Linksdrehung. Kannst du mit den vorhandenen Befehlen trotzdem eine Rechtsdrehung erreichen und das Level abschließen?<br><br>`,
            },
            {
                title: "Functions 2",
                explanation: `Man kann also eine Rechtsdrehung aus 3 Linksdrehungen erzeugen. Wenn du die Rechtsdrehung auf diese Weise häufiger nutzt, dann wird es allerdings unübersichtlich im Code. Um das zu vermeiden, kann man sogenannte "Funktionen" schreiben. Diese bündeln eine beliebige  Abfolge bereits vorhandener Befehle unter einem neuen Namen zusammen.<br><br>
               
                
                <b>Definieren einer Funktion</b><br>
                function turnRight(){<br>
                turnLeft();<br>
                turnLeft();<br>
                turnLeft();<br>
                }<br><br>
        
                So wird eine Funktion definiert. "turnRight" ist in diesem Fall der Name der Funktion, der frei wählbar ist. Zwischen die geschwungenen Klammer "{}" können wir so viele andere Befehle schreiben wie wir wollen. Wenn man eine Funktion definiert, passiert dadurch allerdings noch nichts. Dafür müssen wir die Funktion noch aufrufen.<br><br>
        
                <b>Aufrufen einer Funktion</b><br>
                turnRight();<br><br>
        
                Selbst definiert Funktionen werden genauso aufgerufen wie die bereits vorhandenen Befehle. Genau genommen sind die bereits vorhandenen Befehle auch nur Funktionen, die jemand anders für uns geschrieben hat. Das praktische: jetzt können wir die Funktion so häufig wie wir wollen aufrufen und müssen jedes Mal nur noch eine Zeile statt drei Zeilen schreiben. Wir müssen nur darauf achten, den gleichen Namen wie in der vorher definierten Funktion zu verwenden. In diesem Fall also "turnRight".<br><br>
                
        
                <b>Tasten-Komination für die {}-Klammern</b><br>
                Windows: AltGr + 7 / AltGr + 0<br>
                Mac: Shift + Alt + 8 / Shift + Alt + 9<br><br>`,
            },
            {
                title: "Functions 3",
                explanation: `Wie gesagt kann man so viele Befehle in einer Funktion ausführen wie man möchte. Man kann also vor oder nach den drei "turnLeft" Befehlen z.B. auch "move" oder "pickBeeper" aufrufen. Wenn du deine Funktion richtig anpasst, dann kannst du das ganze Level nach der Definition deiner Funktion mit nur drei Aufrufen der Funktion lösen. Aber natürlich kannst du das Level lösen wie du möchtest.<br><br>
               
                <b>Definieren einer Funktion</b><br>
                function turnRight(){<br>
                turnLeft();<br>
                turnLeft();<br>
                turnLeft();<br>
                }<br><br>
        
                <b>Aufrufen einer Funktion</b><br>
                turnRight();<br><br>
        
                <b>Tasten-Komination für die {}-Klammern</b><br>
                Windows: AltGr + 7 / AltGr + 0<br>
                Mac: Shift + Alt + 8 / Shift + Alt + 9<br><br>`,
            },
        ],
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

                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 3, y: 1, count: 1 }],
                        solutions: [{ x: 4, y: 1, count: 1 }],
                    },
                    {
                        beepers: [{ x: 3, y: 1, count: 1 }, { x: 4, y: 2, count: 1 }],
                        solutions: [{ x: 4, y: 1, count: 1 }, { x: 4, y: 3, count: 1 }],
                    },
                    {
                        beepers: [{ x: 3, y: 1, count: 1 }, { x: 4, y: 2, count: 1 }, { x: 3, y: 3, count: 1 },],
                        solutions: [{ x: 4, y: 1, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 2, y: 3, count: 1 },],
                    },
                ]
            },
        ],
    },
];

export default levels;
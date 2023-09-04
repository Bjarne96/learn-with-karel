import type { INewLevel } from "../types/karel";
export const levels: Array<INewLevel> = [
    {
        name: "Commands & UI",
        explanations: [
            {
                title: "Das Ziel und Rückgängig machen",
                explanation: `<b>Willkommen beim Learnlab!</b><br>
                Dies ist ein Spiel, mit dem Du Programmieren lernen kannst. Die verwendete Programmiersprache trägt den Namen JavaScript, aber die erlernten Konzepte finden sich auch in allen anderen Programmiersprachen wieder.<br><br>

                <b>Das Spielfeld</b><br>
                Im rechten Drittel siehst du ein Spielfeld mit einem blauen Pfeil darin, das ist Pfeili. Wenn du auf den Play-Knopf unter dem Spielfeld klickst, dann wird Pfeili die Anweisungen im Code-Editor ausführen und sich bewegen und Dinge aufheben oder ablegen.<br><br>

                <b>Der Code-Editor</b><br>
                Der Code-Editor ist das große Textfeld im mittleren Drittel des Bildschirms, in das Du Anweisungen schreiben kannst.<br><br>

                <b>Das Ziel</b><br>
                Die Rauten die du im Spielfeld siehst, heißen Beeper. Deine Aufgabe besteht darin, Beeper an bestimmten Stellen aufzusammeln oder abzulegen:<br> 
                1. Alle roten Beeper müssen aufgesammelt werden.<br>
                2. In allen Zielzonen (= farblose Rauten) müssen Beeper abgelegt werden. Diese erscheinen dann grün. Wenn es keine Zielzonen gibt, dann musst du nur alle roten Beeper aufheben.<br><br>

                <b>Los geht's</b><br>
                Drücke auf den Play-Knopf unter dem Spielfeld und sieh zu, wie Pfeili die Befehle im Code-Editor ausführt.<br><br>
                
                <b>Hilfe, ich habe den Text im Code-Editor ausversehen verändert!</b><br>
                Keine Sorge, du kannst einfach in den Code Editor klicken und die Tastenkombination Strg + Z nutzen, um alles rückgängig zu machen. Alternativ lösche allen Text im Code Editor und und kopiere den folgenden zwei Zeilen in den Editor:<br>
                move()<br>
                pickBeeper()<br><br>
        
                <b>Hilfe, Pfeili ist irgendwo stecken geblieben!</b><br>
                Um ein Level auf den Startzustand zurückzusetzen drücke einfach auf den kreisförmigen Pfeil unter dem Spielfeld. Alles kann rückgängig gemacht werden, also probiere einfach drauf los. Es gibt zwei Bedingungen die dazu führen, dass die Ausführung des Codes gestoppt wird und du das level zurücksetzen musst:<br>
                <em>1. Ungültiger Befehl:</em> Du versuchst du einen Befehl auszuführen, der in dieser Situation nicht ausführbar ist (zum Beispiel wenn du versuchst durch eine Wand zu laufen).<br>
                <em>2. Ziel nicht erreicht:</em> Alle Befehle wurden ausgeführt, ohne alle Beeper korrekt zu platzieren.<br><br>`,
            },
            {
                title: "Die Befehle",
                explanation: `Weiter unten findest du eine vollständige Beschreibung der Benutzeroberfläche. Wenn du fertig gelesen hast, dann versuche das Level zu lösen, indem du Befehle in das Textfeld schreibst und dann auf den Play-Knopf drückst.<br><br>

                <b>Die Befehle</b><br>
                Die zur Verfügung stehenden Befehle können sich in jedem Level ändern. Die Liste am Ende der Erklärung führt immer die gerade verfügbaren Befehle auf. Fast immer solltest du allerdings folgende Befehle zur Verfügung haben:<br>
                <em>move()</em> Pfeili bewegt sich in aktueller Blickrichtung ein Feld vorwärts (sofern keine Wand im Weg ist).<br>
                <em>turnLeft()</em> Pfeili dreht sich 90° gegen den Uhrzeigersinn.<br>
                <em>putBeeper()</em> Pfeili legt einen Beeper auf dem Feld ab, auf dem er sich momentan befindet (sofern Pfeili noch genügend Beeper im Rucksack hat).<br>
                <em>pickBeeper()</em> Pfeili hebt einen Beeper vom Feld auf, auf dem Pfeili momentan steht (sofern sich dort ein Beeper befindet).<br><br>`,
            },
            {
                title: "Probleme identifizieren - das Command Log",
                explanation: `<b>Command-Log</b><br>
                Das Command-Log ist unter dem Spielfeld. Hier werden die von Pfeili ausgeführten Befehle in einer Liste mitgeschrieben. Wenn es ein Fehler mit dem Programm gibt, dann wird das im Command-Log mitgeteilt.<br><br>

                Kopiere folgenden (fehlerhaften) Code in den Code Editor:<br>
                move()<br>
                pickBeeper()<br>

                Drücke auf Play und schau im Command-Log, was das Problem ist. Setze danach des Level zurück und versuche das Level zu lösen.`,
            },
            {
                title: "Wiedergabegeschwindigkeit Ändern",
                explanation: `Manchmal muss Pfeili viele Schritt ausführen und alles dauert ein bisschen lange. Oder es wird besonders Knifflig und du willst dir alles Schritt für Schritt anschauen. Für diese Fälle kannst du die Wiedergabegeschwindigkeit ändern.Versuche für dieses Level, eine schnelle Geschwindigkeit einzustellen.<br><br>
                
                <b>Wiedergabegeschwindigkeit Einstellen</b><br>
                Unter dem Spielfeld, gibt es vier verschiedene Pfeil-Icons und einen Pause-Knopf. Mit diesen Kannst du einstellen, in welchem Tempo der Code ausgeführt wird.<br>
                1. <em>Wiedergabegeschwindigkeiten</em>: Es gibt insgesamt drei Wiedergabegeschwindigkeiten. Ein Pfeil, zwei Pfeile, drei Pfeile.<br>
                2. <em>Pause</em>: Damit pausierst du die Wiedergabe, ohne sie ganz zu stoppen.<br>
                3. <em>Nächster Schritt</em>: Rechts vom Pause-Knopf gibt einen Knopf, mit dem immer nur der jeweils nächste Befehl ausgeführt wird. Drücke dafür erst auf den Pause-Knopf und dann so oft du willst auf den Nächster-Schritt-Knopf.<br><br>`,
            },
            {
                title: "Lektion abschließen und vorherige Level anschauen",
                explanation: `Dies ist die letzte Aufgabe im Einführungsblock. Wenn du sie abgeschlossen hast, wirst du in einen neuen Block weitergeleitet. Falls du allerdings nochmal eine Information nachschauen möchtest, kannst du jederzeit zu allen Bereits absolvierten Aufgbacken-Blöcken zurückkehren.<br><br>
                
                <b>Aufgabenblock Wechsel</b><br>
                Über dem Spielfeld wird der Name des Aktuellen Aufgaben-Blocks angezeigt. Die Kannst die Pfeile links und rechts des Level-Namens benutzen, um die vorherigen oder nachfolgenden Level auszuwählen. Du kannst auch direkt auf den Namen des Levels klicken, um eine Liste mit allen Leveln anzuzeigen.<br><br>`,
            },
        ],
        code: `move()
pickBeeper()`,
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
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 2, count: 1 }],
                        solutions: [{ x: 3, y: 2, count: 1 }],
                    },
                    {
                        beepers: [{ x: 3, y: 2, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 7, y: 2, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 2, count: 1 }, { x: 4, y: 2, count: 1 }],
                        solutions: [{ x: 3, y: 2, count: 1 }, { x: 5, y: 2, count: 1 }],
                    },
                ]
            },
        ],
    },
    {
        name: "Functions - Beispiel",
        explanations: [
            {
                title: "Funktionen - Beispiel",
                explanation: `Hier siehst du ein Beispiel für eine Funktion. Klicke auf Play und schau dir die Demonstration an. Danach wird dir erklärt, was genau hier passiert. <br><br>`,
            },
        ],
        code: `function moveAcross() {
    move()
    move()
    move()
    move()
    move()
    move()
    move()
    turnLeft()
}

pickBeeper()
moveAcross()

pickBeeper()
moveAcross()

pickBeeper()
moveAcross()

pickBeeper()
moveAcross()`,
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

                karel: { x: 7, y: 0, direction: 2, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [
                            { x: 7, y: 0, count: 1 },
                            { x: 7, y: 7, count: 1 },
                            { x: 0, y: 7, count: 1 },
                            { x: 0, y: 0, count: 1 }],
                        solutions: [],
                    },
                ]
            },
        ],
    },
    {
        name: "Functions - Aufgabe",
        explanations: [
            {
                title: "1. Das Problem ohne Funktionen lösen",
                explanation: `Manchmal müssen wir Dinge tun für die es noch keinen Befehl gibt. Hier muss sich Pfeili nach rechts drehen, aber es gibt nur einen Befehl zur Linksdrehung. Kannst du mit den vorhandenen Befehlen trotzdem eine Rechtsdrehung erreichen und das Level abschließen?<br><br>`,
            },
            {
                title: "2. Funktionen definieren und aufrufen",
                explanation: `Man kann eine Rechtsdrehung aus mehreren anderen Befehlen zusammensetzen. Wenn du die Rechtsdrehung auf diese Weise häufiger nutzt, dann wird es allerdings unübersichtlich im Code. Um das zu vermeiden, kann man sogenannte "Funktionen" schreiben. Diese bündeln eine beliebige  Abfolge bereits vorhandener Befehle unter einem neuen Namen zusammen.<br><br>
               
        
                <b>Definieren einer Funktion</b><br>
                function turnAround(){<br>
                    turnLeft()<br>
                    turnLeft()<br>
                }<br><br>
        
                Dies ein ein Beispiel dafür, wie man eine Funktion definieren kann. "turnAround" ist in diesem Fall der Name der Funktion, der frei wählbar ist. Zwischen die geschwungenen Klammer "{}" können wir so viele andere Befehle schreiben wie wir wollen. Wenn man eine Funktion definiert, passiert dadurch allerdings noch nichts. Dafür müssen wir die Funktion noch aufrufen.<br><br>
        

                <b>Aufrufen einer Funktion</b><br>
                turnAround()<br><br>
                Selbst definiert Funktionen werden genauso aufgerufen wie die bereits vorhandenen Befehle. Genau genommen sind die bereits vorhandenen Befehle auch nur Funktionen, die jemand anders für uns geschrieben hat. Das praktische: jetzt können wir die Funktion so häufig wie wir wollen aufrufen und müssen jedes Mal nur noch eine Zeile statt drei Zeilen schreiben. Wir müssen nur darauf achten, den gleichen Namen wie in der vorher definierten Funktion zu verwenden. In diesem Fall also "turnAround".<br><br>
                
        
                <b>Tasten-Komination für die {}-Klammern</b><br>
                Windows: AltGr + 7 / AltGr + 0<br>
                Mac: Shift + Alt + 8 / Shift + Alt + 9<br><br>`,
            },
            {
                title: "3. Weiterführende Tipps zu Funktionen",
                explanation: `Wie gesagt kann man so viele Befehle in einer Funktion ausführen wie man möchte. Man kann also vor oder nach den drei "turnLeft" Befehlen z.B. auch "move" oder "pickBeeper" aufrufen. Wenn du deine Funktion richtig anpasst, dann kannst du das ganze Level nach der Definition deiner Funktion mit nur drei Aufrufen der Funktion lösen. Aber natürlich kannst du das Level lösen wie du möchtest.<br><br>`,
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

                karel: { x: 2, y: 1, direction: 1, isSuper: false, beeperCount: 0 },
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
    {
        name: "Beeper Line - Loops",
        explanations: [
            {
                title: "1. Anzahl der Durchläufe festlegen",
                explanation: `Manchmal muss man einen Befehl mehrfach hintereinander ausführen. Programmier*innen hassen es allerdings, sich zu wiederholen. Also nutzen sie die sogenannten Schleifen oder auch Loops, um das Problem zu lösen. Drücke auf den Play-Knopf und sieh was passiert.<br></br>
        
                <b>Anzahl der Schleifen-Durchläufe Ändern</b><br>
                Wenn du die "5" in der Schleife durch eine andere Zahl ersetzt, wird sich die Anzahl der Schleifendurchläufe ändern.<br><br>
        
                <i>(Ab dieser Lektion ist die Funktion "turnRight" direkt verfügbar, und muss nicht mehr manuell definiert werden.)</i><br><br>`,
            },
            {
                title: "2. Den Inhalt der Schleife verändern",
                explanation: `Innerhalb der Geschweiften Klammern "{}" der For-Schleife kannst du so viele Befehle schreiben wie du möchtest. Jeder dieser Befehle wird bei jedem Durchlauf der Schleife aufgerufen.<br><br>
        
                Unter das "move()" könntest du also z.B. noch "pickBeeper()" schreiben, dann wird sich Pfeili in jedem Durchlauf erst bewegen und dann einen Beeper aufheben.<br><br>
                
                <b>Aufbau einer For-Loop</b><br>
                for (let zählIndex = 0; zählIndex < anzahlDerDurchläufe; zählIndex++) {<br>
                    einBefehl()<br>
                    zweiterBefehl()<br>
                    beliebigVieleBefehle()<br>
                }<br><br>
                
                <em>"zählIndex"</em> kann durch einen beliebigen Namen (aus Buchstaben) ersetzt werden. Meistens einfach "i". Hiermit merkt sich die Schleife, wie häufig sie schon durchgelaufen ist.<br>
                <em>"anzahlDerDurchläufe"</em> wird durch eine Zahl ersetzt, die festlegt, wie häufig die Schleife durchgeführt wird, also zum Beispiel "5".<br><br>`,
            },
            {
                title: "3. Probleme im letzten Schleifendurchlauf",
                explanation: `Alle Befehle die innerhalb der Schleife stehen, werden immer zusammen ausgeführt. In diesem Beispiel wird immer ein Beeper aufgehoben und sich danach immer bewegt.<br><br>
        
                Manchmal wird es etwas knifflig, wenn man im ersten oder letzten Durchlauf der Schleife an Sonderfälle denken muss. Wenn Pfeili ganz rechts angekommen ist, muss er z.B. noch einen Beeper aufheben ohne sich danach zu bewegen (Da er sonst gegen den Rand des Levels läuft).<br><br>
                
                Du kannst natürlich auch vor und nach einer Schleife Code schreiben, der dann nicht mehrfach sondern nur einmal ausgeführt wird, entsprechend bevor die Schleife startet und nachdem sie komplett durchgelaufen ist. Als Referenz kannst du zwei Level zurückspringen.`,
            },
        ],
        code: `pickBeeper()
for (let i = 0; i < 5; i++) {
    move()
}
putBeeper()`,
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

                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 0, y: 2, count: 1 },],
                        solutions: [{ x: 7, y: 3, count: 1 },],
                    },
                    {
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
                    },
                    {
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
                    },
                ]
            },
        ],
    },
    {
        name: "Off-brand Tetris - If",
        explanations: [
            {
                title: "If 1",
                explanation: `<b>If-Statements</b><br>
                wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der {}-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist.<br><br>
                
                <b>Mehrere Welten</b><br>
                Wie du siehst gibt es in diesem Level zwei Pfeilis, jeweils mit ihrem eigenen Spielfeld. In diesem Fall wird dein Code erst für die eine Welt ausgeführt und direkt im Anschluss wird derselbe Code nochmal von vorne für die andere Welt ausgeführt. Die beiden Welten beeinflussen sich gegenseitig also in keiner Form, die komplette Code-Ausführung wird auf Anfang zurückgesetzt, bevor die zweite Welt startet.<br><br>
        
                <b>Aufbau eines If-Statements</b><br>
                if(meineBedingung()){<br>
                code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
                }<br><br>`,
            },
            {
                title: "If 2",
                explanation: `<b>If-Statements</b><br>
                wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der {}-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist.<br><br>
                
                <b>Mehrere Welten</b><br>
                Wie du siehst gibt es in diesem Level zwei Pfeilis, jeweils mit ihrem eigenen Spielfeld. In diesem Fall wird dein Code erst für die eine Welt ausgeführt und direkt im Anschluss wird derselbe Code nochmal von vorne für die andere Welt ausgeführt. Die beiden Welten beeinflussen sich gegenseitig also in keiner Form, die komplette Code-Ausführung wird auf Anfang zurückgesetzt, bevor die zweite Welt startet.<br><br>
        
                <b>Aufbau eines If-Statements</b><br>
                if(meineBedingung()){<br>
                code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
                }<br><br>`,
            },
            {
                title: "Andere Bedingungen nutzen",
                explanation: `<b>Verschiedene Bedingungen</b><br>
                Es kann ganz verschiedene Bedingungen geben, die wir abfragen können. In diesem Level gibt es neben <em>leftIsClear()</em> auch <em>rightIstClear()</em>.<br><br>`,
            },
        ],
        code: `move()
if(leftIsClear())
{
    turnLeft()
}
move()`,
        commands: ["leftIsClear", "rightIsClear", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
        worlds: [
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 10, 12, 0],
                    [0, 0, 0, 0, 0, 0, 7, 0],
                ],

                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 3, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 3, y: 1, count: 1 }, { x: 5, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 3, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 2, count: 1 },],
                        solutions: [],
                    },
                ]
            },
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 14, 0, 0],
                ],

                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 2, y: 2, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 2, count: 1 }, { x: 3, y: 3, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 2, count: 1 }, { x: 3, y: 3, count: 1 }, { x: 5, y: 3, count: 1 },],
                        solutions: [],
                    },
                ]
            },
        ],
    },
    {
        name: "X-Files 1 - If/ Else",
        explanations: [
            {
                title: "Else 1",
                explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.<br><br>
        
                <b>Aufbau eines If-Else-Statements</b><br>
                if(meineBedingung()){<br>
                code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
                }<br>
                else{<br>
                code der ausgeführt wird, wenn die Bedingung nicht wahr ist.<br>
                }<br><br>`,
            },
            {
                title: "Else 2",
                explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.<br><br>
        
                <b>Aufbau eines If-Else-Statements</b><br>
                if(meineBedingung()){<br>
                code der ausgeführt wird, wenn die Bedingung wahr ist.<br>
                }<br>
                else{<br>
                code der ausgeführt wird, wenn die Bedingung nicht wahr ist.<br>
                }<br><br>`,
            },
            {
                title: "Else-if",
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
                }<br><br>
                
                <b>Anmerkungen im Code</b><br>
                Manchmal möchte man Notizen direkt im Code schreiben, die aber bei der Ausführung ignoriert werden sollen. In diesem Fall schreibt man // und sämtlicher Code der in der selben Zeile dahinter steht, wird ausgegraut angezeigt und in der Ausführung des Codes ignoriert.<br><br>
                
                <b>Lösungsansatz</b><br>
                for (let i = 0; i < 18; i++) {<br>
                    if(frontIsClear())<br>
                    {<br>
                        move()<br>
                    }<br>
                    else if(leftIsClear())<br>
                    {<br>
                        turnLeft()<br>
                    }<br>
                    <br>
                    //Rechtsdrehung?<br>
                    <br>
                    //Beeper aufsammeln?<br>
                }`,
            },
        ],
        code: `move()
if(leftIsClear())
{
    turnLeft()
}
else
{
    turnRight()
}
move()`,
        commands: ["leftIsClear", "rightIsClear", "frontIsClear", "beeperIsPresent", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
        worlds: [
            {
                walls: [
                    [11, 12, 0, 0, 0, 9, 14],
                    [0, 3, 12, 0, 9, 6, 0],
                    [0, 0, 3, 10, 6, 0, 0],
                ],
                karel: { x: 0, y: 0, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 2, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 4, y: 2, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 0, count: 1 }],
                        solutions: [],
                    },
                ]
            },
            {
                walls: [
                    [0, 0, 9, 10, 12, 0, 0],
                    [0, 9, 6, 0, 3, 12, 0],
                    [11, 6, 0, 0, 0, 3, 14],
                ],

                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 0, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 0, count: 1 }, { x: 4, y: 0, count: 1 }, { x: 5, y: 1, count: 1 }, { x: 6, y: 2, count: 1 }],
                        solutions: [],
                    },
                ]
            },
        ],
    },
    {
        name: "Test - Interactive Methods",
        explanations: [
            {
                title: "Interactive Methods 1",
                explanation: `test`,
            },
            {
                title: "Interactive Methods 2",
                explanation: `test`,
            },
            {
                title: "Interactive Methods 3",
                explanation: `test`,
            },
        ],
        code: ``,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper", "moveAmount", "rightIsPressed"],
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

                karel: { x: 0, y: 2, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 1, y: 2, count: 1 }],
                        solutions: [{ x: 2, y: 2, count: 1 }],
                    },
                    {
                        beepers: [{ x: 1, y: 2, count: 1 }, { x: 3, y: 0, count: 1 }],
                        solutions: [{ x: 2, y: 2, count: 1 }, { x: 4, y: 1, count: 1 }],
                    },
                    {
                        beepers: [{ x: 1, y: 2, count: 1 }, { x: 3, y: 0, count: 1 }, { x: 6, y: 5, count: 1 },],
                        solutions: [{ x: 2, y: 2, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 7, y: 4, count: 1 },],
                    },
                ]
            },
        ],
    },
]

export default levels
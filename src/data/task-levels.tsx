import type { INewLevel } from "../types/karel";
export const levels: Array<INewLevel> = [
    {
        name: "Grundlagen & Befehle",
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
                Keine Sorge, du kannst einfach in den Code Editor klicken und die Tastenkombination Strg + Z nutzen, um alles rückgängig zu machen. Alternativ lösche allen Text im Code Editor und und kopiere den folgenden zwei Zeilen in den Editor:<br><br>

<pre><code>move()
pickBeeper()
</code></pre><br>
        
                <b>Hilfe, Pfeili ist irgendwo stecken geblieben!</b><br>
                Um ein Level auf den Startzustand zurückzusetzen drücke einfach auf den kreisförmigen Pfeil unter dem Spielfeld. Alles kann rückgängig gemacht werden, also probiere einfach drauf los. Es gibt zwei Bedingungen die dazu führen, dass die Ausführung des Codes gestoppt wird und du das level zurücksetzen musst:<br>
                <em>1. Ungültiger Befehl:</em> Du versuchst du einen Befehl auszuführen, der in dieser Situation nicht ausführbar ist (zum Beispiel wenn du versuchst durch eine Wand zu laufen).<br>
                <em>2. Ziel nicht erreicht:</em> Alle Befehle wurden ausgeführt, ohne alle Beeper korrekt zu platzieren.<br><br>`,
            },
            {
                title: "Die Befehle",
                explanation: `Versuche nun selbst die Aufgabe zu lösen, indem du Befehle in das Textfeld schreibst und dann auf den Play-Knopf drückst.<br><br>

                <b>Die Befehle</b><br>
                Die zur Verfügung stehenden Befehle können sich in jedem Level ändern. Die Liste am Ende der Erklärung führt immer die gerade verfügbaren Befehle auf. Fast immer solltest du allerdings folgende Befehle zur Verfügung haben:<br><br>
                <em>move()</em> Pfeili bewegt sich in aktueller Blickrichtung ein Feld vorwärts (sofern keine Wand im Weg ist).<br><br>
                <em>turnLeft()</em> Pfeili dreht sich 90° gegen den Uhrzeigersinn.<br><br>
                <em>putBeeper()</em> Pfeili legt einen Beeper auf dem Feld ab, auf dem er sich momentan befindet (sofern Pfeili noch genügend Beeper im Rucksack hat).<br><br>
                <em>pickBeeper()</em> Pfeili hebt einen Beeper vom Feld auf, auf dem Pfeili momentan steht (sofern sich dort ein Beeper befindet).<br><br>`,
            },
            {
                title: "Probleme identifizieren/ Command Log",
                explanation: `<b>Command-Log</b><br>
                Das Command-Log ist unter dem Spielfeld. Hier werden die von Pfeili ausgeführten Befehle in einer Liste mitgeschrieben. Wenn es einen Fehler mit dem Programm gibt, dann wird das im Command-Log mitgeteilt. Kopiere nun folgenden (fehlerhaften) Code in den Code Editor:<br><br>
                
<pre><code>move()
pickBeeper()
move()
pickBeeper()
</code></pre><br>
                
                Drücke auf Play und schau im Command-Log, was das Problem ist. Setze danach des Level zurück und versuche das Level zu lösen.`,
            },
            {
                title: "Wiedergabegeschwindigkeit Ändern",
                explanation: `Manchmal muss Pfeili viele Schritt ausführen und alles dauert ein bisschen lange. Oder es wird besonders knifflig und du willst dir alles Schritt für Schritt anschauen. Für diese Fälle kannst du die Wiedergabegeschwindigkeit ändern.Versuche für dieses Level, eine schnelle Geschwindigkeit einzustellen.<br><br>
                
                <b>Wiedergabegeschwindigkeit Einstellen</b><br>
                Unter dem Spielfeld, gibt es vier verschiedene Pfeil-Icons und einen Pause-Knopf. Mit diesen Kannst du einstellen, in welchem Tempo der Code ausgeführt wird.<br>
                1. <em>Wiedergabegeschwindigkeiten</em>: Es gibt insgesamt drei Wiedergabegeschwindigkeiten. Ein Pfeil, zwei Pfeile, drei Pfeile.<br>
                2. <em>Pause</em>: Damit pausierst du die Wiedergabe, ohne sie ganz zu stoppen.<br>
                3. <em>Nächster Schritt</em>: Rechts vom Pause-Knopf gibt einen Knopf, mit dem immer nur der jeweils nächste Befehl ausgeführt wird. Drücke dafür erst auf den Pause-Knopf und dann so oft du willst auf den Nächster-Schritt-Knopf.<br><br>`,
            },
            {
                title: "Lektion abschließen/ vorherige Level anschauen",
                explanation: `Dies ist die letzte Aufgabe im Einführungsblock. Wenn du sie abgeschlossen hast, wirst du in einen neuen Block weitergeleitet. Falls du allerdings nochmal eine Information nachschauen möchtest, kannst du jederzeit zu allen Bereits absolvierten Aufgbacken-Blöcken zurückkehren.<br><br>
                
                <b>Aufgabenblock Wechseln</b><br>
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
        name: "Funktionen",
        explanations: [
            {
                title: "Das Problem ohne Funktionen lösen",
                explanation: `Manchmal müssen wir Dinge tun für die es noch keinen Befehl gibt. Hier muss sich Pfeili nach rechts drehen, aber es gibt nur einen Befehl zur Linksdrehung. Kannst du mit den vorhandenen Befehlen trotzdem eine Rechtsdrehung erreichen und das Level abschließen?<br><br>`,
            },
            {
                title: "Wann benutzt man Funktionen",
                explanation: `Wenn man die selbe Abfolge von Befehlen mehrmals nutzt, dann sollte man dafür meistens eine Funktion dafür nutzen. Eine Funktion bündelt eine beliebige  Abfolge von Befehle unter einem neuen Namen zusammen. Diese ganze Abfolge von Befehlen kann man danach so häufig abrufen wie man möchte, und das mit minimalen Schreibaufwand.<br><br>
                
                Hier wirst jedoch noch ein letztes Mal ohne Funktionen arbeiten, weil man so am besten sieht, in welchen Szenarien Funktionen einem das Leben einfacher machen. Hier hast du fast das gleich Problem wie bei Aufgabe 1. Du kannst die Aufgabe einfach so wie immer lösen. Allerdings wirst du merken, dass du dich dabei wiederholen musst.<br><br>`,
            },
            {
                title: "Funktionen nutzen: Definition und Aufruf",
                explanation: `Nun werden wir das Problem auf die elegante Art lösen. Um eine Funktion zu nutzen brauchst du zwei Komponenten:<br><br>
                
                <b>1. Die Definition</b><br>
                Diese wird durch das Wort "function" eingeleitet. Diese ist wie ein Koch-Rezept, denn es steht eine Abfolge von Instruktionen darin. Der Name der Funktion ist beliebig wählbar (hier: "turnRight").<br><br>
               
<pre><code>function turnRight(){
    turnLeft()
    turnLeft()
    turnLeft()
}</code></pre><br>

                <b>2. Der Aufruf</b><br>
                Von einem Koch-Rezept alleine kocht sich noch kein Essen. Deswegen müssen wir den Computer damit beauftragen, die Instruktionen im Rezept (also in der Definition) auch auszuführen. Und dass machen wir mit dem Aufruf. Hierfür nutzt du den den gleichen Namen, den du vorher in der Definition gewählt hast, gefolgt von (). In diesem Fall "turnRight()". Ein Aufruf kann erst nach der Definition stattfinden, also weiter unten im Code. Wir nutzen Aufrufe genauso im Code, wie die Befehle, die du schon kennst.<br><br>

<pre><code>turnRight()
move()
move()
pickBeeper()
turnRight()</code></pre><br>

                <b>Tasten-Komination für die {}-Klammern</b><br>
                Windows: AltGr + 7 / AltGr + 0<br>
                Mac: Shift + Alt + 8 / Shift + Alt + 9<br><br>`,
            },
            {
                title: "Eine Funktionsdefinition modifizieren",
                explanation: `Es gibt immer noch mehrere Stellen im Code, in denen wir uns unnötig wiederholen, also brauchen wir noch eine Funktion. Die neue Funktion <code>moveAndPick()</code> im folgenden Code funktioniert leider noch nicht so richtig.<br><br>
                
                Wenn zwischen den {}-Klammern der Definition von <code>moveAndPick()</code> neue Befehle einfügst oder die vorhandenen löscht, kannst du die Funktion verändern.<br><br>

<pre><code>function moveAndPick(){
    move()
    pickBeeper()
}

function turnRight(){
    turnLeft()
    turnLeft()
    turnLeft()
}

turnRight()
moveAndPick()
turnRight()</code></pre><br>`,
            },
            {
                title: "Flexiblen Code schreiben",
                explanation: `Im Programmier-Alltag verändern sich dauernd irgendwelche Rahmenbedingungen, sodass man im Nachhinein Dinge an seinem Code ändern muss. Wenn man jedoch eine Funktionen hat die an vielen Stellen genutzt wird, dann muss man häufig nur eine kleine Änderung an der Funktion vornehmen. Sonst sonst hätte man an vielen Stellen des Programms alle Änderungen einzeln vornehmen müssen.<br><br>
                
                Wenn du deinen Code schon in den vorherigen Übungen in Funktionen Aufgeteilt hast, dann musst du jetzt nur noch eine Code-Zeile in einer Funktionsdefinition einzügen, um das Level zu lösen.`,
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
                        beepers: [{ x: 4, y: 1, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 4, y: 1, count: 1 }, { x: 4, y: 3, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 4, y: 1, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 2, y: 3, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 4, y: 1, count: 1 }, { x: 4, y: 3, count: 1 }, { x: 2, y: 3, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 5, y: 1, count: 1 }, { x: 5, y: 4, count: 1 }, { x: 2, y: 4, count: 1 },],
                        solutions: [],
                    },
                ]
            },
        ],
    },
    {
        name: "Schleifen",
        explanations: [
            {
                title: "Anzahl der Durchläufe festlegen",
                explanation: `Manchmal muss man einen Befehl mehrfach direkt hintereinander ausführen. Programmier*innen hassen es allerdings, sich zu wiederholen. Also nutzen sie die sogenannten Schleifen oder auch Loops, um das Problem zu lösen. Wenn du die <code>5</code> in der Schleife durch eine andere Zahl ersetzt, wird sich die Anzahl der Schleifendurchläufe ändern. Drücke einfach auf Play und sieh was passiert.<br><br>

Beispiel einer Schleife:
<pre><code>for (let i = 0; i < 5; i++) {
    move()
}</code></pre><br>

                <i>(Ab dieser Lektion ist die Funktion "turnRight" direkt verfügbar, und muss nicht mehr manuell definiert werden.)</i><br><br>`,
            },
            {
                title: "Den Inhalt der Schleife verändern",
                explanation: `Innerhalb der <code>{}</code>-Klammern der For-Schleife kannst du so viele Befehle schreiben wie du möchtest. Jeder dieser Befehle wird bei jedem Durchlauf der Schleife aufgerufen.<br><br>
        
                Beispiel mit mehreren Befehlen:
<pre><code>for (let i = 0; i < 5; i++) {
    move()
    pickBeeper()
}</code></pre><br>`,
            },
            {
                title: "Sonderfälle im ersten/letzten Schleifendurchlauf",
                explanation: `Alle Befehle die innerhalb der Schleife stehen, werden immer zusammen ausgeführt. In diesem Beispiel wird immer ein Beeper aufgehoben und sich danach immer bewegt:<br><br>

<pre><code>for (let i = 0; i < 5; i++) {
    pickBeeper()
    move()
}</code></pre><br>
        
                Manchmal wird es etwas knifflig, wenn man im ersten oder letzten Durchlauf der Schleife an Sonderfälle denken muss. Wenn Pfeili ganz rechts angekommen ist, muss er z.B. noch einen Beeper aufheben ohne sich danach zu bewegen (Da er sonst gegen den Rand des Levels läuft).<br><br>
                
                Du kannst natürlich auch vor und nach einer Schleife Code schreiben, der dann nicht mehrfach sondern nur einmal ausgeführt wird.`,
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
        name: "If",
        explanations: [
            {
                title: "Mehrere Pfeilis",
                explanation: `Wie du siehst gibt es in diesem Level zwei Pfeilis, jeweils mit ihrer eigenen Welt. In diesem Fall wird dein Code erst für die eine Welt ausgeführt und direkt im Anschluss wird derselbe Code nochmal von vorne für die andere Welt ausgeführt. Die beiden Welten beeinflussen sich gegenseitig also in keiner Form, und die komplette Code-Ausführung wird auf Anfang zurückgesetzt, bevor die zweite Welt startet. Als Resultat muss der selbe Code für zwei verschiedene Situationen funktionieren.<br><br>`,
            },
            {
                title: "Wie man If-Statements nutzt",
                explanation: `Häufig wollen wir unseren Code so schreiben, dass er flexibel auf unterschiedliche Situationen reagieren kann. Dafür nutzen wir sogenannte "Bedingungen" oder "If-Statements". Diese prüfen, ob eine bestimmte Bedingung erfüllt ist und führen dann den Code innerhalb der <code>{}</code>-Klammern nach dem "if" nur aus, wenn die Bedingung erfüllt ist. Mit dem folgenden Code kannst du ausprobieren, wie das funktioniert.<br><br>

                <b>Code Beispiel:</b><br>
<pre><code>if(leftIsClear()){
    turnLeft()
}</code></pre><br>`,
            },
            {
                title: "Anderen Code zwischen den {}-Klammern",
                explanation: `Zwischen die <code>{}</code>-Klammern des If-Statements kannst du beliebigen anderen Code schreiben, also einen oder mehrere Befehle, Loops, oder weitere If-Statements. Die Bedingung wird immer nur genau einmal geprüft, egal wieviele Zeilen Code danach zwischen den <code>{}</code>-Klammern stehen. Es wird also immer der gesamte Code-Block ausgeführt, sofern die Bedingung zutrifft. <br><br>
                
                <b>Code Beispiel:</b><br>
<pre><code>if(leftIsClear()){
    turnLeft()
    move()
}</code></pre><br>`,
            },
            {
                title: "Neue Bedingungen zwischen den ()-Klammern",
                explanation: `In den <code>()</code>-Klammern der If-Statements hast du bist jetzt immer <code>leftIsClear()</code> abgefragt, jedoch können dort auch andere Bedingungen stehen. Das Prinzip bleibt das gleiche: nur wenn die Bedingung erfüllt ist, wird der Code in den {}-Klammern danach ausgeführt.<br><br>
                
                <b>Code Beispiel:</b><br>
<pre><code>if(beeperIsPresent()){

}</code></pre><br>`,
            },
        ],
        code: `move()`,
        commands: ["leftIsClear", "beeperIsPresent", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
        worlds: [
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 14, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ],

                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 2, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 4, y: 1, count: 1 },],
                        solutions: [],
                    },
                ]
            },
            {
                walls: [
                    [0, 0, 13, 0, 0, 0, 0, 0],
                    [0, 0, 5, 0, 0, 0, 0, 0],
                    [0, 0, 3, 10, 10, 10, 14, 0],
                ],

                karel: { x: 2, y: 0, direction: 3, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 2, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 1, count: 1 }, { x: 2, y: 2, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 1, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 5, y: 2, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 2, y: 1, count: 1 }, { x: 2, y: 2, count: 1 }, { x: 5, y: 2, count: 1 }, { x: 6, y: 2, count: 1 },],
                        solutions: [],
                    },
                ]
            },
        ],
    },
    {
        name: "If/ Else",
        explanations: [
            {
                title: "Wie man If-Else benutzt",
                explanation: `Manchmal soll ein alternativer Code nur dann ausgeführt werden, wenn die Bedingung im If-Statement nicht erfüllt ist. Dafür gibt es das "Else" nach dem "if". Der Code innerhalb der {}-Klammern nach dem "Else" wird nur ausgeführt, wenn die Bedingung im "If" nicht erfüllt ist.<br><br>
        
                <b>Code Beispiel:</b><br>
<pre><code>if(leftIsClear()){
    turnLeft()
}
else{
    turnRight()   
}</code></pre><br>`,
            },
            {
                title: "Code zwischen den {}-Klammern ändern",
                explanation: `Zwischen die <code>{}</code>-Klammern des If-Else-Statements kannst du beliebigen Code schreiben, also einen oder mehrere Befehle, Loops, If-Statements usw. Sobald die Ausführung in einem der <code>{}</code>-Blöcke beginnt (entweder bei <code>if</code> oder bei <code>else</code>), werden alle Befehle in diesem Block ausgeführt. Die Bedingung am Anfang wird auch bei mehreren Code-Zeilen nicht noch einmal geprüft.<br><br>
                
                <b>Code Beispiel:</b><br>
<pre><code>if(leftIsClear()){
    turnLeft()
    move() 
}
else{
    turnRight() 
}</code></pre><br>`,
            },
            {
                title: "Code zwischen den ()-Klammern ändern",
                explanation: `Zwischen die <code>()</code>-Klammern des If-Else-Statements kannst du, wie auch bei einfachen If-Statements, andere Bedingungen nutzen.<br><br>
                
                <b>Code Beispiel:</b><br>
<pre><code>if(beeperIsPresent()){
    pickBeeper()
}
else{
    
}</code></pre><br>`,
            },
        ],
        code: `if(leftIsClear()){
    turnLeft()
}
else{
    turnRight()
}
move()`,
        commands: ["leftIsClear", "beeperIsPresent", "move", "turnLeft", "turnRight", "putBeeper", "pickBeeper"],
        worlds: [
            {
                walls: [
                    [0, 13, 0, 0, 0, 0, 0],
                    [0, 3, 10, 10, 10, 14, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                ],
                karel: { x: 1, y: 0, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 4, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 4, y: 1, count: 1 }, { x: 5, y: 1, count: 1 },],
                        solutions: [],
                    },
                ]
            },
            {
                walls: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 9, 10, 14, 0, 0, 0],
                    [0, 7, 0, 0, 0, 0, 0],
                ],

                karel: { x: 1, y: 2, direction: 0, isSuper: false, beeperCount: 0 },
                tasks: [
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 },],
                        solutions: [],
                    },
                    {
                        beepers: [{ x: 1, y: 1, count: 1 }, { x: 2, y: 1, count: 1 },],
                        solutions: [{ x: 3, y: 1, count: 1 },],
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
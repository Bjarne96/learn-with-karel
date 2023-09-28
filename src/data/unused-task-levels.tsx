import type { INewLevel } from "../types/karel";
export const levels: Array<INewLevel> = [
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
                title: "Den Aufbau von Schleifen verstehen",
                explanation: `Leider wirst du in diesem Kurs nicht alle Einzelheiten zu Schleifen lernen können, ist normal dass die Schreibweise kryptisch auf dich wirkt. Wenn es dich interessiert, dann findest du hier weiterführende Infos, aber für diesen Kurs wird das nicht mehr wichtig werden. <em>Du kannst diese Lektion ohne Probleme überspringen</em>.<br><br>
                
                <b>Aufbau einer For-Loop</b><br>
<pre><code>for (let i = 0; i < beliebigeZahl; i++){
    einBefehl()
    zweiterBefehl()
    beliebigVieleBefehle()
}</code></pre><br>
                
                Was hier passiert, ist dass wir uns merken, wie häufig die Schleife schon durchlaufen wurde und diesen Wert jeden Durchlauf mit einer festen Zahl vergleichen. So lange die Anzahl der Durchläufe kleiner ist, als unsere festgelegte Zahl, wird die Schleife weiter durchlaufen.<br><br>

                <em>"let i = 0"</em> Das "i" ist eine sogenannte Variable, aber das ist ein Thema für sich. Dies ist eine Art Speicher für eine Information. Zunächst wird hier eine "0" gespeichert.<br><br>

                <em>"i++"</em> Dies bedeutet, dass wir nach jedem Schleifen-Durchlauf 1 auf unsere Zahl im Speicher addieren. Somit spiegelt die Zahl im Speicher immer die Anzahl der Durchläufe wieder (beginnend beim "nullten" Durchauf. Informatiker*innen fangen gerne bei 0 statt bei 1 an zu zählen.)<br><br>
                <em>"i < beliebigeZahl"</em> Dies ist ein Vergleich zwischen zwei Zahlen. So lange die Zahl im Speicher (das "i") kleiner ist, als unsere festgelegte Zahl, wird die Schleife weiter ausgeführt.<br>`
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
];

{
    title: "Besonderheit von If-Statements vs. If-Else",
        explanation: `Verlgeiche die beiden Codeblöcke:<br><br>

    <b>Code-Beispiel 1</b><br>
<pre><code>if(leftIsClear())
{
turnLeft()
}
if(rightIsClear())
{
turnRight()
}</code></pre><br>

<b>Code-Beispiel 2</b><br>
<pre><code>if(leftIsClear())
{
turnLeft()
}
else
{
turnRight()
}</code></pre><br>`,
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

export default levels;
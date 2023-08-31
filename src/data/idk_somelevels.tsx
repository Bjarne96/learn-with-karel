import type { INewLevel } from "../types/karel";
export const levels: Array<INewLevel> = [
    {
        name: "Start - Commands & UI",
        explanations: [
            {
                title: "erstes",
                explanation: `<b>Willkommen beim Learnlab0!</b><br>
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
                title: "zweites",
                explanation: `<b>Willkommen beim Learnlab1!</b><br>
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
                title: "drittes",
                explanation: `<b>Willkommen beim Learnlab2!</b><br>
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
            }
        ],
        code: `//level1\n`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper", "moveAmount"],
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
                        beepers: [{ x: 3, y: 2, count: 1 },],
                        solutions: [{ x: 4, y: 2, count: 1 },],
                    },
                    {
                        beepers: [{ x: 4, y: 2, count: 1 },],
                        solutions: [{ x: 5, y: 2, count: 1 },],
                    },
                    {
                        beepers: [{ x: 5, y: 2, count: 1 },],
                        solutions: [{ x: 6, y: 2, count: 1 },],
                    }
                ]
            },
        ],
    },
    {
        name: "Start - Commands & UI 2",
        explanations: [
            {
                title: "erstes",
                explanation: `<b>Willkommen beim Learnlab0!</b><br>
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
                title: "zweites",
                explanation: `<b>Willkommen beim Learnlab1!</b><br>
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
                title: "drittes",
                explanation: `<b>Willkommen beim Learnlab2!</b><br>
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
            }
        ],
        code: `//level2\n`,
        commands: ["move", "turnLeft", "putBeeper", "pickBeeper", "moveAmount"],
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
                        beepers: [{ x: 3, y: 2, count: 1 },],
                        solutions: [{ x: 4, y: 2, count: 1 },],
                    },
                    {
                        beepers: [{ x: 4, y: 2, count: 1 },],
                        solutions: [{ x: 5, y: 2, count: 1 },],
                    },
                    {
                        beepers: [{ x: 5, y: 2, count: 1 },],
                        solutions: [{ x: 6, y: 2, count: 1 },],
                    }
                ]
            },
        ],
    }
];

export default levels;
import type { ILevel } from "../types/karel";
export const levels: Array<ILevel> = [
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
];

export default levels;
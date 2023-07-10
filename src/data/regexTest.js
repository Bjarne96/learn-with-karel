function wait(ms, paused) {
  //Wenn pausiert, dann auf Knopfdruck warten, um weiter zu machen.
  if (paused) {
    return new Promise(resolve => {
      btn = document.getElementById("Continue");
      btn.addEventListener('click', function (e) {
        resolve();
      }, { once: true }); //Event listener wird nach einem Aufruf wieder entfernt
    });
  }
  //Sonst nach bestimmten zeitintervall weiter machen.
  else {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    });
  }
}

function insertAsynchAwait(inputCode) {
  //(?<=something) ist ein look-ahead, der nur matches returned, wenn "something" vor dem eigentlichen Match steht. "something" wird aber nicht als Match returned, nur der darauffolgende String.
  //(?<!something) ist ein negativer look-ahead, der nur ein Match returned, wenn "something" NICHT davor steht.

  const funcDefPattern = new RegExp(/(?<=\bfunction\s+)\b(\w+)\b/, 'g'); //returned Funktionsnamen, bei Funktionsdefinition
  const funcCallPattern = new RegExp(/(?<!\bfunction\s+)\b(\w+)\b(?=\([^)]*\))/, 'g'); //returned Funktionsnamen, bei Funktionsaufruf

  const output = inputCode
    .replace(funcCallPattern, 'await $1')
    .replace(funcDefPattern, 'async $1');
  return output;
}

//Input
var inputString = `
function turnRight( stepAmount )
{ 
  turnLeft(4);
  turnLeft( 2,   3);
  turnLeft( 23);
  turnLeft("asdf" );
}

while (frontIsClear()) {
  move();
}
turnRight();
await move();`;

//Expected Output
var outputString = `
async function turnRight() {
  await turnLeft();
  await turnLeft();
  await turnLeft();
}

while (await frontIsClear()) {
  await move();
}
await turnRight();
await move();`;

console.log(insertAsynchAwait(inputString))
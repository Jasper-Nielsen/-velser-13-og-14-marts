"use strict";

//------- capitalize del 1 og del 2------------

//const firstName = "Peter";

function writeCapitalized(name) {
  const firstLetters = name.substring(0, 1).toUpperCase();
  const restOfLettersLowercase = name.substring(1).toLowerCase();

  console.log(`${firstLetters}${restOfLettersLowercase}`);
}

writeCapitalized("pETer");
writeCapitalized("PEter");
writeCapitalized("peteR");
writeCapitalized("PEtER");

writeCapitalized("PEtER Lind"); // output Peter lind, der er ikke komma dvs. prog ser det som et argument
writeCapitalized("PEtER", "liND"); // output Peter. prog skriver kun Peter da func kun har et parameter og derfor ikke
// kan passere argument liND

//------------capitalize del 3-------
//Nu skal du lave en funktion, der ikke udskriver, men returnerer den tilrettede streng.

function capitalized(name){
    const firstLetters = name.substring(0, 1).toUpperCase();
    const restOfLettersLowercase = name.substring(1).toLowerCase();

    return `${firstLetters}${restOfLettersLowercase}`;

}

console.log(capitalized("pETer"));
console.log(capitalized("PEter"));
console.log(capitalized("peteR"));
console.log(capitalized("PEtER"));


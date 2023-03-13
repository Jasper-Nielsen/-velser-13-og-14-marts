"use strict";

const tekst = "My name is Erik";

//angiv start index for det vi ønsker at udprinte
const start = tekst.lastIndexOf(" ") + 1;

// const slut = tekst.length;
//selecterer det vi valgte i start og slut
const myName = tekst.substring(start);

//udskriv myName variablens værdi
console.log(myName);

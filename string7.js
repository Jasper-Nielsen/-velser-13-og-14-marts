"use strict";


const firstName = "Peter";

const firstLetters = firstName.substring(0, 1).toUpperCase();
const restOfLettersLowercase = firstName.substring(1).toLowerCase();


console.log(`${firstLetters}${restOfLettersLowercase}`);
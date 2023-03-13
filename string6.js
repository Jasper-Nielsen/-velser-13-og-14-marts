"use strict";

const firstName = "jasPER"

const firstTwoLetters = firstName.substring(0,2).toLowerCase();
const capitalThirdLetter = firstName.toUpperCase().substring(2, 3);
const lastLetters = firstName.substring(3).toLowerCase();

console.log(`${firstTwoLetters}${capitalThirdLetter}${lastLetters}`);


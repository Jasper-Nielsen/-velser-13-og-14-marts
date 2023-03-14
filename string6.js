"use strict";

const name = "jasPER";

const firstTwoLetters = name.substring(0, 2).toLowerCase();
const capitalThirdLetter = name.toUpperCase().substring(2, 3); //kan skrive charAt() eller at() eller [2]
const lastLetters = name.substring(3).toLowerCase();
const output = `${firstTwoLetters}${capitalThirdLetter}${lastLetters}`;
console.log(output);

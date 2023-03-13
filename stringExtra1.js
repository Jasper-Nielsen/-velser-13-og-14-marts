"use strict";

// let word = "Juletræ"
// const letterE = "e"
function splitWord(word) {
  if (word.includes("e")) {
    let firstPartOfWord = word.substring(0, word.indexOf("e") + 1);
    let secondPartOfWord = word.lastIndexOf("e") + 1;
    let restOfWord = word.substring(secondPartOfWord);
    console.log(`${firstPartOfWord} ${restOfWord}`);
  } else {
    console.log(word);
  }
}

splitWord("juletræ");

const word = "hundehus";
const firstPartOfWord = word.substring(0, word.indexOf("e") + 1);

const secondPartOfWord = word.lastIndexOf("e") + 1;

const restOfWord = word.substring(secondPartOfWord);

console.log(`${firstPartOfWord} ${restOfWord}`);

const word2 = "bryllupsfest";

const firstPart = word2.substring(0, word2.indexOf("s") + 1);

const secondPart = word2.substring(word2.indexOf("s") + 1);

console.log(`${firstPart} ${secondPart}`);

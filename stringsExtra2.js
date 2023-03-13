"use strict";

let firstName = "harry";

let codePoint1 = firstName.codePointAt(0);
let codePoint2 = firstName.codePointAt(1);
let codePoint3 = firstName.codePointAt(2);
let codePoint4 = firstName.codePointAt(3);
let codePoint5 = firstName.codePointAt(4);

console.log(codePoint1);
console.log(codePoint2);
console.log(codePoint3);
console.log(codePoint4);
console.log(codePoint5);

// const codePointAll = firstName.substring(0, firstName.length);

// console.log(codePointAll);

firstName = "HARRY";

//converts uppercase to lower case by adding 32
codePoint1 = firstName.codePointAt(0) + 32;
codePoint2 = firstName.codePointAt(1) + 32;
codePoint3 = firstName.codePointAt(2) + 32;
codePoint4 = firstName.codePointAt(3) + 32;
codePoint5 = firstName.codePointAt(4) + 32;

console.log(codePoint1);
console.log(codePoint2);
console.log(codePoint3);
console.log(codePoint4);
console.log(codePoint5);
